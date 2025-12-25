import { useState, useEffect } from 'react';

export type ViewMode = 'grid' | 'list';

const GLOBAL_KEY = 'view-mode';

// useViewMode hook: returns [viewMode, setViewMode]
export default function useViewMode(key: string = GLOBAL_KEY) {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem(key);
    return saved === 'list' || saved === 'grid' ? (saved as ViewMode) : 'list';
  });

  useEffect(() => {
    localStorage.setItem(key, viewMode);
  }, [key, viewMode]);

  // Sync across tabs/windows when storage changes
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === key && (e.newValue === 'list' || e.newValue === 'grid')) {
        setViewMode(e.newValue as ViewMode);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [key]);

  return [viewMode, setViewMode] as const;
}
