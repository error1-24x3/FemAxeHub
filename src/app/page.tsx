"use client";

import { useState, useEffect } from 'react';
import { artists } from '@/lib/artists';
import type { Artist } from '@/lib/types';
import ArtistCard from '@/components/ArtistCard';
import { Input } from '@/components/ui/input';
import { Search, Info, Coffee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Initialize artists on the client-side to ensure custom artists from localStorage are included.
    setFilteredArtists(artists);
  }, []);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = artists.filter(artist =>
      artist.name.toLowerCase().includes(lowercasedTerm) ||
      artist.genre.toLowerCase().includes(lowercasedTerm) ||
      artist.instrument.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredArtists(results);
  }, [searchTerm]);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
           <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Info className="w-5 h-5 text-foreground/80" />
                  <span className="sr-only">About this app</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md grid-rows-[auto_1fr_auto] max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">The Story Behind FemAxeHub</DialogTitle>
                </DialogHeader>
                <ScrollArea className="pr-6 -mr-6">
                  <div className="text-base text-foreground/90 py-4 space-y-4">
                    <p>
                      This app began with a simple search: trying to find female guitarists with the same fire as legends like Guthrie Govan. But Google wasn't much help.
                    </p>
                    <p>
                      After nearly a month of digging, I discovered Juliana Wilson. From the very first notes, I was completely blown away. I bought all her albums, and her latest work is simply amazing. That was the start of a new musical journey.
                    </p>
                    <p>
                      There are so many incredible female artists out there who deserve to be heard. This app is my way of helping others discover them and broaden their musical horizons.
                    </p>
                    <p className="font-semibold text-center pt-2">Enjoy the music.</p>
                  </div>
                </ScrollArea>
                <DialogFooter className="pt-4 border-t border-border/50">
                   <Button asChild className="w-full">
                        <Link href="https://buymeacoffee.com/Jamie24x3" target="_blank">
                            <Coffee className="mr-2"/>
                            Support the Creator
                        </Link>
                    </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          <Image 
            src="/images/motion-ezgif.com-optimize.gif" 
            alt="Creator animation" 
            width={40} 
            height={40}
            unoptimized
          />
          <p className="font-handwriting text-2xl text-accent">created by Jamie24x3</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Discover Your Next Obsession
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore a universe of sound from the world's most talented female guitarists.
        </p>
        <div className="mt-2">
            <Link href="https://jamie24x3.itch.io/femaxehub" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Check out the project on itch.io!
            </Link>
        </div>
        <div className="mt-8 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search by name, genre, instrument..." 
            className="pl-10 h-12 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline mb-6">Featured Fretboard Femmes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
    </div>
  );
}
