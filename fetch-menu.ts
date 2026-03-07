import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: 'Finde die Speisekarte von "May Food" in Köln (z.B. über Lieferando, Wolt oder Google). Liste alle Kategorien, Gerichte, Beschreibungen und Preise auf, die du finden kannst.',
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}
run();
