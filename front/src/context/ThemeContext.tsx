import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export interface Theme {
  mode: 'light' | 'dark' | 'system';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    surface2: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
    glass: string;
    glassBorder: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    background: string;
  };
}

const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: '#6366f1',            // Indigo
    secondary: '#ec4899',          // Pink
    background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fce7f3 100%)', // Pastel gradient
    surface: 'rgba(255, 255, 255, 0.65)',
    surface2: 'rgba(255, 255, 255, 0.95)',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: 'rgba(15, 23, 42, 0.08)',
    accent: '#8b5cf6',             // Violet
    glass: 'rgba(255, 255, 255, 0.25)',
    glassBorder: 'rgba(15, 23, 42, 0.12)',
  },
  shadows: {
    small: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    large: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(99, 102, 241, 0.4)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
    secondary: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
    background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fce7f3 100%)',
  },
};

const darkTheme: Theme = { 
  mode: 'dark', 
  colors: { 
    primary: '#8B5CF6',            // Vibrant purple 
    secondary: '#EC4899',          // Hot pink accent 
    background: 'linear-gradient(135deg, #434343 0%, #1a1a1a 50%, #000000 100%)', 
    surface: 'rgba(10, 10, 10, 0.85)', 
    surface2: 'rgba(15, 15, 15, 0.95)', 
    text: '#FFFFFF', 
    textSecondary: '#A1A1AA', 
    border: 'rgba(255, 255, 255, 0.1)', 
    accent: '#8B5CF6',             // Emerald green accent 
    glass: 'rgba(0, 0, 0, 0.7)', 
    glassBorder: 'rgba(255, 255, 255, 0.2)', 
  }, 
  shadows: { 
    small: '0 6px 10px -4px rgba(0, 0, 0, 0.6)', 
    medium: '0 14px 24px -6px rgba(0, 0, 0, 0.7)', 
    large: '0 24px 40px -12px rgba(0, 0, 0, 0.8)', 
    glow: '0 0 30px rgba(139, 92, 246, 0.3)', 
  }, 
  gradients: { 
    primary: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)', 
    secondary: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)', 
    background: 'linear-gradient(135deg, #434343 0%, #1a1a1a 50%, #000000 100%)', 
  }, 
};

interface ThemeContextType {
  theme: Theme;
  mode: 'light' | 'dark' | 'system';
  isDark: boolean;
  toggleTheme: () => void;
  setMode: (mode: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { ThemeContext };
export type { ThemeContextType };

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<'light' | 'dark' | 'system'>(() => {
    const saved = localStorage.getItem('theme');
    // Default to light if nothing saved
    if (!saved) return 'light';
    if (saved === 'system') return 'system';
    return saved === 'dark' ? 'dark' : 'light';
  });

  const [isDark, setIsDark] = useState(() => {
    if (mode === 'system') {
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return mode === 'dark';
  });

  // Listen to mode changes and system preference when 'system' is selected
  useEffect(() => {
    let mq: MediaQueryList | null = null;
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

    if (mode === 'system' && typeof window !== 'undefined' && window.matchMedia) {
      mq = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mq.matches);
      mq.addEventListener ? mq.addEventListener('change', handleChange) : mq.addListener(handleChange);
    } else {
      setIsDark(mode === 'dark');
    }

    return () => {
      if (mq) {
        mq.removeEventListener ? mq.removeEventListener('change', handleChange) : mq.removeListener(handleChange);
      }
    };
  }, [mode]);

  const theme = isDark ? { ...darkTheme, mode } : { ...lightTheme, mode };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => setModeState(prev => (prev === 'dark' ? 'light' : 'dark'));

  const setMode = (newMode: 'light' | 'dark' | 'system') => setModeState(newMode);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setMode, mode, isDark }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};