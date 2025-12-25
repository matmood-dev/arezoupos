import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { settingsAPI } from '../services/api';
import type { Settings } from '../services/api';
import { useTranslation } from 'react-i18next';

const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const FooterContainer = styled.footer<{ $sidebarCollapsed?: boolean; $isMobile?: boolean; $isRtl?: boolean }>`
  background: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.glassBorder};
  color: ${props => props.theme.colors.textSecondary};
  padding: 20px 16px;
  width: 100%;
  box-sizing: border-box;
  margin-left: ${props => !props.$isRtl && !props.$isMobile ? (props.$sidebarCollapsed ? '80px' : '250px') : '0'};
  margin-right: ${props => props.$isRtl && !props.$isMobile ? (props.$sidebarCollapsed ? '80px' : '250px') : '0'};
  width: ${props => props.$isMobile ? '100%' : `calc(100% - ${props.$sidebarCollapsed ? '80px' : '250px'})`};
  transition: margin-left 0.3s ease, margin-right 0.3s ease, width 0.3s ease;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const LogoSmall = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  flex-shrink: 0;
`;

const Right = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Small = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
`;

// Links removed — footer now shows version and copyright only

const Footer: React.FC<{ sidebarCollapsed?: boolean; isMobile?: boolean }> = ({ sidebarCollapsed, isMobile }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const { t, i18n } = useTranslation();

  // Check if current language is RTL
  const isRtl = i18n.language === 'ar';

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await settingsAPI.getSettings();
        if (resp.success && resp.data) setSettings(resp.data);
      } catch {
        // ignore
      }
    };
    load();
  }, []);

  const currentYear = new Date().getFullYear();
  const shopName = settings?.shop_name || t('sidebar.pos', 'Point of Sale');

  return (
    <FooterContainer $sidebarCollapsed={sidebarCollapsed} $isMobile={isMobile} $isRtl={isRtl}>
      <Inner>
        <Left>
          {settings?.shop_logo ? (
            <img src={getImageUrl(settings.shop_logo)} alt="logo" style={{ width: 38, height: 38, objectFit: 'cover', borderRadius: 8 }} />
          ) : (
            <LogoSmall>POS</LogoSmall>
          )}
          <div>
            <div style={{ fontWeight: 600 }}>{shopName}</div>
            <Small>{t('footer.pos_system', 'POS System')} • {t('footer.version', 'V1.0.0')} © {currentYear}</Small>
          </div>
        </Left>

        <Right>
          <Small style={{ marginLeft: 12 }}>© {currentYear} {shopName}. {t('footer.all_rights_reserved', 'All rights reserved')}.</Small>
        </Right>
      </Inner>
    </FooterContainer>
  );
};

export default Footer;
