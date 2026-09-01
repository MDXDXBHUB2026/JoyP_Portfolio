// Photo management utility for the portfolio

// High-definition default portrait URL
export const DEFAULT_EDUCATOR_PHOTO = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000';

const STORAGE_KEY = 'joy_perez_portfolio_photo';

export const getCustomPhoto = (): string => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim().length > 0) {
      return saved;
    }
  } catch (e) {
    console.warn('LocalStorage not accessible for custom photo');
  }
  return DEFAULT_EDUCATOR_PHOTO;
};

export const setCustomPhoto = (photoDataUrl: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY, photoDataUrl);
    window.dispatchEvent(new Event('portfolio_photo_changed'));
  } catch (e) {
    console.error('Failed to store custom photo:', e);
  }
};

export const resetCustomPhoto = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('portfolio_photo_changed'));
  } catch (e) {
    console.error('Failed to reset custom photo:', e);
  }
};
