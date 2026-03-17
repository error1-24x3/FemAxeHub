"use client";

import Link from 'next/link';
import { Guitar, PlusCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-card/50 backdrop-blur-lg sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
              <Guitar className="w-8 h-8" />
              <span>FemAxeHub</span>
            </Link>
          </div>
          
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Link href="/favorites" title="Favorites">
                <Heart className="w-5 h-5" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Link href="/add-artist" title="Add Artist">
                <PlusCircle className="w-5 h-5" />
                <span className="sr-only">Add Artist</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
