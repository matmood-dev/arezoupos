import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authAPI, usersAPI, ApiError } from '../services/api';
import type { User } from '../services/api';
import { supabase } from '../services/supabase';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to load user profile from public.users table
  const loadUserProfile = async (userId: string) => {
    console.log('loadUserProfile called for:', userId);
    try {
      // Create a timeout promise
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), 5000)
      );

      console.log('Fetching user profile from API...');
      // Race the API call against the timeout
      const response = await Promise.race([
        usersAPI.getById(userId),
        timeout
      ]) as any;

      console.log('User profile response:', response);

      if (response.success && response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
      // If profile load fails, we might want to clear user state or handle it.
      // For now, we just log it. user remains null.
    }
  };

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const { data: { session } } = await supabase.auth.getSession();

        if (session) {
          console.log('Session found:', session.user.id);
          setToken(session.access_token);
          if (session.user) {
            await loadUserProfile(session.user.id);
          }
        } else {
          console.log('No session found');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        if (mounted) {
          console.log('Setting isLoading to false');
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event);
      if (!mounted) return;

      if (session) {
        setToken(session.access_token);
        // We fetch profile on every session change to ensure sync
        await loadUserProfile(session.user.id);
      } else {
        setToken(null);
        setUser(null);
      }

      // Ensure loading is false after any auth change
      setIsLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // authAPI.login uses supabase.auth.signInWithPassword and also fetches the profile
      const response = await authAPI.login(email, password);

      if (response.success && response.data) {
        const { user, token } = response.data;
        setUser(user);
        setToken(token);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    login,
    logout,
    isAuthenticated: !!token && !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};