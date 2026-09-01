/**
 * Robust Client & Server Persistent Storage for Joy's Portrait Photograph
 */

const DB_NAME = 'JoyPortfolioDB';
const DB_VERSION = 1;
const STORE_NAME = 'media';
const PHOTO_KEY = 'joy_photo_blob';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function savePhotoLocally(dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(dataUrl, PHOTO_KEY);
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
  } catch (e) {
    console.warn('IndexedDB save fallback:', e);
  }

  // Also write to localStorage if possible
  try {
    localStorage.setItem('JOY_PORTFOLIO_SAVED_PHOTO', dataUrl);
  } catch {
    // ignore quota
  }

  // Upload to backend API to write to public/joy-photo.jpg permanently
  try {
    await fetch('/api/upload-portrait', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: dataUrl }),
    });
  } catch (e) {
    console.warn('Backend photo upload skipped/unavailable:', e);
  }
}

export async function loadSavedPhoto(): Promise<string | null> {
  // 1. Try checking server status first
  try {
    const res = await fetch('/api/portrait-status');
    if (res.ok) {
      const data = await res.json();
      if (data.hasPortrait && data.url) {
        return data.url + '?t=' + Date.now();
      }
    }
  } catch {
    // continue to local storage
  }

  // 2. Check direct public file
  try {
    const directRes = await fetch('/joy-photo.jpg', { method: 'HEAD' });
    if (directRes.ok && directRes.headers.get('content-type')?.includes('image')) {
      return '/joy-photo.jpg';
    }
  } catch {
    // continue
  }

  // 3. Check IndexedDB
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(PHOTO_KEY);
    const result = await new Promise<string | null>((resolve) => {
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
    if (result) return result;
  } catch (e) {
    console.warn('IndexedDB read fallback:', e);
  }

  // 4. Check localStorage
  try {
    const local = localStorage.getItem('JOY_PORTFOLIO_SAVED_PHOTO') || localStorage.getItem('JOY_PORTFOLIO_PHOTO');
    if (local && local.startsWith('data:image')) {
      return local;
    }
  } catch {
    // continue
  }

  return null;
}

/**
 * Optimizes and resizes an uploaded image file on canvas to fit beautifully (e.g. 1000px width, 92% JPEG quality)
 */
export function processImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1200;
        const maxHeight = 1600;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('Failed to decode image'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}
