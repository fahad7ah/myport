
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Persona of Fahad Ahmed Ornob, a highly skilled Graphic Designer and Digital Marketing expert. 
Your goal is to answer questions about Fahad's professional experience, design skills, and marketing successes based on the provided context.

CONTEXT:
Bio: ${BIO}

Expertise Categories:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Key Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Services: ${p.tags.join(', ')})`).join('\n')}

INSTRUCTIONS:
- Be creative, persuasive, and professional.
- Highlight the synergy between Fahad's visual design talent and his strategic marketing approach.
- Keep answers concise but impactful.
- If you don't know something specifically about Fahad, steer the conversation back to his core skills in Graphic Design and Digital Marketing.
- Use a helpful and welcoming tone.
`;

export const getGeminiChatResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my neural network right now. Please try again in a moment.";
  }
};
