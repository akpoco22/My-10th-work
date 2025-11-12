import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { generateTestimonialVideo } from '../services/veoService';
import VideoPlayer from './VideoPlayer';
import AdminPanel from './AdminPanel';

// Initial testimonial to show while the first one is generating
const initialTestimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    customerName: 'Generating Testimonial...',
    quote: "Our AI is crafting a story from one of our delighted customers. This may take a few moments.",
    videoUrl: '', // No video URL for the placeholder
    generating: true,
  },
];

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeySelected, setApiKeySelected] = useState(false);
  
  // Check for API key on component mount
  useEffect(() => {
    const checkApiKey = async () => {
        if (await window.aistudio.hasSelectedApiKey()) {
            setApiKeySelected(true);
        }
    };
    checkApiKey();
  }, []);

  // Generate a sample video on first load after API key is selected
  useEffect(() => {
    if (apiKeySelected && testimonials.length === 1 && testimonials[0].id === 'placeholder-1') {
      const generateSample = async () => {
          setIsGenerating(true);
          setError(null);
          try {
              const prompt = "A close-up shot of a smiling woman in her early 30s, looking elegant. She is wearing a beautiful, sparkling diamond necklace from Aura Jewels and gently touches it. The background is soft and slightly blurred. She looks genuinely happy and appreciative.";
              const videoUrl = await generateTestimonialVideo(prompt);
              const newTestimonial: Testimonial = {
                  id: new Date().toISOString(),
                  customerName: 'Sophia L.',
                  quote: "I've never felt more elegant. The craftsmanship is simply breathtaking.",
                  videoUrl: videoUrl,
                  generating: false,
              };
              setTestimonials([newTestimonial]);
          } catch (err: any) {
              console.error(err);
              setError("We couldn't generate a sample testimonial at this time. Please try again later.");
              // Remove placeholder on error
              setTestimonials([]);
          } finally {
              setIsGenerating(false);
          }
      };
      generateSample();
    }
  }, [apiKeySelected]);


  const handleOpenSelectKey = async () => {
    await window.aistudio.openSelectKey();
    // Assume key selection is successful and update the state to trigger generation
    setApiKeySelected(true);
  };

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    setError(null);
    const tempId = `generating-${Date.now()}`;
    const placeholder: Testimonial = {
        id: tempId,
        customerName: "Generating...",
        quote: "Crafting a new customer story...",
        videoUrl: "",
        generating: true,
    };

    setTestimonials(prev => [placeholder, ...prev.filter(t => t.id !== 'placeholder-1')]);

    try {
      const videoUrl = await generateTestimonialVideo(prompt);
      const newTestimonial: Testimonial = {
        id: new Date().toISOString(),
        customerName: 'A Valued Client', // Generic name for admin-generated videos
        quote: 'A newly generated story of satisfaction and luxury.',
        videoUrl,
        generating: false,
      };
      setTestimonials(prev => [newTestimonial, ...prev.filter(t => t.id !== tempId)]);
      setIsAdminPanelVisible(false); // Hide panel on success
    } catch (err: any) {
      console.error(err);
      let errorMessage = "An error occurred while generating the video.";
      if (err.message.includes("Requested entity was not found.")) {
          errorMessage = "API Key not found or invalid. Please select a valid API key and try again.";
          setApiKeySelected(false); // Reset key state
      }
      setError(errorMessage);
      setTestimonials(prev => prev.filter(t => t.id !== tempId)); // Remove placeholder on error
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rich-black">Voices of Aura</h2>
          <p className="text-jet mt-2">Hear directly from those who cherish our creations.</p>
          <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        
        {!apiKeySelected && (
            <div className="text-center bg-gold-100 p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gold-700 mb-4">Enable Video Generation</h3>
                <p className="text-jet mb-6">To view and generate AI-powered video testimonials, please select an API key. This enables our connection to the generative video service.</p>
                <p className="text-sm text-gray-600 mb-6">For more information on billing, please visit <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline">ai.google.dev/gemini-api/docs/billing</a>.</p>
                <button 
                    onClick={handleOpenSelectKey}
                    className="bg-rich-black text-white font-bold py-3 px-8 rounded-full hover:bg-jet transition-colors duration-300"
                >
                    Select API Key
                </button>
            </div>
        )}

        {apiKeySelected && (
            <>
                {error && <p className="text-center text-red-600 mb-4 bg-red-100 p-3 rounded-md">{error}</p>}
                
                {testimonials.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map(testimonial => (
                      <VideoPlayer key={testimonial.id} testimonial={testimonial} />
                    ))}
                  </div>
                ) : (
                  !isGenerating && <p className="text-center text-jet">No testimonials available at the moment.</p>
                )}

                <div className="text-center mt-12">
                    <button 
                        onClick={() => setIsAdminPanelVisible(!isAdminPanelVisible)}
                        className="bg-gold-500 text-rich-black font-bold py-2 px-6 rounded-full hover:bg-gold-300 transition-all duration-300"
                    >
                        {isAdminPanelVisible ? 'Close Admin Panel' : 'Add New Testimonial'}
                    </button>
                </div>

                {isAdminPanelVisible && (
                    <AdminPanel onGenerate={handleGenerate} isLoading={isGenerating} />
                )}
            </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
