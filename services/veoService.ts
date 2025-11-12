import { GoogleGenAI } from "@google/genai";

// Polling interval in milliseconds
const POLLING_INTERVAL = 10000;

export const generateTestimonialVideo = async (prompt: string): Promise<string> => {
  // A new GoogleGenAI instance must be created right before the API call to ensure the latest API key is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '9:16' // Portrait mode for a social media feel
      }
    });

    // Poll for the result
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, POLLING_INTERVAL));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) {
      throw new Error("Video generation succeeded but no download link was provided.");
    }
    
    // The response.body contains the MP4 bytes. You must append an API key when fetching from the download link.
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const videoBlob = await response.blob();
    
    // Create a local URL for the video blob to be used in the <video> src attribute
    return URL.createObjectURL(videoBlob);

  } catch (error) {
    console.error("Error generating video:", error);
    // Rethrow the error to be handled by the component
    throw error;
  }
};
