export interface SocialLink {
  platform: string;
  url: string;
}

export interface MusicLink {
  platform: 'bandcamp';
  url: string;
}

export interface TourDate {
  date: string;
  city: string;
  venue: string;
  url:string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  instrument: string;
  bio: string;
  image: string;
  imagePosition?: string; // e.g., 'object-center', 'object-top'
  socialLinks: SocialLink[];
  musicLinks: MusicLink[];
  tourDates: TourDate[];
  isCustom?: boolean;
  spotifyUri?: string;
}
