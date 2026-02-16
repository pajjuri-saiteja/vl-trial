
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for VL Interiors, a premium luxury interior design studio.
Your tone is sophisticated, professional, elegant, and helpful.
You know about:
- VL Interiors specializes in sophisticated residential transformations.
- Services: Luxury Residential Interiors, Apartment Styling, Space Planning & 3D Visualization, Custom Furniture, and Turnkey Projects.
- Projects like 'The Serenity Villa', 'Urban Calm Apartment', 'The Olive Penthouse', and 'Maison Lumière'.
- Founders' philosophy: "Designing Timeless Spaces That Feel Like Home".
- Studio values: Precision, elevated aesthetics, emotional engagement.

Keep answers concise and polished. Refer the user to the "Contact" page or "Projects" page when appropriate.
`;

export async function getConciergeResponse(prompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-latest',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
    return response.text || "I apologize, I am unable to assist at the moment. Please contact our studio directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our concierge is currently unavailable. Please visit our contact page for assistance.";
  }
}
