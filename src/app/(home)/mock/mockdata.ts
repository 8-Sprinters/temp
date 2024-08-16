import { TrendingListType } from '@/lib/types/exploreType';

export const TopicsData = [
  '최근 자주 듣는 팝송',
  '카공하기 좋은 서울 카페',
  '카공하기 좋은 서울 카페',
  '카공하기 좋은 서울 카페',
  '카공하기 좋은 서울 카페',
];

export const TRENDINGLISTS_DATA = [
  {
    id: 1,
    ownerId: 101,
    ownerNickname: '나현',
    title: 'Best Coffee Shops in Seoul',
    itemImageUrl:
      'https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8',
    category: 'Food & Drink',
    backgroundColor: '#FFD700',
    top3: [
      {
        id: 201,
        rank: 1,
        title: 'Cafe Bene',
      },
      {
        id: 202,
        rank: 2,
        title: 'Tom N Toms',
      },
      {
        id: 203,
        rank: 3,
        title: 'Hollys Coffee',
      },
    ],
  },
  {
    id: 2,
    ownerId: 102,
    ownerNickname: '지민',
    title: 'Top 3 Beaches in Jeju',
    itemImageUrl: null,
    category: 'Travel',
    backgroundColor: '#87CEEB',
    top3: [
      {
        id: 204,
        rank: 1,
        title: 'Hyeopjae Beach',
      },
      {
        id: 205,
        rank: 2,
        title: 'Gwakji Beach',
      },
      {
        id: 206,
        rank: 3,
        title: 'Woljeongri Beach',
      },
    ],
  },
  {
    id: 3,
    ownerId: 103,
    ownerNickname: '민준',
    title: 'Best Hiking Trails in Korea',
    itemImageUrl:
      'https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8',
    category: 'Outdoor',
    backgroundColor: '#228B22',
    top3: [
      {
        id: 207,
        rank: 1,
        title: 'Seoraksan National Park',
      },
      {
        id: 208,
        rank: 2,
        title: 'Bukhansan National Park',
      },
      {
        id: 209,
        rank: 3,
        title: 'Jirisan National Park',
      },
    ],
  },
  {
    id: 4,
    ownerId: 104,
    ownerNickname: '수빈',
    title: 'Top 3 Korean Dramas of 2024',
    itemImageUrl: null,
    category: 'Entertainment',
    backgroundColor: '#FF6347',
    top3: [
      {
        id: 210,
        rank: 1,
        title: 'Crash Landing on You Season 2',
      },
      {
        id: 211,
        rank: 2,
        title: 'Hospital Playlist Season 3',
      },
      {
        id: 212,
        rank: 3,
        title: 'Vincenzo: The Return',
      },
    ],
  },
  {
    id: 5,
    ownerId: 105,
    ownerNickname: '지우',
    title: 'Best Korean Street Foods',
    itemImageUrl:
      'https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8',
    category: 'Food & Drink',
    backgroundColor: '#FFA07A',
    top3: [
      {
        id: 213,
        rank: 1,
        title: 'Tteokbokki',
      },
      {
        id: 214,
        rank: 2,
        title: 'Hotteok',
      },
      {
        id: 215,
        rank: 3,
        title: 'Kimbap',
      },
    ],
  },
  {
    id: 6,
    ownerId: 106,
    ownerNickname: '현우',
    title: 'Top 3 Korean Pop Bands',
    itemImageUrl: null,
    category: 'Music',
    backgroundColor: '#8A2BE2',
    top3: [
      {
        id: 216,
        rank: 1,
        title: 'BTS',
      },
      {
        id: 217,
        rank: 2,
        title: 'BLACKPINK',
      },
      {
        id: 218,
        rank: 3,
        title: 'EXO',
      },
    ],
  },
  {
    id: 7,
    ownerId: 107,
    ownerNickname: '서윤',
    title: 'Top 3 Tech Gadgets of 2024',
    itemImageUrl:
      'https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8',
    category: 'Technology',
    backgroundColor: '#4682B4',
    top3: [
      {
        id: 219,
        rank: 1,
        title: 'Samsung Galaxy Z Flip 4',
      },
      {
        id: 220,
        rank: 2,
        title: 'Apple Watch Series 10',
      },
      {
        id: 221,
        rank: 3,
        title: 'Sony WH-1000XM5',
      },
    ],
  },
  {
    id: 8,
    ownerId: 108,
    ownerNickname: '도윤',
    title: 'Best Bookstores in Seoul',
    itemImageUrl: null,
    category: 'Lifestyle',
    backgroundColor: '#DAA520',
    top3: [
      {
        id: 222,
        rank: 1,
        title: 'Kyobo Book Centre',
      },
      {
        id: 223,
        rank: 2,
        title: 'Aladin Used Books',
      },
      {
        id: 224,
        rank: 3,
        title: 'Youngpoong Bookstore',
      },
    ],
  },
  {
    id: 9,
    ownerId: 109,
    ownerNickname: '가영',
    title: 'Top 3 Korean Webtoons',
    itemImageUrl:
      'https://lh3.googleusercontent.com/proxy/REI0aZFETu1l9pQ3PMVuQ-_oqZ-RGZUUeyj0pEI0GLPOoF5geJziMwe3daKzncbZhlyMegTC8rJs5-CjfWp88tpF1ybQW8ZbIudDFBn5ge0o0CyNH3KKdpDwNugBFpk6ApTC7qV8GM1UXmbxLlmNy0rBSRfb_QS0xVerx1Bi-huVWxPDio6N2_vYyXyQZKVqc61VtZ9n2H1CuneIHv5r7RV5oTLPhJS9aghPcxbGmcpRaouN0rcKuSvFhGV7gTRzMiKgcF1vaR9nfXcqRL8',
    category: 'Entertainment',
    backgroundColor: '#FF4500',
    top3: [
      {
        id: 225,
        rank: 1,
        title: 'Tower of God',
      },
      {
        id: 226,
        rank: 2,
        title: 'The God of High School',
      },
      {
        id: 227,
        rank: 3,
        title: 'Lore Olympus',
      },
    ],
  },
  {
    id: 10,
    ownerId: 110,
    ownerNickname: '하준',
    title: 'Top 3 Scenic Spots in Busan',
    itemImageUrl: 'null',
    category: 'Travel',
    backgroundColor: '#20B2AA',
    top3: [
      {
        id: 228,
        rank: 1,
        title: 'Haeundae Beach',
      },
      {
        id: 229,
        rank: 2,
        title: 'Gamcheon Culture Village',
      },
      {
        id: 230,
        rank: 3,
        title: 'Taejongdae Resort Park',
      },
    ],
  },
];

export const LIST_DATA = [
  {
    id: 1,
    ownerId: 101,
    ownerNickname: '나현',
    ownerProfileImage: 'https://example.com/images/nahyun_profile.jpg',
    title: 'Top 3 Restaurants in Gangnam',
    description: 'Discover the best places to eat in Gangnam, Seoul.',
    items: [
      {
        id: 201,
        rank: 1,
        title: 'Gangnam Grill',
      },
      {
        id: 202,
        rank: 2,
        title: 'Samgyeopsal Heaven',
      },
      {
        id: 203,
        rank: 3,
        title: 'Bibimbap Palace',
      },
    ],
    version: 1,
  },
  {
    id: 2,
    ownerId: 102,
    ownerNickname: '지민',
    ownerProfileImage: 'https://example.com/images/jimin_profile.jpg',
    title: 'Top 3 Shopping Malls in Seoul',
    description: 'A guide to the best shopping experiences in Seoul.',
    items: [
      {
        id: 204,
        rank: 1,
        title: 'COEX Mall',
      },
      {
        id: 205,
        rank: 2,
        title: 'Dongdaemun Design Plaza',
      },
      {
        id: 206,
        rank: 3,
        title: 'Lotte World Mall',
      },
    ],
    version: 1,
  },
  {
    id: 3,
    ownerId: 103,
    ownerNickname: '민준',
    ownerProfileImage: 'https://example.com/images/minjun_profile.jpg',
    title: 'Top 3 Cultural Experiences in Korea',
    description: 'Explore the rich cultural heritage of Korea.',
    items: [
      {
        id: 207,
        rank: 1,
        title: 'Bukchon Hanok Village',
      },
      {
        id: 208,
        rank: 2,
        title: 'Gyeongbokgung Palace',
      },
      {
        id: 209,
        rank: 3,
        title: 'Insadong',
      },
    ],
    version: 1,
  },
  {
    id: 4,
    ownerId: 104,
    ownerNickname: '수빈',
    ownerProfileImage: 'https://example.com/images/subin_profile.jpg',
    title: 'Top 3 Scenic Spots in Jeju',
    description: 'Must-visit scenic locations on Jeju Island.',
    items: [
      {
        id: 210,
        rank: 1,
        title: 'Seongsan Ilchulbong',
      },
      {
        id: 211,
        rank: 2,
        title: 'Hallasan Mountain',
      },
      {
        id: 212,
        rank: 3,
        title: 'Manjanggul Cave',
      },
    ],
    version: 1,
  },
  {
    id: 5,
    ownerId: 105,
    ownerNickname: '지우',
    ownerProfileImage: 'https://example.com/images/jiwoo_profile.jpg',
    title: 'Top 3 K-Pop Albums of 2024',
    description: 'The hottest K-Pop albums you need to listen to this year.',
    items: [
      {
        id: 213,
        rank: 1,
        title: 'BTS - New Era',
      },
      {
        id: 214,
        rank: 2,
        title: 'BLACKPINK - Revolution',
      },
      {
        id: 215,
        rank: 3,
        title: 'TWICE - Infinity',
      },
    ],
    version: 1,
  },
];
