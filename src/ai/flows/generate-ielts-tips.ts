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
  prompt: `You are an expert IELTS tutor. Generate personalized IELTS preparation tips for the following area of focus:

Area of Focus: {{{areaOfFocus}}}

Tips:`, 
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
