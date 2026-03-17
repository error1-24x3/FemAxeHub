// src/ai/flows/personalize-artist-description.ts

/**
 * @fileOverview A flow to personalize artist descriptions for the discovery feed.
 *
 * - personalizeArtistDescription - A function that personalizes an artist description.
 * - PersonalizeArtistDescriptionInput - The input type for the personalizeArtistDescription function.
 * - PersonalizeArtistDescriptionOutput - The return type for the personalizeArtistDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeArtistDescriptionInputSchema = z.object({
  artistName: z.string().describe('The name of the artist.'),
  description: z.string().describe('The original artist description.'),
  userPreferences: z.string().describe('The user\u0027s music preferences.'),
});
export type PersonalizeArtistDescriptionInput = z.infer<
  typeof PersonalizeArtistDescriptionInputSchema
>;

const PersonalizeArtistDescriptionOutputSchema = z.object({
  personalizedDescription: z
    .string()
    .describe('The personalized artist description.'),
});
export type PersonalizeArtistDescriptionOutput = z.infer<
  typeof PersonalizeArtistDescriptionOutputSchema
>;

export async function personalizeArtistDescription(
  input: PersonalizeArtistDescriptionInput
): Promise<PersonalizeArtistDescriptionOutput> {
  return personalizeArtistDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeArtistDescriptionPrompt',
  input: {schema: PersonalizeArtistDescriptionInputSchema},
  output: {schema: PersonalizeArtistDescriptionOutputSchema},
  prompt: `You are an AI assistant specializing in personalizing artist descriptions for music discovery. Given the artist's original description and the user's music preferences, rewrite the description to be more engaging and tailored to the user.\

Artist Name: {{{artistName}}}
Original Description: {{{description}}}
User Preferences: {{{userPreferences}}}

Personalized Description:`,
});

const personalizeArtistDescriptionFlow = ai.defineFlow(
  {
    name: 'personalizeArtistDescriptionFlow',
    inputSchema: PersonalizeArtistDescriptionInputSchema,
    outputSchema: PersonalizeArtistDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
