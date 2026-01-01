// Module colors
export const MODULE_COLORS = {
  respiration: '#A8B4D4',
  ancrage: '#8B9F82',
  echo: '#E8B4A8',
  identite: '#D4A5A5',
  phare: '#C4967A',
  jardin: '#8B9F82',
  lumiere: '#B8A5C7',
  oracle: '#E8D5A3',
  humeur: '#EABB7A',
  psia: '#7FB3B3',
  sos: '#E07A5F',
};

// Weather levels
export const WEATHER_LEVELS = [
  { value: 1, emoji: '⛈️', label: 'Tempête', color: '#4A5568' },
  { value: 2, emoji: '🌩️', label: 'Orage', color: '#6B7280' },
  { value: 3, emoji: '🌧️', label: 'Pluie', color: '#9CA3AF' },
  { value: 4, emoji: '☁️', label: 'Nuageux', color: '#D1D5DB' },
  { value: 5, emoji: '🌥️', label: 'Couvert', color: '#E5E7EB' },
  { value: 6, emoji: '⛅', label: 'Éclaircies', color: '#FEF3C7' },
  { value: 7, emoji: '🌤️', label: 'Ensoleillé', color: '#FDE68A' },
  { value: 8, emoji: '☀️', label: 'Grand soleil', color: '#FBBF24' },
];

// Navigation items
export const NAV_ITEMS = [
  { path: '/home', label: 'Home' },
  { path: '/explorer', label: 'Explorer' },
  { path: '/psia', label: 'PsIA' },
  { path: '/journal', label: 'Journal' },
  { path: '/profil', label: 'Profil' },
];

// Module categories
export const MODULE_CATEGORIES = {
  CALMER: 'SE CALMER 🌿',
  COMPRENDRE: 'SE COMPRENDRE 🪞',
  GRANDIR: 'GRANDIR 🌱',
  APPRENDRE: 'APPRENDRE & S\'INSPIRER ✨',
  SUIVRE: 'SUIVRE 📊',
};

// Emergency numbers
export const EMERGENCY_CONTACTS = [
  { number: '15', name: 'SAMU', description: 'Urgences médicales 24h/24', tel: 'tel:15' },
  { number: '3114', name: 'Prévention Suicide', description: 'Gratuit, confidentiel 24h/24', tel: 'tel:3114' },
  { number: '119', name: 'Enfance en Danger', description: 'Gratuit, confidentiel 24h/24', tel: 'tel:119' },
  { number: '0 800 235 236', name: 'Fil Santé Jeunes', description: 'Anonyme et gratuit', tel: 'tel:0800235236' },
];
