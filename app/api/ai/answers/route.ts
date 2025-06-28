import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import { AIAnswerSchema } from "@/lib/validations";
export const maxDuration = 5;
export const runtime = "edge";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("An API Key must be set when running in a browser");
}

const ai = new GoogleGenAI({ apiKey });

export async function POST(req: Request) {
    const { question, content, userAnswer } = await req.json();

    try {
        const validatedData = AIAnswerSchema.safeParse({
            question,
            content,
        });

        if (!validatedData.success) {
            throw new ValidationError(
                validatedData.error.flatten().fieldErrors,
            );
        }

        const { text } = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a markdown-formatted response to the following question: "${question}".  
      
      Consider the provided context:  
      **Context:** ${content}  
      
      Also, prioritize and incorporate the user's answer when formulating your response:  
      **User's Answer:** ${userAnswer}  
      
      Prioritize the user's answer only if it's correct. If it's incomplete or incorrect, improve or correct it while keeping the response concise and to the point. 
      Provide the final answer in markdown format.`,
            config: {
                systemInstruction:
                    "You are a helpful assistant that provides informative responses in markdown format. Use appropriate markdown syntax for headings, lists, code blocks, and emphasis where necessary. For code blocks, use short-form smaller case language identifiers (e.g., 'js' for JavaScript, 'py' for Python, 'ts' for TypeScript, 'html' for HTML, 'css' for CSS, etc.). Additionally, consider standard solutions and incorporate best practices from popular libraries like React Hook Form, Redux, and others where relevant.",
            },
        });

        return NextResponse.json(
            { success: true, data: text },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
