import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { HiOutlineSun, HiOutlineMoon, HiOutlineLogout } from 'react-icons/hi';
import { settingsAPI } from '../services/api';
import type { Settings } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 0 10px;
    /* Removed flex-wrap to keep single row */
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* Removed min-width to allow shrinking */

  @media (max-width: 768px) {
    gap: 8px;
    flex: 0 0 auto;
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  box-shadow: ${props => props.theme.shadows.glow};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    display: none; /* Hide title on mobile to save space */
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    /* Removed order and width to keep in flow */
    justify-content: center;
  }
`;

// Search removed per request — page title will be centered

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto; /* Push to right */

  @media (max-width: 768px) {
    gap: 8px;
    flex: 0 0 auto;
  }
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: none;
  background: ${props => props.theme.colors.glass};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.medium};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  color: ${props => props.theme.colors.text};

  &:hover { transform: translateY(-3px); }
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: ${props => props.theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  overflow: hidden;
  min-width: 180px;
  z-index: 1000;
`;

const DropItem = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 12px 14px;
  background: transparent;
  border: none;
  text-align: left;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:hover { background: ${props => props.theme.colors.glass}; }
`;

const Navbar: React.FC<{ onMobileMenu?: () => void; isMobile?: boolean; title?: string }> = ({ onMobileMenu, isMobile, title = 'Point of Sale System' }) => {
  const { user, logout } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!open) return;
      if (!ddRef.current) return;
      if (!ddRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const resp = await settingsAPI.getSettings();
        if (resp.success && resp.data) setSettings(resp.data);
      } catch {
        // ignore errors silently
      }
    };
    fetchSettings();
  }, []);

  // Adjust dropdown placement for mobile when Nav bar changes size
  useEffect(() => {
    const reposition = () => {
      const el = ddRef.current;
      if (!el) return;
      // If mobile, stretch full width under right side
      if (isMobile) {
        el.style.right = '8px';
        el.style.left = 'auto';
        el.style.minWidth = '160px';
      } else {
        el.style.right = '0px';
        el.style.left = 'auto';
        el.style.minWidth = '180px';
      }
    };

    reposition();
    window.addEventListener('resize', reposition);
    return () => window.removeEventListener('resize', reposition);
  }, [isMobile]);

  return (
    <NavbarContainer>
      <Left>
        {isMobile && (
          <IconButton
            onClick={onMobileMenu}
            title={t('sidebar.menu')}
            aria-label={t('sidebar.menu')}
            data-testid="mobile-menu-button"
          >
            {/* simple accessible hamburger icon */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0" y="0" width="20" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="6" width="20" height="2" rx="1" fill="currentColor" />
              <rect x="0" y="12" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </IconButton>
        )}
        <Brand onClick={() => navigate('/')}>
          {settings?.shop_logo ? (
            <img src={getImageUrl(settings.shop_logo)} alt="Shop logo" style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover' }} />
          ) : (
            <Logo>POS</Logo>
          )}
          <Title>{settings?.shop_name || title}</Title>
        </Brand>
      </Left>

      <Center>
        <Title style={{ fontSize: '1.15rem', margin: 0 }}>{title}</Title>
      </Center>

      <Right>
        {/* notifications removed */}
        <IconButton onClick={toggleTheme} title={t('sidebar.settings')}>
          {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </IconButton>

        <div style={{ position: 'relative' }} ref={ddRef}>
          <Avatar onClick={() => setOpen(s => !s)} title={t('sidebar.menu')}>{user?.username?.charAt(0) || 'U'}</Avatar>
          {open && (
            <Dropdown role="menu">
              <DropItem onClick={() => { navigate('/settings'); setOpen(false); }}>{t('sidebar.settings')}</DropItem>
              <DropItem onClick={() => { logout(); navigate('/login'); }}>
                <HiOutlineLogout /> {t('login.logout', 'Logout')}
              </DropItem>
            </Dropdown>
          )}
        </div>
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
