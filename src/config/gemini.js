


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY});

async function main(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${input}`,
  });
  return response.text;
}

export default main;



