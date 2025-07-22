// 'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized IELTS preparation tips based on the user's area of focus.
 *
 * - generateIeltsTips - A function that generates personalized IELTS preparation tips.
 * - GenerateIeltsTipsInput - The input type for the generateIeltsTips function.
 * - GenerateIeltsTipsOutput - The return type for the generateIeltsTips function.
 */

// import {ai} from '@/ai/genkit';
// import {z} from 'genkit';

// const GenerateIeltsTipsInputSchema = z.object({
//   areaOfFocus: z
//     .string()
//     .describe("The specific area of focus for IELTS preparation (e.g., writing, speaking, reading, listening)."),
//   history: z.array(z.object({
//     role: z.enum(['user', 'model']),
//     content: z.array(z.object({text: z.string()}))
//   })).optional().describe("The conversation history between the user and the AI tutor."),
// });
// export type GenerateIeltsTipsInput = z.infer<typeof GenerateIeltsTipsInputSchema>;

// const GenerateIeltsTipsOutputSchema = z.object({
//   tips: z.string().describe("Personalized IELTS preparation tips for the specified area of focus."),
// });
// export type GenerateIeltsTipsOutput = z.infer<typeof GenerateIeltsTipsOutputSchema>;

// export async function generateIeltsTips(input: GenerateIeltsTipsInput): Promise<GenerateIeltsTipsOutput> {
//   return generateIeltsTipsFlow(input);
// }

// const prompt = ai.definePrompt({
//   name: 'generateIeltsTipsPrompt',
//   input: {schema: GenerateIeltsTipsInputSchema},
//   output: {schema: GenerateIeltsTipsOutputSchema},
//   prompt: `You are an expert IELTS tutor. Your role is to provide personalized IELTS preparation tips.
// The user has specified an area of focus.

// {{#if history}}
// Continue the conversation based on the history. Provide a helpful and concise response to the last user message.

// Conversation History:
// {{#each history}}
// {{#if (eq role "user")}}User: {{content.[0].text}}{{/if}}
// {{#if (eq role "model")}}Tutor: {{content.[0].text}}{{/if}}
// {{/each}}
// User: {{areaOfFocus}}
// Tutor:
// {{else}}
// Start by providing initial, comprehensive tips for the following area of focus: {{{areaOfFocus}}}.
// {{/if}}
// `,
// });

// const generateIeltsTipsFlow = ai.defineFlow(
//   {
//     name: 'generateIeltsTipsFlow',
//     inputSchema: GenerateIeltsTipsInputSchema,
//     outputSchema: GenerateIeltsTipsOutputSchema,
//   },
//   async input => {
//     // Add boolean flags for Handlebars
//     const historyWithRoles = input.history?.map(item => ({
//       ...item,
//       isUser: item.role === 'user',
//       isModel: item.role === 'model'
//     }));
    
//     const {output} = await prompt({
//         ...input,
//         history: historyWithRoles as any, // Cast to any to avoid type issues with the added properties
//     });

//     return output!;
//   }
// );








// remove this
// src/ai/flows/generate-ielts-tips.ts

export type GenerateIeltsTipsInput = {
  areaOfFocus: string;
  history?: {
    role: 'user' | 'model';
    content: { text: string }[];
  }[];
};

export type GenerateIeltsTipsOutput = {
  tips: string;
};

export async function generateIeltsTips(input: GenerateIeltsTipsInput): Promise<GenerateIeltsTipsOutput> {
  const { areaOfFocus, history } = input;

  // You can simulate the AI logic based on focus
  const tipsMap: Record<string, string> = {
    writing: "Practice writing essays under time constraints. Focus on structure and coherence.",
    speaking: "Record yourself speaking on various IELTS topics and improve fluency and pronunciation.",
    listening: "Listen to English podcasts and transcribe them. Practice listening to various accents.",
    reading: "Skim passages first, then focus on details. Practice identifying keywords in questions.",
  };

  const fallbackTip = "Make sure to practice consistently across all sections and review your mistakes.";

  return {
    tips: tipsMap[areaOfFocus.toLowerCase()] || fallbackTip,
  };
}
