
import { getArtistById, defaultArtists } from '@/lib/artists';
import { notFound } from 'next/navigation';
import ArtistProfileClientPage from './page-client';

export function generateStaticParams() {
  return defaultArtists.map((artist) => ({
    id: artist.id,
  }));
}

export default async function ArtistProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) {
    notFound();
    return null;
  }

  return <ArtistProfileClientPage artist={artist} />;
}
