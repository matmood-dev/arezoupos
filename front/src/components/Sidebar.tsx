import React from 'react';
import styled from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  navItems: NavItem[];
  activeItem: string;
  onItemClick: (itemId: string) => void;
  collapsed?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  isRtl?: boolean;
}

const SidebarContainer = styled.aside<{ $collapsed: boolean; $isMobile?: boolean; $isOpen?: boolean; $isRtl?: boolean }>`
  width: ${props => props.$collapsed ? '80px' : '250px'};
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-right: ${props => !props.$isRtl ? `1px solid ${props.theme.colors.glassBorder}` : 'none'};
  border-left: ${props => props.$isRtl ? `1px solid ${props.theme.colors.glassBorder}` : 'none'};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, left 0.3s ease, right 0.3s ease;
  box-shadow: ${props => props.theme.shadows.medium};
  position: fixed;
  left: ${props => !props.$isRtl ? '0' : 'auto'};
  right: ${props => props.$isRtl ? '0' : 'auto'};
  top: 70px;
  height: calc(100vh - 70px);
  z-index: 100;

  /* Mobile styles */
  @media (max-width: 768px) {
    position: fixed;
    left: ${props => !props.$isRtl ? (props.$isOpen ? '0' : '-100%') : 'auto'};
    right: ${props => props.$isRtl ? (props.$isOpen ? '0' : '-100%') : 'auto'};
    top: 0;
    height: 100vh;
    width: 280px;
    z-index: 1000;
    box-shadow: ${props => props.theme.shadows.large};
    transition: left 0.3s ease, right 0.3s ease;
  }
`;

const NavItem = styled.button<{ $active: boolean; $isRtl?: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: ${props => props.$active ? props.theme.colors.surface : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.accent : props.theme.colors.text};
  border: none;
  border-radius: ${props => props.$isRtl ? '25px 0 0 25px' : '0 25px 25px 0'};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: ${props => props.$isRtl ? '5px 0 5px 15px' : '5px 15px 5px 0'};
  font-size: 16px;
  font-weight: ${props => props.$active ? '600' : '400'};
  border-left: ${props => !props.$isRtl && props.$active ? `4px solid ${props.theme.colors.accent}` : 'none'};
  border-right: ${props => props.$isRtl && props.$active ? `4px solid ${props.theme.colors.accent}` : 'none'};

  &:hover {
    background: ${props => props.theme.colors.surface};
    transform: ${props => props.$isRtl ? 'translateX(-5px)' : 'translateX(5px)'};
    box-shadow: ${props => props.theme.shadows.small};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${props => !props.$isRtl ? '15px' : '0'};
    margin-left: ${props => props.$isRtl ? '15px' : '0'};
    flex-shrink: 0;
  }
`;

const NavList = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.glassBorder};
    border-radius: 4px;
  }
`;

const ToggleButton = styled.button`
  margin: 15px auto 0 auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.colors.primary};
    color: #ffffff;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 15px ${props => props.theme.colors.primary}66;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const MobileHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.surface};
`;

const MobileTitle = styled.h3`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(20px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({
  navItems,
  activeItem,
  onItemClick,
  collapsed = false,
  onToggle,
  isMobile = false,
  isOpen = false,
  onClose,
  isRtl = false
}) => {
  const { t } = useTranslation();

  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <>
      {isMobile && isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={onClose}
        />
      )}

      <SidebarContainer $collapsed={collapsed} $isMobile={isMobile} $isOpen={isOpen} $isRtl={isRtl}>
        {isMobile && (
          <MobileHeader>
            <MobileTitle>{t('sidebar.menu')}</MobileTitle>
            <CloseButton onClick={onClose}>
              ×
            </CloseButton>
          </MobileHeader>
        )}

        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              $active={activeItem === item.id}
              $isRtl={isRtl}
              onClick={() => handleItemClick(item.id)}
            >
              {item.icon}
              {(!collapsed || isMobile) && item.label}
            </NavItem>
          ))}
        </NavList>

        {!isMobile && onToggle && (
          <ToggleButton onClick={onToggle} aria-label={collapsed ? t('sidebar.expand') : t('sidebar.collapse')}>
            {isRtl ? (collapsed ? <HiChevronLeft /> : <HiChevronRight />) : (collapsed ? <HiChevronRight /> : <HiChevronLeft />)}
          </ToggleButton>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;