import { useState, useEffect, useCallback } from 'react';
import { settingsAPI, type ItemCategory } from '../services/api';

export default function useCategories() {
  const [categories, setCategories] = useState<ItemCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await settingsAPI.getCategories();
      if (resp.success && resp.data) setCategories(resp.data);
      else setCategories([]);
    } catch (err) {
      setError('Failed to fetch categories');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { categories, loading, error, reload: load } as const;
}
