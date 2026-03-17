import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Artist } from '@/lib/types';
import FavoritesButton from './FavoritesButton';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  return (
    <Link href={`/artists/${artist.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 border-border/50">
        <div className="relative">
          <Image
            src={artist.image}
            alt={artist.name}
            width={400}
            height={400}
            unoptimized
            className={cn(
              "aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105",
              artist.imagePosition || 'object-center'
            )}
            data-ai-hint={`${artist.genre} ${artist.instrument}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <FavoritesButton artistId={artist.id} />
        </div>
        <CardHeader className="relative -mt-16 z-10">
          <CardTitle className="font-headline text-2xl text-white drop-shadow-lg">{artist.name}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">{artist.genre}</Badge>
            </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtistCard;
