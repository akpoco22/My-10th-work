import React, { useState } from 'react';

interface AdminPanelProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto bg-ivory p-8 rounded-lg shadow-inner border border-gold-300">
      <h3 className="text-2xl font-serif font-bold text-center text-rich-black mb-4">Generate New Testimonial</h3>
      <p className="text-center text-jet mb-6 text-sm">
        Describe the testimonial video you want to create. Be specific about the subject, setting, and mood.
        Example: "A man unboxing an Aura Jewels watch, his face showing excitement and awe. The lighting is warm and luxurious."
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter video description prompt here..."
          rows={4}
          className="w-full p-3 bg-white border border-gold-300 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full mt-4 bg-rich-black text-white font-bold py-3 px-6 rounded-full hover:bg-jet transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generating...' : 'Generate Video'}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
