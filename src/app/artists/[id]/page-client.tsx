
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Music, MicVocal, CalendarDays, ExternalLink, Instagram, Twitter, Facebook, Info, Youtube } from 'lucide-react';
import { PersonalizedDescription } from '@/components/PersonalizedDescription';
import type { Artist, MusicLink as MusicLinkType } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn, withBasePath } from '@/lib/utils';
import React from 'react';

const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform.toLowerCase()) {
        case 'instagram': return <Instagram className="w-5 h-5"/>;
        case 'twitter': return <Twitter className="w-5 h-5"/>;
        case 'facebook': return <Facebook className="w-5 h-5"/>;
        case 'youtube': return <Youtube className="w-5 h-5"/>;
        default: return <Globe className="w-5 h-5"/>;
    }
}


export default function ArtistProfileClientPage({ artist }: { artist: Artist }) {
  const getSpotifyEmbedUrl = (uri: string): string | null => {
    const parts = uri.split(':');
    if (parts.length < 3) {
      return null;
    }
    const type = parts[1];
    const id = parts[2];
    return `https://open.spotify.com/embed/${type}/${id}`;
  };
  
  const spotifyEmbedUrl = artist.spotifyUri ? getSpotifyEmbedUrl(artist.spotifyUri) : null;

  return (
    <div className="space-y-8">
      <section className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden -mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
        <Image
          src={withBasePath(artist.image)}
          alt={artist.name}
          fill
          unoptimized
          className={cn("object-cover", artist.imagePosition || 'object-center')}
          priority
          data-ai-hint={`${artist.genre} ${artist.instrument}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-white drop-shadow-xl">{artist.name}</h1>
            <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="secondary" className="backdrop-blur-sm bg-primary/20 text-primary-foreground">{artist.genre}</Badge>
                <Badge variant="secondary" className="backdrop-blur-sm bg-accent/20 text-accent-foreground">{artist.instrument}</Badge>
            </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <PersonalizedDescription artistName={artist.name} originalDescription={artist.bio} />
          
          {spotifyEmbedUrl && (
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <Music />
                  Listen on Spotify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={spotifyEmbedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          )}

          {artist.tourDates && artist.tourDates.length > 0 && (
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                    <CalendarDays />
                    Upcoming Tour Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Venue</TableHead>
                            <TableHead className="text-right">Tickets</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {artist.tourDates.map((tour, index) => (
                        <TableRow key={index}>
                            <TableCell>{new Date(tour.date + 'T00:00:00').toLocaleDateString(undefined, { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric' })}</TableCell>
                            <TableCell>{tour.city}</TableCell>
                            <TableCell>{tour.venue}</TableCell>
                            <TableCell className="text-right">
                                <Button asChild size="sm">
                                    <a href={tour.url} target="_blank" rel="noopener noreferrer">
                                        Buy Now <ExternalLink className="ml-2 w-4 h-4"/>
                                    </a>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>

        <aside className="space-y-6">
          <Card className="bg-card/50">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl"><MicVocal /> Follow</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {artist.socialLinks && artist.socialLinks.map((link) => (
                    <Button asChild variant="outline" key={link.platform}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                            <SocialIcon platform={link.platform} />
                            <span className="ml-2">{link.platform}</span>
                        </a>
                    </Button>
                ))}
            </CardContent>
          </Card>
        </aside>
      </div>

       <Card className="bg-card/50 border-primary/30 mt-8">
        <CardContent className="p-4">
            <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                    <h3 className="font-semibold font-headline text-primary">A Quick Note</h3>
                    <p className="text-sm text-muted-foreground">
                        If you experience any errors or find that the app isn't working as expected, please be assured I'll fix it. Check back the next day for updates.
                    </p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
