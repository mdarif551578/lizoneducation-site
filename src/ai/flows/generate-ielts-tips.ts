'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized IELTS preparation tips based on the user's area of focus.
 *
 * - generateIeltsTips - A function that generates personalized IELTS preparation tips.
 * - GenerateIeltsTipsInput - The input type for the generateIeltsTips function.
 * - GenerateIeltsTipsOutput - The return type for the generateIeltsTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIeltsTipsInputSchema = z.object({
  areaOfFocus: z
    .string()
    .describe("The specific area of focus for IELTS preparation (e.g., writing, speaking, reading, listening)."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({text: z.string()}))
  })).optional().describe("The conversation history between the user and the AI tutor."),
});
export type GenerateIeltsTipsInput = z.infer<typeof GenerateIeltsTipsInputSchema>;

const GenerateIeltsTipsOutputSchema = z.object({
  tips: z.string().describe("Personalized IELTS preparation tips for the specified area of focus."),
});
export type GenerateIeltsTipsOutput = z.infer<typeof GenerateIeltsTipsOutputSchema>;

export async function generateIeltsTips(input: GenerateIeltsTipsInput): Promise<GenerateIeltsTipsOutput> {
  return generateIeltsTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIeltsTipsPrompt',
  input: {schema: GenerateIeltsTipsInputSchema},
  output: {schema: GenerateIeltsTipsOutputSchema},
  prompt: `You are an expert IELTS tutor. Your role is to provide personalized IELTS preparation tips.
The user has specified an area of focus.

{{#if history}}
Continue the conversation based on the history. Provide a helpful and concise response to the last user message.

Conversation History:
{{#each history}}
{{#if (eq role 'user')}}User: {{content.[0].text}}{{/if}}
{{#if (eq role 'model')}}Tutor: {{content.[0].text}}{{/if}}
{{/each}}

{{else}}
Start by providing initial, comprehensive tips for the following area of focus: {{{areaOfFocus}}}.
{{/if}}
`,
});

const generateIeltsTipsFlow = ai.defineFlow(
  {
    name: 'generateIeltsTipsFlow',
    inputSchema: GenerateIeltsTipsInputSchema,
    outputSchema: GenerateIeltsTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
