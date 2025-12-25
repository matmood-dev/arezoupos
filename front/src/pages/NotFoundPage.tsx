import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { HiOutlineHome, HiOutlineArrowLeft } from 'react-icons/hi';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: 20px;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.accent};
  margin: 0;
  text-shadow: ${props => props.theme.shadows.glow};
  background: linear-gradient(45deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
  margin: 20px 0;
  text-shadow: ${props => props.theme.shadows.medium};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  margin: 20px 0 40px 0;
  max-width: 500px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HomeButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.colors.glass};
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
    border-color: ${props => props.theme.colors.accent};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigate('/pos');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>{t('notFound.title', 'Page Not Found')}</ErrorTitle>
      <ErrorMessage>
        {t('notFound.message', "The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to continue.")}
      </ErrorMessage>
      <ButtonContainer>
        <HomeButton onClick={handleGoHome}>
          <HiOutlineHome />
          {t('notFound.go_home', 'Go to POS')}
        </HomeButton>
        <BackButton onClick={handleGoBack}>
          <HiOutlineArrowLeft />
          {t('notFound.go_back', 'Go Back')}
        </BackButton>
      </ButtonContainer>
    </NotFoundContainer>
  );
};

export default NotFoundPage;