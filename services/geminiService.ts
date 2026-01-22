
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const suggestStoryTitle = async (content: string) => {
  if (!process.env.API_KEY) return "Kindness Moment";
  
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest a very short, punchy, inspiring title (max 6 words) for this kindness story: "${content}"`,
    });
    return response.text?.trim().replace(/"/g, '') || "Kindness Moment";
  } catch (error) {
    console.error("Gemini Title Suggestion Error:", error);
    return "Kindness Moment";
  }
};

export const getKindnessQuote = async () => {
    if (!process.env.API_KEY) return "Kindness is a language which the deaf can hear and the blind can see.";
    
    try {
      const ai = getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Give me one short, profound, and unique quote about kindness and human connection.",
      });
      return response.text?.trim() || "Kindness is the ultimate strength.";
    } catch (error) {
      return "Kindness is a ripple that starts with you.";
    }
}
