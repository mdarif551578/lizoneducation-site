// 'use server';

import { generateIeltsTips as generateIeltsTipsFlow } from '@/ai/flows/generate-ielts-tips';
import type { GenerateIeltsTipsInput, GenerateIeltsTipsOutput } from '@/ai/flows/generate-ielts-tips';

// // We explicitly re-export the server action from the AI flow.
// // This is a good practice to separate the AI logic from its usage in the app.
export async function generateIeltsTips(input: GenerateIeltsTipsInput): Promise<GenerateIeltsTipsOutput> {
  return generateIeltsTipsFlow(input);
}
