import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 24px;
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  @media (max-width: 768px) {
    min-height: 48px;
    padding: 14px 20px;
    font-size: 16px; /* Prevent zoom on iOS */
  }

  @media (max-width: 480px) {
    min-height: 50px;
    padding: 16px 24px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${props => props.theme.colors.glass};
    color: ${props => props.theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;