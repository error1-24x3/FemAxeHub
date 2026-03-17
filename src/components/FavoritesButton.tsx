"use client";

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FavoritesButtonProps {
  artistId: string;
}

const FavoritesButton = ({ artistId }: FavoritesButtonProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full bg-card/70 hover:bg-card">
            <Heart className="w-5 h-5 text-muted-foreground/50" />
        </Button>
    );
  }

  const favorite = isFavorite(artistId);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-2 right-2 rounded-full bg-card/70 hover:bg-card"
      onClick={(e) => {
        e.preventDefault(); 
        toggleFavorite(artistId);
      }}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart
        className={cn(
          "w-5 h-5 transition-all duration-300",
          favorite ? "text-red-500 fill-red-500" : "text-primary"
        )}
      />
    </Button>
  );
};

export default FavoritesButton;
