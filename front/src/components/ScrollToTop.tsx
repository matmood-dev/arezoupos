import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // Also reset any element-level scroll containers if necessary (optional)
    // document.querySelectorAll('.scrollable').forEach(el => (el.scrollTop = 0));
  }, [pathname]);

  return null;
}
