import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authAPI, usersAPI, ApiError } from '../services/api';
import type { User } from '../services/api';

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

  // Helper to load user profile
  const loadUserProfile = async (userId: string) => {
    console.log('loadUserProfile called for:', userId);
    try {
      const response = await usersAPI.getById(userId);
      console.log('User profile response:', response);

      if (response.success && response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
      // If profile load fails, clear auth state
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setToken(null);
      setUser(null);
    }
  };

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');

        if (storedToken && storedUserId) {
          console.log('Found stored token and user ID');
          setToken(storedToken);
          await loadUserProfile(storedUserId);
        } else {
          console.log('No stored credentials found');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid auth state
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setToken(null);
        setUser(null);
      } finally {
        if (mounted) {
          console.log('Setting isLoading to false');
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await authAPI.login(email, password);

      if (response.success && response.data) {
        const { user, token } = response.data;
        
        // Store credentials in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user.userid);
        
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

  const logout = () => {
    try {
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      
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