
import React, { useState } from 'react';
import { generateContactReply } from '../services/geminiService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.inquiry) {
      setResponse("Please fill out all fields.");
      setStatus('error');
      return;
    }
    setStatus('loading');
    setResponse('');
    try {
      const reply = await generateContactReply(formData.name, formData.inquiry);
      setResponse(reply);
      setStatus('success');
      setFormData({ name: '', email: '', inquiry: '' });
    } catch (error) {
      setResponse("An unexpected error occurred. Please try again later.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rich-black">Get in Touch</h2>
          <p className="text-jet mt-2">We're here to assist with your inquiries.</p>
          <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-jet">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-ivory border border-gold-300 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-jet">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-ivory border border-gold-300 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500" />
            </div>
            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-jet">Your Message</label>
              <textarea name="inquiry" id="inquiry" rows={4} value={formData.inquiry} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-ivory border border-gold-300 rounded-md shadow-sm focus:outline-none focus:ring-gold-500 focus:border-gold-500"></textarea>
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full bg-rich-black text-white font-bold py-3 px-6 rounded-full hover:bg-jet transition-colors duration-300 disabled:bg-gray-500">
              {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>

          <div className="bg-ivory p-6 rounded-lg border border-gold-300 flex items-center justify-center">
            {status === 'idle' && <p className="text-center text-jet">We'll respond to you shortly.</p>}
            {status === 'loading' && (
              <div className="flex flex-col items-center text-jet">
                 <svg className="animate-spin h-8 w-8 text-gold-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-2">Generating confirmation...</p>
              </div>
            )}
            {(status === 'success' || status === 'error') && (
              <div className={`p-4 rounded-md ${status === 'success' ? 'bg-gold-100' : 'bg-red-100'}`}>
                <h4 className={`font-bold ${status === 'success' ? 'text-gold-700' : 'text-red-700'}`}>Automated Response:</h4>
                <p className="text-sm text-jet whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
