


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: localStorage.getItem("apiKey")});

async function main(input) {
    console.log(input);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${input}`,
  });
  return response.text;
}

export default main;



