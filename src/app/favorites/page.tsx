"use client";

import { useState, useEffect } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { artists } from '@/lib/artists';
import type { Artist } from '@/lib/types';
import ArtistCard from '@/components/ArtistCard';
import { HeartCrack } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteArtists, setFavoriteArtists] = useState<Artist[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // We need to re-filter artists on the client to include custom artists from localStorage
    const allArtists = artists;
    const favs = allArtists.filter(artist => favorites.includes(artist.id));
    setFavoriteArtists(favs);
  }, [favorites]);

  if (!isClient) {
    return (
      <div>
        <h1 className="text-4xl font-bold font-headline mb-8">My Favorite Artists</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg p-4 space-y-4 animate-pulse">
              <div className="aspect-square bg-muted rounded-md"></div>
              <div className="space-y-2">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold font-headline mb-8">My Favorite Artists</h1>
      {favoriteArtists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-lg border-2 border-dashed border-border/50 flex flex-col items-center justify-center">
            <HeartCrack className="w-16 h-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-muted-foreground">No Favorites Yet</h2>
            <p className="mt-2 text-muted-foreground">
                Click the heart icon on an artist to add them to your collection.
            </p>
             <Button asChild className="mt-4">
                <Link href="/">Discover Artists</Link>
            </Button>
        </div>
      )}
    </div>
  );
}
