


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyD95woDERgV_DIl0BuxyEc_ccaQny9_Ewc"});

async function main(input) {
    console.log(input);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${input}`,
  });
  console.log(response.text);
}

export default main;



