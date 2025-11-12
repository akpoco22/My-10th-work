import { GoogleGenAI } from "@google/genai";

// Fix: Per coding guidelines, initialize GoogleGenAI directly with process.env.API_KEY
// and assume API_KEY is always available in the environment. Fallback logic for a
// missing key has been removed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContactReply = async (name: string, inquiry: string): Promise<string> => {
  try {
    const prompt = `You are a highly professional and courteous customer service representative for 'Aura Jewels', a luxury jewelry brand. A potential customer named ${name} has submitted an inquiry. Your task is to generate a brief, polite, and reassuring initial automated response. Acknowledge their message, thank them for their interest, and state that a dedicated specialist will review their inquiry and respond personally within 24 business hours. Do not attempt to answer their specific question. Keep the tone warm and luxurious.

Customer's inquiry: "${inquiry}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating Gemini reply:", error);
    return "Thank you for reaching out. We have received your message and will get back to you as soon as possible.";
  }
};
