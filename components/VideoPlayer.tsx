import React from 'react';
import { Testimonial } from '../types';

interface VideoPlayerProps {
  testimonial: Testimonial;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ testimonial }) => {
  return (
    <div className="bg-ivory rounded-lg shadow-xl p-6 flex flex-col items-center text-center border-t-4 border-gold-500">
      <div className="w-full aspect-[9/16] bg-rich-black rounded-md mb-4 flex items-center justify-center">
        {testimonial.generating ? (
          <div className="flex flex-col items-center text-ivory">
            <svg className="animate-spin h-8 w-8 text-gold-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-2 text-sm">Generating Video...</p>
             <p className="mt-1 text-xs text-gold-100">This can take a few minutes.</p>
          </div>
        ) : (
          <video
            src={testimonial.videoUrl}
            controls
            className="w-full h-full object-cover rounded-md"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <blockquote className="text-jet font-sans italic text-base flex-grow">
        "{testimonial.quote}"
      </blockquote>
      <p className="mt-4 font-serif font-bold text-lg text-rich-black">- {testimonial.customerName}</p>
    </div>
  );
};

export default VideoPlayer;
