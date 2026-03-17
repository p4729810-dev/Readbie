import { Category, EBook, PaymentSettings } from '../types';

export const defaultCategories: Category[] = [
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Heartwarming love stories and romantic tales',
    icon: '💕',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'thriller',
    name: 'Thriller',
    description: 'Gripping suspense and mystery novels',
    icon: '🔍',
    color: 'from-slate-600 to-zinc-700',
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    description: 'Magical worlds and epic adventures',
    icon: '🧙',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'self-help',
    name: 'Self Help',
    description: 'Personal development and motivation',
    icon: '📈',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'science-fiction',
    name: 'Science Fiction',
    description: 'Futuristic tales and space adventures',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'biography',
    name: 'Biography',
    description: 'Real life stories of inspiring people',
    icon: '👤',
    color: 'from-amber-500 to-orange-500',
  },
];

export const defaultBooks: EBook[] = [
  {
    id: '1',
    title: 'Eternal Love',
    author: 'Sarah Johnson',
    description: 'A beautiful story of two souls destined to be together,跨越 time and space. This romantic novel will make you believe in true love again.',
    price: 299,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    downloadUrl: '/books/eternal-love.pdf',
    fileName: 'eternal-love.pdf',
    categoryId: 'romantic',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Whispers in the Wind',
    author: 'Emily Rose',
    description: 'A passionate love story set in the rolling hills of Tuscany. Follow Maria as she discovers love in the most unexpected place.',
    price: 199,
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    downloadUrl: '/books/whispers-wind.pdf',
    fileName: 'whispers-wind.pdf',
    categoryId: 'romantic',
    createdAt: '2024-01-20',
  },
  {
    id: '3',
    title: 'The Silent Witness',
    author: 'James Patterson',
    description: 'A gripping thriller that will keep you on the edge of your seat. Detective Morgan races against time to catch a killer.',
    price: 349,
    coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    downloadUrl: '/books/silent-witness.pdf',
    fileName: 'silent-witness.pdf',
    categoryId: 'thriller',
    createdAt: '2024-02-01',
  },
  {
    id: '4',
    title: 'The Dragons Prophecy',
    author: 'Michael Storm',
    description: 'An epic fantasy adventure where a young hero must fulfill an ancient prophecy to save the realm from darkness.',
    price: 449,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    downloadUrl: '/books/dragons-prophecy.pdf',
    fileName: 'dragons-prophecy.pdf',
    categoryId: 'fantasy',
    createdAt: '2024-02-10',
  },
  {
    id: '5',
    title: 'Mind Power',
    author: 'Dr. Alex Turner',
    description: 'Unlock the hidden potential of your mind. This self-help guide teaches you practical techniques for success.',
    price: 249,
    coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400',
    downloadUrl: '/books/mind-power.pdf',
    fileName: 'mind-power.pdf',
    categoryId: 'self-help',
    createdAt: '2024-02-15',
  },
  {
    id: '6',
    title: 'Beyond the Stars',
    author: 'Neil Armstrong Jr.',
    description: 'A thrilling space adventure set in the year 3000. Join Captain Nova on an intergalactic journey.',
    price: 399,
    coverImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400',
    downloadUrl: '/books/beyond-stars.pdf',
    fileName: 'beyond-stars.pdf',
    categoryId: 'science-fiction',
    createdAt: '2024-02-20',
  },
];

export const defaultPaymentSettings: PaymentSettings = {
  upiId: 'merchant@upi',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=merchant@upi',
  merchantName: 'Readbie Store',
};

export const defaultSiteSettings = {
  logoUrl: '',
  siteName: 'Readbie',
  adminPassword: 'admin123',
};

// Storage keys
export const STORAGE_KEYS = {
  BOOKS: 'readbie_books',
  CATEGORIES: 'readbie_categories',
  PAYMENT: 'readbie_payment',
  PURCHASES: 'readbie_purchases',
  SITE_SETTINGS: 'readbie_site_settings',
};
