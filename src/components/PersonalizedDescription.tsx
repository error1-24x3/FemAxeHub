'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
// import { personalizeArtistDescription } from '@/ai/flows/personalize-artist-description';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface PersonalizedDescriptionProps {
  artistName: string;
  originalDescription: string;
}

export function PersonalizedDescription({ artistName, originalDescription }: PersonalizedDescriptionProps) {
  const [userPreferences, setUserPreferences] = useState('');
  const [personalizedDescription, setPersonalizedDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePersonalize = async () => {
    if (!userPreferences) {
      setError('Please enter your music preferences.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setPersonalizedDescription(null);
    try {
      // AI personalization is disabled in the static mobile app build.
      // In a production app, this would be an API call to a remote server.
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPersonalizedDescription(`[AI Personalization is currently disabled in mobile view] ${originalDescription}`);
    } catch (e) {
      setError('Sorry, we couldn\'t personalize this description. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Biography</CardTitle>
        <CardDescription>
          {isLoading ? 'Personalizing your description...' : personalizedDescription ?? originalDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
            <Label htmlFor="preferences" className="text-sm font-medium text-muted-foreground">
              Personalize this bio based on your taste!
            </Label>
            <p className="text-xs text-muted-foreground/70 mb-2">e.g., "I love 80s shred guitar" or "I'm into acoustic fingerstyle"</p>
            <div className="flex gap-2">
                <Input
                    id="preferences"
                    placeholder="Your music preferences..."
                    value={userPreferences}
                    onChange={(e) => setUserPreferences(e.target.value)}
                    disabled={isLoading}
                />
                <Button onClick={handlePersonalize} disabled={isLoading || !userPreferences}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isLoading ? 'Personalizing...' : 'Personalize'}
                </Button>
            </div>
            {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
