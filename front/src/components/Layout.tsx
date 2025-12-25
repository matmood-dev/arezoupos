import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { usePermissions } from '../hooks/usePermissions';
import Sidebar from './Sidebar';
import type { NavItem } from './Sidebar';
import { HiCash, HiOutlineCheckCircle, HiOutlineUserGroup, HiOutlineClipboardList, HiOutlineCog, HiOutlineChartBar, HiOutlineUsers } from 'react-icons/hi';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LayoutContainer = styled.div<{ $isRtl: boolean }>`
  min-height: 100vh;
  background: ${props => props.theme.gradients.background};
  transition: background 0.3s ease;
  direction: ${props => props.$isRtl ? 'rtl' : 'ltr'};
`;

const Header = styled.header`
  background: ${props => props.theme.colors.glass};
  color: ${props => props.theme.colors.text};
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.medium};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const MainContent = styled.main<{ $sidebarCollapsed: boolean; $isMobile: boolean; $isRtl: boolean }>`
  margin-left: ${props => !props.$isRtl && !props.$isMobile ? (props.$sidebarCollapsed ? '80px' : '250px') : '0'};
  margin-right: ${props => props.$isRtl && !props.$isMobile ? (props.$sidebarCollapsed ? '80px' : '250px') : '0'};
  padding: 30px;
  transition: margin-left 0.3s ease, margin-right 0.3s ease;
  min-height: calc(100vh - 70px);
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding: 20px 15px;
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  activePage?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Point of Sale System",
  activePage = "pos"
}) => {
  const { t, i18n } = useTranslation();
  useTheme();
  const { canViewReports, canViewUsers } = usePermissions();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if current language is RTL
  const isRtl = i18n.language === 'ar';

  // Update document direction when language changes
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [isRtl, i18n.language]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems: NavItem[] = [
    {
      id: 'pos',
      label: t('sidebar.pos'),
      icon: <HiCash />
    },
    {
      id: 'inventory',
      label: t('sidebar.inventory'),
      icon: <HiOutlineCheckCircle />
    },
    {
      id: 'customers',
      label: t('sidebar.customers'),
      icon: <HiOutlineUserGroup />
    },
    {
      id: 'orders',
      label: t('sidebar.orders'),
      icon: <HiOutlineClipboardList />
    },
    ...(canViewReports ? [{ id: 'reports', label: t('sidebar.reports'), icon: <HiOutlineChartBar /> }] : []),
    ...(canViewUsers ? [{ id: 'users', label: t('sidebar.users'), icon: <HiOutlineUsers /> }] : []),
    {
      id: 'settings',
      label: t('sidebar.settings'),
      icon: <HiOutlineCog />
    },
  ];

  const handleNavItemClick = (itemId: string) => {
    navigate(`/${itemId}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <LayoutContainer $isRtl={isRtl}>
      <Header>
        <Navbar onMobileMenu={toggleMobileMenu} isMobile={isMobile} title={title} />
      </Header>

      <Sidebar
        navItems={navItems}
        activeItem={activePage}
        onItemClick={handleNavItemClick}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        isMobile={isMobile}
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        isRtl={isRtl}
      />

      <MainContent $sidebarCollapsed={sidebarCollapsed} $isMobile={isMobile} $isRtl={isRtl}>
        {children}
      </MainContent>
      <Footer sidebarCollapsed={sidebarCollapsed} isMobile={isMobile} />
    </LayoutContainer>
  );
};

export default Layout;