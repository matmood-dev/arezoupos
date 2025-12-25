import styled from 'styled-components';

export const GlassCard = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${props => props.theme.colors.glassBorder};
  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${props => props.theme.shadows.large};
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const GlassButton = styled.button<{ $primary?: boolean }>`
  background: ${props => props.$primary ? props.theme.gradients.primary : props.theme.colors.glass};
  color: ${props => props.$primary ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.$primary ? 'transparent' : props.theme.colors.glassBorder};
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
    background: ${props => props.$primary ? props.theme.gradients.primary : props.theme.colors.surface};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
