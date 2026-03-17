
import type { Artist } from '@/lib/types';

export const defaultArtists: Artist[] = [
  {
    id: 'juliana-wilson',
    name: 'Juliana Wilson',
    genre: 'Virtuoso Rock',
    instrument: 'Electric Guitar',
    bio: 'Juliana Wilson is a rising star in the guitar world, known for her virtuosic rock playing and impressive technical skills at a young age. She has gained a significant following online for her mesmerizing performances and an original music.',
    image: '/images/Juliana.jpg',
    spotifyUri: 'spotify:playlist:1gCe78Te1jJmDfbJSAKqHE',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/julianawilsonmusic' },
      { platform: 'Facebook', url: 'https://www.facebook.com/JulianaWilsonMusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/c/JulianaWilson' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'nita-strauss',
    name: 'Nita Strauss',
    genre: 'Hard Rock / Heavy Metal',
    instrument: 'Electric Guitar',
    bio: 'Nita Strauss is an American rock musician. She is the current touring guitarist for Alice Cooper and has a successful solo career, having been ranked No. 1 on Guitar World\'s list of "10 Female Guitar Players You Should Know". Her energetic and technical playing has made her a prominent figure in modern rock.',
    image: '/images/Nita Strauss.jpg',
    spotifyUri: 'spotify:artist:73GhYkwfPQzmfJb1cdPqPf',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/hurricanenita' },
      { platform: 'Facebook', url: 'https://www.facebook.com/NitaStrauss' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/NitaStrauss' },
    ],
    musicLinks: [],
    tourDates: [
      { date: '2024-09-15', city: 'Los Angeles, CA', venue: 'The Roxy', url: '#' },
      { date: '2024-09-20', city: 'New York, NY', venue: 'Gramercy Theatre', url: '#' },
    ],
  },
  {
    id: 'orianthi',
    name: 'Orianthi',
    genre: 'Rock / Pop / Blues',
    instrument: 'Electric Guitar',
    bio: 'Orianthi Panagaris, known mononymously as Orianthi, is an Australian musician, singer and songwriter who has released four studio albums and one EP. She is known for her virtuosic guitar skills and has performed with artists such as Michael Jackson and Alice Cooper. Her song "According to You" was a worldwide hit.',
    image: '/images/Orianthi.jpg',
    spotifyUri: 'spotify:artist:0GSRc0gJkSVfyl3a2fg1se',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/iamorianthi' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Orianthi' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/officialorianthi' },
    ],
    musicLinks: [],
    tourDates: [
        { date: '2024-10-05', city: 'Chicago, IL', venue: 'House of Blues', url: '#' },
    ],
  },
  {
    id: 'yvette-young',
    name: 'Yvette Young',
    genre: 'Math Rock / Progressive Rock',
    instrument: 'Electric Guitar',
    bio: 'Yvette Young is an American musician from San Jose, California. She is the front-woman for the math rock band Covet. Young is known for her unique two-handed tapping guitar style. She is also a talented pianist and visual artist, often creating the artwork for her musical projects.',
    image: '/images/Yvette Young.jpg',
    spotifyUri: 'spotify:artist:4BlWdHDiz0cin6mby2KAnr',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/yvetteyoung' },
      { platform: 'Facebook', url: 'https://www.facebook.com/yvetteyoungmusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/yvettesound' },
    ],
    musicLinks: [
      { platform: 'bandcamp', url: '#' },
    ],
    tourDates: [],
  },
  {
    id: 'jennifer-batten',
    name: 'Jennifer Batten',
    genre: 'Rock / Fusion',
    instrument: 'Electric Guitar',
    bio: 'Jennifer Batten is an American guitarist who has worked as a session musician and solo artist. She has toured and recorded with Michael Jackson on all three of his world tours, and also worked with Jeff Beck. Batten is known for her innovative techniques, including two-handed tapping.',
    image: '/images/Jennifer Batten.jpg',
    spotifyUri: 'spotify:artist:222pfnMm3lQgAs3dI4tvyW',
    socialLinks: [
        { platform: 'Instagram', url: 'https://www.instagram.com/jenniferbatten1' },
        { platform: 'Facebook', url: 'https://www.facebook.com/JenniferBattenMusic' },
        { platform: 'youtube', url: 'https://www.youtube.com/user/jennbatten' },
    ],
    musicLinks: [],
    tourDates: [
        { date: '2024-11-12', city: 'London, UK', venue: 'The Underworld', url: '#' },
    ],
  },
  {
    id: 'lari-basilio',
    name: 'Lari Basilio',
    genre: 'Instrumental Rock / Fusion',
    instrument: 'Electric Guitar',
    bio: 'Lari Basilio is a Brazilian guitarist and songwriter, known for her instrumental rock and fusion music. Her playing is celebrated for its melodic phrasing and technical proficiency. She won the "Instrumental" category of the Samsung E-Festival in 2014.',
    image: '/images/Lari Basilio1.jpg',
    spotifyUri: 'spotify:artist:4Bf01m350vW5w33P0T6s2i',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/laribasilio' },
      { platform: 'Facebook', url: 'https://www.facebook.com/LariBasilio' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/laribasiliomusic' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'sophie-lloyd',
    name: 'Sophie Lloyd',
    genre: 'Shred / Rock',
    instrument: 'Electric Guitar',
    bio: 'Sophie Lloyd is a British rock and metal guitarist, known for her shredding skills and energetic online presence. She gained significant popularity on YouTube for her guitar covers and original compositions, eventually joining Machine Gun Kelly\'s live band.',
    image: '/images/Sophie Lloyd1.jpg',
    spotifyUri: 'spotify:artist:6llIdnUs3Ppc3Ie39622d2',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/sophieguitar_' },
      { platform: 'Facebook', url: 'https://www.facebook.com/SophieLloydGuitar' },
      { platform: 'youtube', url: 'https://www.youtube.com/c/SophieLloyd' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'sarah-longfield',
    name: 'Sarah Longfield',
    genre: 'Progressive Metal / Djent',
    instrument: '8-string Guitar',
    bio: 'Sarah Longfield is an American multi-instrumentalist, best known for her work with the 8-string guitar. Her unique playing style and compositions in the progressive metal and djent scenes have earned her a dedicated following. She was formerly in the band The Fine Constant.',
    image: '/images/Sahara.jpg',
    spotifyUri: 'spotify:artist:5Y6YI1t5I2iO8S33bW5Icz',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/sarahlongfield' },
      { platform: 'Facebook', url: 'https://www.facebook.com/Sarah.Longfield.Music' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/sarahlongfield' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'joan-jett',
    name: 'Joan Jett',
    genre: 'Rock / Punk',
    instrument: 'Electric Guitar',
    bio: 'Joan Jett is an American rock singer, songwriter, composer, musician, record producer, and actress. Jett is best known for her work as the frontwoman of her band, Joan Jett & the Blackhearts, and for earlier founding and performing with the Runaways.',
    image: '/images/Joan Jett1.jpg',
    spotifyUri: 'spotify:artist:2ZvKhdTGdy6sAOLi0CWzaG',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/joanjett' },
      { platform: 'Facebook', url: 'https://www.facebook.com/joanjettandtheblackhearts' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/joanjettandthebhearts' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'lita-ford',
    name: 'Lita Ford',
    genre: 'Hard Rock / Heavy Metal',
    instrument: 'Electric Guitar',
    bio: 'Lita Ford is an English-born American rock guitarist, vocalist, and songwriter. She was the lead guitarist for the all-female rock band the Runaways in the late 1970s before embarking on a successful solo career in the 1980s.',
    image: '/images/Lita Ford.jpg',
    spotifyUri: 'spotify:artist:77YAklmSLq4d4sG2AorPqu',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/litafordofficial' },
      { platform: 'Facebook', url: 'https://www.facebook.com/litaofficial' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/litafordVEVO' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'nancy-wilson',
    name: 'Nancy Wilson',
    genre: 'Rock / Folk Rock',
    instrument: 'Acoustic & Electric Guitar',
    bio: 'Nancy Wilson is an American musician, singer, songwriter, producer, and composer. She rose to fame alongside her older sister, singer Ann Wilson, as a guitarist and backing vocalist in the rock band Heart.',
    image: '/images/heart-nancy-wilson.jpg',
    spotifyUri: 'spotify:artist:4CgDVT9n2H1d46rhI9bofI',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/nancywilson' },
      { platform: 'Facebook', url: 'https://www.facebook.com/officialnancywilson' },
      { platform: 'youtube', url: 'https://www.youtube.com/channel/UCLCRs_1AicFa_1V2ap_oXA' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'bonnie-raitt',
    name: 'Bonnie Raitt',
    genre: 'Blues / Rock / R&B',
    instrument: 'Slide Guitar',
    bio: 'Bonnie Raitt is an American blues singer, guitarist, songwriter, and activist. During the 1970s, Raitt released a series of roots-influenced albums that incorporated elements of blues, rock, folk, and country. She is a renowned slide guitar player.',
    image: '/images/Bonnie Raitt1.jpg',
    spotifyUri: 'spotify:artist:4KDyYWR7IpxZ7xrdYbBzzY',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/bonnieraittofficial' },
      { platform: 'Facebook', url: 'https://www.facebook.com/officialbonnieraitt' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/TheBonnieRaitt' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'sister-rosetta-tharpe',
    name: 'Sister Rosetta Tharpe',
    genre: 'Gospel / Blues / Rock and Roll',
    instrument: 'Electric Guitar',
    bio: 'Sister Rosetta Tharpe was an American singer, songwriter, guitarist, and recording artist. She attained popularity in the 1930s and 1940s with her gospel recordings, characterized by a unique mixture of spiritual lyrics and electric guitar that was a precursor of rock and roll.',
    image: '/images/Sister Rosetta Tharpe1.jpg',
    spotifyUri: 'spotify:artist:2dXf5lu5iilcaTQJZodce7',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/sisterrosettatharpe' },
      { platform: 'Facebook', url: 'https://www.facebook.com/SisterRosettaTharpe' },
      { platform: 'youtube', url: 'https://www.youtube.com/channel/UC-pSu_4s1AM8nI5P-8f6LQQ' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'kaki-king',
    name: 'Kaki King',
    genre: 'Acoustic / Experimental',
    instrument: 'Acoustic & Electric Guitar',
    bio: 'Katherine "Kaki" King is an American guitarist and composer. King is known for her percussive and jazz-tinged melodies, energetic live shows, use of multiple tunings on acoustic and lap steel guitar, and her a diverse range in different genres.',
    image: '/images/Kaki King1.jpg',
    spotifyUri: 'spotify:artist:1s2pki7lATUaBOL76E3vCV',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/kakigram' },
      { platform: 'Facebook', url: 'https://www.facebook.com/kakiking' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/KakiKingTV' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'st-vincent',
    name: 'St. Vincent',
    genre: 'Indie Rock / Art Rock',
    instrument: 'Electric Guitar',
    bio: 'Annie Clark, known professionally as St. Vincent, is an American musician, singer, songwriter, and producer. She is known for her complex guitar work, which often incorporates fuzz and other effects, and her eclectic musical style.',
    image: '/images/St._Vincent_10_29_2018_-2_(44237126380).jpg',
    spotifyUri: 'spotify:artist:7bcbShaqKdcyjnmv4Ix8j6',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/st_vincent' },
      { platform: 'Facebook', url: 'https://www.facebook.com/St.Vincent' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/stvincentVEVO' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'h-e-r',
    name: 'H.E.R.',
    genre: 'R&B / Soul',
    instrument: 'Electric Guitar',
    bio: 'Gabriella Sarmiento Wilson, known professionally as H.E.R., is an American singer, songwriter, and musician. She is acclaimed for her soulful R&B music and her impressive skills on the electric guitar, often performing solos during her live shows.',
    image: '/images/her-live-credit-lestercohen-getty@1400x1050-1392x1044.jpg',
    spotifyUri: 'spotify:artist:3Y7RZ31TRPVadSFVy1o8os',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/hermusicofficial' },
      { platform: 'Facebook', url: 'https://www.facebook.com/officialHERmusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/channel/UCFwC3_V2H1i40R_4P-92f7g' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'samantha-fish',
    name: 'Samantha Fish',
    genre: 'Blues / Rock',
    instrument: 'Electric Guitar',
    bio: 'Samantha Fish is an American singer-songwriter and guitarist from Kansas City, Missouri. A powerful live performer, she has made a name for herself as a rising star in the contemporary blues world.',
    image: '/images/Samantha fish.jpeg',
    imagePosition: 'object-top',
    spotifyUri: 'spotify:artist:5HsS48kuvghKcNpwOaAvB5',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/samanthafishmusic' },
      { platform: 'Facebook', url: 'https://www.facebook.com/samanthafishmusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/samanthafishmusic' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'ana-popovic',
    name: 'Ana Popović',
    genre: 'Blues / Rock',
    instrument: 'Electric Guitar',
    bio: 'Ana Popović is a Serbian blues guitarist and singer. She has been nominated for multiple Blues Music Awards and is known for her fiery guitar playing and soulful vocals.',
    image: '/images/Anna popovic.jpg',
    spotifyUri: 'spotify:artist:5kPU3sMV9yEFV2j4lM4gVc',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/anapopovicmusic' },
      { platform: 'Facebook', url: 'https://www.facebook.com/AnaPopovicMusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/anapopovicband' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'courtney-barnett',
    name: 'Courtney Barnett',
    genre: 'Indie Rock',
    instrument: 'Electric Guitar',
    bio: 'Courtney Barnett is an Australian singer, songwriter, and musician. Known for her witty, rambling lyrics and deadpan singing style, she has attracted praise from critics and audiences alike for her distinctive guitar work.',
    image: '/images/Courtney Barnett.jpg',
    spotifyUri: 'spotify:artist:4OOlG5eBXSkSAAEeKjJb5Y',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/courtneymelba' },
      { platform: 'Facebook', url: 'https://www.facebook.com/courtneybarnettmusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/courtneybarnett' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'joni-mitchell',
    name: 'Joni Mitchell',
    genre: 'Folk / Rock / Jazz',
    instrument: 'Acoustic & Electric Guitar',
    bio: 'Joni Mitchell is a Canadian singer-songwriter. Drawing from folk, pop, rock, classical, and jazz, Mitchell\'s songs often reflect on social and philosophical ideals as well as her feelings about womanhood, romance, and disillusionment. She is known for her unique open tunings.',
    image: '/images/gettyimages-3207322-612x612.jpg',
    spotifyUri: 'spotify:artist:5hW4L92KnC6dX9t7tYM4Ve',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/jonimitchell' },
      { platform: 'Facebook', url: 'https://www.facebook.com/jonimitchell' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/JoniMitchell' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'carrie-brownstein',
    name: 'Carrie Brownstein',
    genre: 'Indie Rock / Punk',
    instrument: 'Electric Guitar',
    bio: 'Carrie Brownstein is an American musician, actress, writer, director, and comedian. She first came to prominence as a member of the band Excuse 17 before forming the rock trio Sleater-Kinney. Her energetic and angular guitar playing is a hallmark of their sound.',
    image: '/images/Carrie Brownstein.jpg',
    spotifyUri: 'spotify:artist:4wLIbcoqmqI4WZHGvt2hsq',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/carrie_rachel' },
      { platform: 'Facebook', url: 'https://www.facebook.com/SleaterKinney' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/SleaterKinneyVEVO' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'marissa-paternoster',
    name: 'Marissa Paternoster',
    genre: 'Indie Rock / Punk',
    instrument: 'Electric Guitar',
    bio: 'Marissa Paternoster is the lead singer and guitarist of the rock band Screaming Females. She is known for her powerful vocals and intricate, shredding guitar solos, which have led to her being named one of the greatest guitarists of all time by several publications.',
    image: '/images/Marissa.jpg',
    spotifyUri: 'spotify:artist:3r57DY2Vvg6h5dasmA26hB',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/marissa_paternoster' },
      { platform: 'Facebook', url: 'https://www.facebook.com/ScreamingFemales' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/ScreamingFemales' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'susan-tedeschi',
    name: 'Susan Tedeschi',
    genre: 'Blues / Soul',
    instrument: 'Electric Guitar',
    bio: 'Susan Tedeschi is an American singer and guitarist. A multiple Grammy Award nominee, she is a member of the Tedeschi Trucks Band, a conglomeration of her and her husband Derek Trucks\' backing bands. Her soulful voice and bluesy guitar licks are her signature.',
    image: '/images/gettyimages-562579879-612x612.jpg',
    spotifyUri: 'spotify:artist:22aCfkJkTIjhm4EXUoceS2',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/tedeschitrucksband' },
      { platform: 'Facebook', url: 'https://www.facebook.com/SusanTedeschi' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/TedeschiTrucksBand' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'donna-grantis',
    name: 'Donna Grantis',
    genre: 'Funk / Rock / Jazz Fusion',
    instrument: 'Electric Guitar',
    bio: 'Donna Grantis is a Canadian guitarist, best known for performing and recording with Prince\'s funk-rock band 3rdeyegirl. Her virtuosic playing combines classic rock influences with jazz and funk sensibilities, creating a unique and powerful sound.',
    image: '/images/6471c6f72da28.image.jpg',
    spotifyUri: 'spotify:artist:0mN3r20B22i7x17s2iBw6y',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/donnagrantis' },
      { platform: 'Facebook', url: 'https://www.facebook.com/donnagrantis' },
      { platform: 'youtube', url: 'https://www.youtube.com/user/donnagrantis' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'sierra-levesque',
    name: 'Sierra Levesque',
    genre: 'Rock / Blues',
    instrument: 'Electric Guitar',
    bio: 'Sierra Levesque is a young Canadian multi-instrumentalist and vocalist who has gained significant attention for her prodigious talents, particularly her powerful blues and rock guitar playing. She is quickly making a name for herself as a rising star in the music world.',
    image: '/images/Sierra.png',
    imagePosition: 'object-top',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/sierralevesque' },
      { platform: 'Facebook', url: 'https://www.facebook.com/sierralevesquemusic' },
      { platform: 'youtube', url: 'https://www.youtube.com/c/SierraLevesque' },
    ],
    musicLinks: [],
    tourDates: [],
  },
  {
    id: 'nili-brosh',
    name: 'Nili Brosh',
    genre: 'Progressive Rock / Metal',
    instrument: 'Electric Guitar',
    bio: 'Nili Brosh is an Israeli-American guitarist known for her work with the Tony MacAlpine band, The Iron Maidens, and her own solo work. Her style blends technical proficiency with melodic sensibility, making her a respected figure in the progressive rock and metal communities.',
    image: '/images/gettyimages-632276588-612x612.jpg',
    spotifyUri: 'spotify:artist:0q1p2p512uGf5a73L9s3O5',
    socialLinks: [
      { platform: 'Instagram', url: '#' },
      { platform: 'Facebook', url: '#' },
      { platform: 'youtube', url: '#' },
    ],
    musicLinks: [],
    tourDates: [],
  }
];

const CUSTOM_ARTISTS_KEY = 'femAxeHub_custom_artists';

function getCustomArtists(): Artist[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const storedCustomArtists = localStorage.getItem(CUSTOM_ARTISTS_KEY);
    return storedCustomArtists ? JSON.parse(storedCustomArtists) : [];
  } catch (error) {
    console.error('Failed to parse custom artists from localStorage', error);
    return [];
  }
}

function saveCustomArtists(customArtists: Artist[]) {
    if (typeof window === 'undefined') {
        return;
    }
    try {
        localStorage.setItem(CUSTOM_ARTISTS_KEY, JSON.stringify(customArtists));
    } catch (error) {
        console.error('Failed to save custom artists to localStorage', error);
    }
}

export let artists: Artist[] = [...defaultArtists, ...getCustomArtists()];

export function addArtist(artist: Omit<Artist, 'id' | 'isCustom'>) {
    const newArtist: Artist = {
        ...artist,
        id: artist.name.toLowerCase().replace(/\s+/g, '-'),
        isCustom: true,
        socialLinks: [],
        musicLinks: [],
        tourDates: [],
    };
    const customArtists = getCustomArtists();
    const newCustomArtists = [...customArtists, newArtist];
    saveCustomArtists(newCustomArtists);
    artists = [...defaultArtists, ...newCustomArtists];
}


export const getArtistById = (id: string): Artist | undefined => {
    // Refresh artists list from localStorage every time
    const currentArtists = [...defaultArtists, ...getCustomArtists()];
    return currentArtists.find(artist => artist.id === id);
}

    

    













