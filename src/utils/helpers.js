/**
 * Format a date to a readable French format
 */
export function formatDate(date, format = 'full') {
  const d = new Date(date);
  
  if (format === 'full') {
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
  
  if (format === 'short') {
    return d.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
    });
  }
  
  if (format === 'time') {
    return d.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  
  return d.toLocaleDateString('fr-FR');
}

/**
 * Get the weather emoji for a given value
 */
export function getWeatherEmoji(value) {
  const emojis = ['⛈️', '🌩️', '🌧️', '☁️', '🌥️', '⛅', '🌤️', '☀️'];
  return emojis[value - 1] || '❓';
}

/**
 * Calculate streak from dates
 */
export function calculateStreak(dates) {
  if (!dates || dates.length === 0) return 0;
  
  const sortedDates = dates
    .map(d => new Date(d).toDateString())
    .sort((a, b) => new Date(b) - new Date(a));
  
  let streak = 1;
  const today = new Date().toDateString();
  
  if (sortedDates[0] !== today) return 0;
  
  for (let i = 1; i < sortedDates.length; i++) {
    const current = new Date(sortedDates[i]);
    const previous = new Date(sortedDates[i - 1]);
    const diffDays = Math.floor((previous - current) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}

/**
 * Get recommendation based on weather value
 */
export function getRecommendationForWeather(weatherValue) {
  if (weatherValue <= 3) {
    return {
      title: 'Prends soin de toi',
      description: 'Un exercice de respiration pourrait t\'aider à te calmer.',
      module: 'Respiration',
      path: '/modules/respiration',
    };
  } else if (weatherValue <= 5) {
    return {
      title: 'Ancre-toi dans le présent',
      description: 'L\'exercice d\'ancrage peut t\'aider à te sentir plus stable.',
      module: 'Ancrage',
      path: '/modules/ancrage',
    };
  } else {
    return {
      title: 'Continue sur cette voie',
      description: 'C\'est le moment idéal pour travailler sur ton jardin intérieur!',
      module: 'Jardin',
      path: '/modules/jardin',
    };
  }
}

/**
 * Truncate text to a maximum length
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
