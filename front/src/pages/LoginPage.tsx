import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: 20px;
`;

const LoginCard = styled.div`
  background: ${props => props.theme.colors.glass};
  padding: 40px;
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 12px;
  font-size: 16px;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const LoginButton = styled(Button)`
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  background: ${props => props.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  &:disabled {
    background: ${props => props.theme.colors.glass};
    color: ${props => props.theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
`;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const { login, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      // Redirect to POS after successful login
      navigate('/pos', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : t('login.error'));
    }
  };

  // If already authenticated, redirect to pos
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/pos', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <LoginContainer>
      <LoginCard>
        <Title>{t('login.title')}</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">{t('login.email') || 'Email'}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('login.email_placeholder') || 'Enter your email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">{t('login.password')}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t('login.password_placeholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? t('login.logging_in') : t('login.login_button')}
          </LoginButton>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;