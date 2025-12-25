import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useViewMode from '../hooks/useViewMode';
import styled from 'styled-components';
import { itemsAPI, type Item } from '../services/api';
import useCategories from '../hooks/useCategories';
import { Button } from '../components/Button';
import AdvancedSearch, { type AdvancedFilter } from '../components/AdvancedSearch';
import { usePermissions } from '../hooks/usePermissions';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineX, HiOutlineCheck, HiOutlineViewGrid, HiOutlineViewList, HiOutlineSearch, HiOutlineChevronDown } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

// Helper function to get full image URL
const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const PageContainer = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const PageContent = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  box-shadow: ${props => props.theme.shadows.medium};

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const MiniSearchContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    border-color: ${props => props.theme.colors.accent}40;
    box-shadow: ${props => props.theme.shadows.small};
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const SearchIcon = styled(HiOutlineSearch)`
  color: ${props => props.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

const ExpandIcon = styled(HiOutlineChevronDown)`
  color: ${props => props.theme.colors.textSecondary};
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
`;

const MiniSearchInput = styled.input`
  flex: 1;
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ControlsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    margin-bottom: 20px;
    padding: 12px 0;
  }
`;

const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  overflow: hidden;
`;

const ViewToggleButton = styled.button<{ $active: boolean }>`
  padding: 10px 16px;
  border: none;
  background: ${props => props.$active ? props.theme.gradients.primary : 'transparent'};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? props.theme.gradients.primary : props.theme.colors.surface};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 13px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const FormContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  box-shadow: ${props => props.theme.shadows.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  }

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 12px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
  }
`;

const FormTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
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

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  resize: vertical;
  min-height: 80px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 14px;
    min-height: 70px;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
    margin-top: 20px;
    padding-top: 16px;
  }
`;

const CancelButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  background: ${props => props.theme.colors.glass};
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: #ef4444;
    color: #ef4444;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`;

const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  background: ${props => props.theme.gradients.primary};
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 13px;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`;

const ItemsSection = styled.div``;

const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ItemCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.large};
    border-color: ${props => props.theme.colors.accent}40;

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  background: ${props => props.theme.colors.glass};

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 100px;
    margin-bottom: 10px;
  }
`;

const NoImageBox = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 15px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-weight: 500;

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 100px;
    margin-bottom: 10px;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

const ItemName = styled.h4`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ItemActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(1):hover {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }

  &:nth-child(2):hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${props => props.theme.colors.textSecondary};

    @media (max-width: 480px) {
      width: 14px;
      height: 14px;
    }
  }
`;

const ItemDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`;

const DetailValue = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: 600;

  &.low-stock {
    color: #f59e0b;
    font-weight: 700;
    position: relative;

    &::after {
      content: '⚠️';
      margin-left: 4px;
      font-size: 12px;
    }
  }
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const ListItemCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.primary});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
    border-color: ${props => props.theme.colors.accent}40;

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const ListItemContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const ListItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background: ${props => props.theme.colors.glass};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const NoListImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const ListItemDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ListItemInfo = styled.div`
  flex: 1;
`;

const ListItemName = styled.h4`
  margin: 0 0 8px 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const ListItemMeta = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const ListItemMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ListItemMetaLabel = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
`;

const ListItemMetaValue = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: 600;

  &.low-stock {
    color: #f59e0b;
    font-weight: 700;
    position: relative;

    &::after {
      content: '⚠️';
      margin-left: 4px;
      font-size: 12px;
    }
  }
`;

const ItemDescription = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
`;

const ListItemDescription = styled.p`
  margin: 8px 0 0 0;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ListItemActions = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

const BulkActionsBar = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  border: 2px solid ${props => props.theme.colors.accent};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

const BulkActionsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const BulkActionsRight = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: stretch;
  }
`;

const SelectionInfo = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 14px;
`;

const BulkButton = styled(Button) <{ $variant?: 'danger' | 'primary' }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.$variant === 'danger' ? `
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
      transform: translateY(-1px);
      box-shadow: ${props.theme.shadows.medium};
    }
  ` : `
    background: ${props.theme.gradients.primary};
    color: white;
    
    &:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: ${props.theme.shadows.medium};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: ${props => props.theme.colors.accent};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  }

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const ModalTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 600;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PaginationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

const PageControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
  }
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`;

const PageInfo = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
    text-align: center;
  }
`;

const PageSizeSelect = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 6px;
    width: 100%;
    max-width: 140px;
  }
`;

const InventoryPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { canDeleteItems } = usePermissions();
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [showBulkUpdateModal, setShowBulkUpdateModal] = useState(false);
  const [bulkStockValue, setBulkStockValue] = useState('');
  const [items, setItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState<AdvancedFilter>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [viewMode, setViewMode] = useViewMode();
  const [showArchived, setShowArchived] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Track mobile state so we can disable list view on small screens
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    // enforce grid view on mobile
    if (window.innerWidth <= 768 && viewMode === 'list') setViewMode('grid');
    return () => window.removeEventListener('resize', onResize);
  }, [setViewMode, viewMode]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock_quantity: '',
    image: null as File | null
  });
  const { categories, loading: categoriesLoading } = useCategories();

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPageOptions = [10, 20, 50];
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageOptions[0]);

  // Fetch items function
  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await itemsAPI.getAll(showArchived ? { archivedOnly: true } : {});
      if (response.success && response.data) {
        setItems(response.data);
      } else {
        setError(t('inventory.error'));
      }
    } catch (err) {
      console.error('Error fetching items:', err);
      setError(err instanceof Error ? err.message : t('inventory.error'));
    } finally {
      setLoading(false);
    }
  }, [t, showArchived]);

  // Fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // Listen for inventory updates triggered by order status changes
  useEffect(() => {
    const handler = () => {
      fetchItems();
    };
    window.addEventListener('inventory-updated', handler);
    return () => window.removeEventListener('inventory-updated', handler);
  }, [fetchItems]);

  // view mode is handled and persisted by useViewMode hook

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      stock_quantity: '',
      image: null
    });
    setShowAddForm(false);
  };

  const handleAddItem = () => {
    resetForm();
    setShowAddForm(true);
  };

  const handleEditItem = (item: Item) => {
    navigate(`/inventory/edit/${item.itemid}`);
  };

  const handleDeleteItem = async (itemId: number) => {
    const itemToDelete = items.find(item => item.itemid === itemId);
    if (!itemToDelete) return;

    // Show confirmation toast with custom actions
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>
          {t('inventory.archive_confirm_title', { name: itemToDelete.name })}
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
          {t('inventory.archive_confirm_message')}
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
            }}
            style={{
              padding: '6px 12px',
              border: '1px solid #d1d5db',
              background: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
              // Proceed with archiving
              performDelete(itemToDelete);
            }}
            style={{
              padding: '6px 12px',
              border: 'none',
              background: '#f59e0b',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {t('inventory.archive')}
          </button>
        </div>
      </div>
    ), {
      duration: 10000, // 10 seconds
      style: {
        background: '#fef3c7',
        border: '1px solid #fcd34d',
        borderRadius: '8px',
        padding: '16px'
      }
    });
  };

  // Select/Deselect individual item
  const handleToggleSelect = (itemId: number) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Select/Deselect all items (per current page)
  const handleSelectAll = () => {
    const pageIds = paginatedItems.map(item => item.itemid);
    const allOnPageSelected = pageIds.length > 0 && pageIds.every(id => selectedItems.has(id));
    if (allOnPageSelected) {
      setSelectedItems(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.delete(id));
        return newSet;
      });
    } else {
      setSelectedItems(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  };


  // Clear selection
  const handleClearSelection = () => {
    setSelectedItems(new Set());
  };

  const handleBulkDelete = async () => {
    if (selectedItems.size === 0) return;

    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>
          Archive {selectedItems.size} item(s)?
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
          This will move the selected items to the archive. You can restore them later from the archived items view.
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => toast.dismiss(toastInstance.id)}
            style={{
              padding: '6px 12px',
              border: '1px solid #d1d5db',
              background: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
              performBulkArchive();
            }}
            style={{
              padding: '6px 12px',
              border: 'none',
              background: '#f59e0b',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Archive All
          </button>
        </div>
      </div>
    ), {
      duration: 10000,
      style: {
        background: '#fffbeb',
        border: '1px solid #fef3c7',
        borderRadius: '8px',
        padding: '16px'
      }
    });

    // prevent TypeScript unused-local error if function is not wired up yet
    void handleBulkDelete;
  };

  const performBulkArchive = async () => {
    // Only archive items that are currently active
    const itemsToArchive = Array.from(selectedItems).filter(id => {
      const it = items.find(i => i.itemid === id);
      return it && it.active;
    });

    if (itemsToArchive.length === 0) {
      toast.error(t('inventory.no_active_selected') || 'No active items selected to archive');
      return;
    }

    const loadingToast = toast.loading(`Archiving ${itemsToArchive.length} item(s)...`);

    try {
      // Archive items one by one
      const archivePromises = itemsToArchive.map(itemId => itemsAPI.delete(itemId));
      await Promise.all(archivePromises);

      toast.success(`Successfully archived ${itemsToArchive.length} item(s)`, {
        id: loadingToast
      });

      // Refresh items list
      await fetchItems();
      setSelectedItems(new Set());
    } catch (err) {
      toast.error('Failed to archive some items', {
        id: loadingToast
      });
      console.error('Bulk archive error:', err);
    }
  };

  const handleBulkPermanentDelete = async () => {
    // Only consider archived items for permanent deletion
    const archivedSelected = Array.from(selectedItems).filter(id => {
      const it = items.find(i => i.itemid === id);
      return it && !it.active;
    });

    if (archivedSelected.length === 0) {
      toast.error(t('inventory.permanent_delete_error') || 'No archived items selected');
      return;
    }

    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>
          {t('inventory.permanent_delete_confirm_title', { name: `${archivedSelected.length} items` }) || `Delete ${archivedSelected.length} items permanently?`}
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
          {t('inventory.permanent_delete_confirm_message') || 'This will permanently remove the items from the database. Orders will retain a reference to these items as deleted items.'}
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => { toast.dismiss(toastInstance.id); }}
            style={{ padding: '6px 12px', border: '1px solid #d1d5db', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={async () => {
              toast.dismiss(toastInstance.id);
              await performBulkPermanentDelete(archivedSelected);
            }}
            style={{ padding: '6px 12px', border: 'none', background: '#ef4444', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
          >
            {t('inventory.permanent_delete') || 'Delete permanently'}
          </button>
        </div>
      </div>
    ), {
      duration: 15000,
      style: { background: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px' }
    });
  };

  const performBulkPermanentDelete = async (ids: number[]) => {
    if (ids.length === 0) return;
    const loadingToast = toast.loading(`Deleting ${ids.length} items permanently...`);

    try {
      const results = await Promise.allSettled(ids.map(id => itemsAPI.permanentDelete(id)));
      const successes = results.filter(r => r.status === 'fulfilled').length;
      const failures = results.length - successes;

      if (successes > 0) {
        toast.success(t('inventory.permanent_delete_success', { name: `${successes} item(s)` }) || `${successes} items permanently deleted`, { id: loadingToast });
      }
      if (failures > 0) {
        toast.error(t('inventory.permanent_delete_error') || `${failures} items failed to delete`, { id: loadingToast });
        console.error('Bulk permanent delete failures:', results.filter(r => r.status === 'rejected'));
      }

      await fetchItems();
      setSelectedItems(new Set());
    } catch (err) {
      toast.error(t('inventory.permanent_delete_error') || 'Failed to permanently delete items', { id: loadingToast });
      console.error('Bulk permanent delete error:', err);
    }
  };

  const handleBulkUpdateStock = () => {
    if (selectedItems.size === 0) return;
    setShowBulkUpdateModal(true);
  };

  const performBulkUpdateStock = async () => {
    if (!bulkStockValue || isNaN(Number(bulkStockValue))) {
      toast.error('Please enter a valid stock quantity');
      return;
    }

    const itemsToUpdate = Array.from(selectedItems);
    const loadingToast = toast.loading(`Updating stock for ${itemsToUpdate.length} items...`);

    try {
      const updatePromises = itemsToUpdate.map(itemId => {
        const formData = new FormData();
        formData.append('stock_quantity', bulkStockValue);
        return itemsAPI.update(itemId, formData);
      });

      await Promise.all(updatePromises);

      toast.success(`Successfully updated stock for ${itemsToUpdate.length} items`, {
        id: loadingToast
      });

      // Refresh items list
      await fetchItems();
      setSelectedItems(new Set());
      setShowBulkUpdateModal(false);
      setBulkStockValue('');
    } catch (err) {
      toast.error('Failed to update some items', {
        id: loadingToast
      });
      console.error('Bulk update error:', err);
    }
  };

  const performDelete = async (item: Item) => {
    toast.promise(
      itemsAPI.delete(item.itemid),
      {
        loading: t('inventory.archiving', { name: item.name }),
        success: (response) => {
          if (response.success) {
            setItems(items.filter(i => i.itemid !== item.itemid));
            return t('inventory.archive_success', { name: item.name });
          } else {
            throw new Error(t('inventory.archive_error'));
          }
        },
        error: (err) => err instanceof Error ? err.message : t('inventory.archive_error')
      }
    );
  };

  const handlePermanentDelete = async (item: Item) => {
    // Only allow permanent delete for archived items
    if (item.active) return;

    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>
          {t('inventory.permanent_delete_confirm_title', { name: item.name }) || `Delete ${item.name} permanently?`}
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
          {t('inventory.permanent_delete_confirm_message') || 'This will permanently remove the item from the database. Orders will retain a reference to this item as a deleted item.'}
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
            }}
            style={{
              padding: '6px 12px',
              border: '1px solid #d1d5db',
              background: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
              toast.promise(
                itemsAPI.permanentDelete(item.itemid),
                {
                  loading: t('inventory.permanent_deleting', { name: item.name }) || 'Deleting...',
                  success: (response) => {
                    if (response.success) {
                      setItems(items.filter(i => i.itemid !== item.itemid));
                      return t('inventory.permanent_delete_success', { name: item.name }) || 'Deleted permanently';
                    }
                    throw new Error(t('inventory.permanent_delete_error') || 'Failed to delete item');
                  },
                  error: (err) => err instanceof Error ? err.message : (t('inventory.permanent_delete_error') || 'Failed to delete item')
                }
              );
            }}
            style={{
              padding: '6px 12px',
              border: 'none',
              background: '#ef4444',
              color: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {t('inventory.permanent_delete') || 'Delete permanently'}
          </button>
        </div>
      </div>
    ), {
      duration: 15000,
      style: {
        background: '#fff1f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        padding: '16px'
      }
    });
  };

  const handleUnarchiveItem = async (item: Item) => {
    toast.promise(
      itemsAPI.unarchive(item.itemid),
      {
        loading: t('inventory.unarchiving', { name: item.name }),
        success: (response) => {
          if (response.success) {
            setItems(items.filter(i => i.itemid !== item.itemid));
            return t('inventory.unarchive_success', { name: item.name });
          } else {
            throw new Error(t('inventory.unarchive_error'));
          }
        },
        error: (err) => err instanceof Error ? err.message : t('inventory.unarchive_error')
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    // Support category IDs from backend; if we have a numeric id, send categoryid
    const categoryValue = formData.category?.toString() || '';
    if (/^\d+$/.test(categoryValue)) {
      formDataToSend.append('categoryid', categoryValue);
    } else {
      formDataToSend.append('category', categoryValue);
    }
    formDataToSend.append('stock_quantity', formData.stock_quantity);

    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await itemsAPI.create(formDataToSend);
      if (response.success && response.data) {
        setItems([...items, response.data]);
        resetForm();
        toast.success(t('inventory.add_success'));
      } else {
        toast.error(t('inventory.add_error'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('inventory.add_error'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      image: file
    });
  };

  const displayItems = React.useMemo(() => {
    return items.filter((item) => {
      // search
      if (filters.search && filters.search.trim() !== '') {
        const s = filters.search.toLowerCase();
        if (!item.name.toLowerCase().includes(s) && !(item.description && item.description.toLowerCase().includes(s))) {
          return false;
        }
      }
      // category (match by name)
      if (filters.category && filters.category !== '') {
        if ((item.category || '') !== filters.category) return false;
      }
      // min price
      if (filters.minPrice && filters.minPrice !== '') {
        const minP = Number(filters.minPrice);
        if (Number(item.price) < minP) return false;
      }
      // max price
      if (filters.maxPrice && filters.maxPrice !== '') {
        const maxP = Number(filters.maxPrice);
        if (Number(item.price) > maxP) return false;
      }
      // min stock
      if (filters.minStock && filters.minStock !== '') {
        const minS = Number(filters.minStock);
        if (Number(item.stock_quantity) < minS) return false;
      }
      // max stock
      if (filters.maxStock && filters.maxStock !== '') {
        const maxS = Number(filters.maxStock);
        if (Number(item.stock_quantity) > maxS) return false;
      }
      return true;
    });
  }, [items, filters]);

  useEffect(() => {
    setSelectedItems(new Set());
    setCurrentPage(1);
  }, [displayItems]);

  const totalPages = Math.max(1, Math.ceil(displayItems.length / itemsPerPage));

  const paginatedItems = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displayItems.slice(start, start + itemsPerPage);
  }, [displayItems, currentPage, itemsPerPage]);

  const startIndex = displayItems.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, displayItems.length);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const applyFilters = (f: AdvancedFilter) => {
    setFilters(f);
  };

  const clearFilters = () => setFilters({});

  return (
    <PageContainer>
      <PageTitle>{t('inventory.title')}</PageTitle>
      <PageContent>
        {isSearchExpanded ? (
          <AdvancedSearch 
            initialFilters={filters} 
            categories={categories} 
            onApply={applyFilters} 
            onClear={clearFilters} 
            isOpen={true}
            onClose={() => setIsSearchExpanded(false)}
          />
        ) : (
          <MiniSearchContainer onClick={() => setIsSearchExpanded(true)}>
            <SearchIcon />
            <MiniSearchInput
              type="text"
              placeholder={t('inventory.search_placeholder', 'Search items...')}
              value={filters.search || ''}
              onChange={(e) => {
                const newFilters = { ...filters, search: e.target.value };
                setFilters(newFilters);
                applyFilters(newFilters);
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <ExpandIcon />
          </MiniSearchContainer>
        )}
        <ControlsSection>
          {!isMobile && (
            <ViewToggle>
              <ViewToggleButton $active={viewMode === 'grid'} onClick={() => setViewMode('grid')}>
                <HiOutlineViewGrid />
                {t('inventory.view_grid')}
              </ViewToggleButton>
              <ViewToggleButton $active={viewMode === 'list'} onClick={() => setViewMode('list')}>
                <HiOutlineViewList />
                {t('inventory.view_list')}
              </ViewToggleButton>
            </ViewToggle>
          )}

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <ViewToggleButton $active={showArchived} onClick={() => setShowArchived(!showArchived)}>
              {showArchived ? t('inventory.hide_archived') : t('inventory.show_archived')}
            </ViewToggleButton>
            <AddButton onClick={handleAddItem}>
              <HiOutlinePlus />
              {t('inventory.add_item')}
            </AddButton>
          </div>
        </ControlsSection>

        {showAddForm && (
          <FormContainer>
            <FormTitle>{t('inventory.add_item')}</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor='name'>{t('inventory.name')} *</Label>
                  <Input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='category'>{t('inventory.category')} *</Label>
                  <Select
                    id='category'
                    name='category'
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>{t('inventory.select_category')}</option>
                    {categoriesLoading ? (
                      <option value='' disabled>{t('inventory.loading_categories')}</option>
                    ) : (
                      categories.map(cat => (
                        <option key={cat.categoryid} value={cat.categoryid.toString()}>{cat.name}</option>
                      ))
                    )}
                  </Select>
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor='price'>{t('inventory.price')} *</Label>
                  <Input
                    id='price'
                    name='price'
                    type='number'
                    step='0.01'
                    min='0'
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor='stock_quantity'>{t('inventory.stock')} *</Label>
                  <Input
                    id='stock_quantity'
                    name='stock_quantity'
                    type='number'
                    min='0'
                    value={formData.stock_quantity}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor='description'>{t('inventory.description')}</Label>
                <Textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor='image'>{t('inventory.image')}</Label>
                <Input
                  id='image'
                  name='image'
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                />
                {formData.image && (
                  <div style={{ marginTop: '8px', fontSize: '14px', color: '#64748b' }}>
                    {t('inventory.image_selected', { name: formData.image.name })}
                  </div>
                )}
              </FormGroup>

              <FormActions>
                <CancelButton type='button' onClick={resetForm}>
                  <HiOutlineX />
                  {t('common.cancel')}
                </CancelButton>
                <SubmitButton type='submit'>
                  <HiOutlineCheck />
                  {t('inventory.add_item')}
                </SubmitButton>
              </FormActions>
            </Form>
          </FormContainer>
        )}

        {/* Bulk Actions Bar */}
        {selectedItems.size > 0 && (
          <BulkActionsBar>
            <BulkActionsLeft>
              <SelectionInfo>
                {selectedItems.size} {t('inventory.selected') || 'item(s) selected'}
              </SelectionInfo>
              <Button onClick={handleClearSelection} style={{ padding: '6px 12px', fontSize: '13px' }}>
                {t('inventory.clear_selection') || 'Clear Selection'}
              </Button>
            </BulkActionsLeft>
            <BulkActionsRight>
              <BulkButton onClick={handleBulkUpdateStock}>
                <HiOutlineCheck />
                {t('inventory.update_stock') || 'Update Stock'}
              </BulkButton>
              {canDeleteItems && !showArchived && (
                <BulkButton $variant='danger' onClick={handleBulkDelete} style={{ background: '#f59e0b', borderColor: '#f59e0b' }}>
                  <HiOutlineTrash />
                  {t('inventory.archive_selected') || 'Archive Selected'}
                </BulkButton>
              )}
              {canDeleteItems && (
                <>
                  {/* If viewing archived items, offer permanent delete in bulk */}
                  {showArchived && (
                    <BulkButton $variant='danger' onClick={handleBulkPermanentDelete} style={{ background: '#dc2626', borderColor: '#dc2626' }}>
                      <HiOutlineX />
                      {t('inventory.permanent_delete')}
                    </BulkButton>
                  )}
                </>
              )}
            </BulkActionsRight>
          </BulkActionsBar>
        )}

        <ItemsSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <SectionTitle style={{ margin: 0 }}>
              {t('inventory.current_inventory', { count: displayItems.length })}
            </SectionTitle>
            {items.length > 0 && (
              <CheckboxLabel>
                <Checkbox
                  type='checkbox'
                  checked={paginatedItems.length > 0 && paginatedItems.every(i => selectedItems.has(i.itemid))}
                  onChange={handleSelectAll}
                />
                {t('inventory.select_all')}
              </CheckboxLabel>
            )} 
          </div>

          {loading ? (
            <LoadingMessage>{t('inventory.loading')}</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : items.length === 0 ? (
            <EmptyMessage>{t('inventory.no_items')}</EmptyMessage>
          ) : viewMode === 'grid' ? (
            <ItemsGrid>
              {paginatedItems.map((item) => (
                <ItemCard key={item.itemid}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <Checkbox
                      type='checkbox'
                      checked={selectedItems.has(item.itemid)}
                      onChange={() => handleToggleSelect(item.itemid)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <ItemActions>
                      <ActionButton onClick={() => handleEditItem(item)} title={t('common.edit')}>
                        <HiOutlinePencil />
                      </ActionButton>
                      {canDeleteItems && (
                        <>
                          {item.active ? (
                            <ActionButton onClick={() => handleDeleteItem(item.itemid)} title={t('inventory.archive')}>
                              <HiOutlineTrash />
                            </ActionButton>
                          ) : (
                            <>
                              <ActionButton onClick={() => handleUnarchiveItem(item)} title={t('inventory.unarchive')}>
                                <HiOutlineCheck />
                              </ActionButton>
                              <ActionButton onClick={() => handlePermanentDelete(item)} title={t('inventory.permanent_delete')} style={{ color: '#ef4444' }}>
                                <HiOutlineX />
                              </ActionButton>
                            </>
                          )}
                        </>
                      )}
                    </ItemActions>
                  </div>
                  {item.image ? (
                    <ItemImage
                      src={getImageUrl(item.image)}
                      alt={item.name}
                      onError={(e) => {
                        console.error('Image failed to load:', item.image, e);
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <NoImageBox>{t('pos.no_image')}</NoImageBox>
                  )}
                  <ItemHeader>
                    <ItemName>{item.name}</ItemName>
                  </ItemHeader>

                  <ItemDetails>
                    <ItemDetail>
                      <DetailLabel>{t('inventory.price')}:</DetailLabel>
                      <DetailValue>BHD {Number(item.price).toFixed(3)}</DetailValue>
                    </ItemDetail>
                    <ItemDetail>
                      <DetailLabel>{t('inventory.stock')}:</DetailLabel>
                      <DetailValue className={item.stock_quantity < 10 ? 'low-stock' : ''}>
                        {item.stock_quantity}
                      </DetailValue>
                    </ItemDetail>
                    <ItemDetail>
                      <DetailLabel>{t('inventory.category')}:</DetailLabel>
                      <DetailValue>{item.category}</DetailValue>
                    </ItemDetail>
                  </ItemDetails>

                  {item.description && (
                    <ItemDescription>{item.description}</ItemDescription>
                  )}
                </ItemCard>
              ))}
            </ItemsGrid>
          ) : (
            <ItemsList>
              {paginatedItems.map((item) => (
                <ListItemCard key={item.itemid}>
                  <ListItemContent>
                    <Checkbox
                      type='checkbox'
                      checked={selectedItems.has(item.itemid)}
                      onChange={() => handleToggleSelect(item.itemid)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    {item.image ? (
                      <ListItemImage
                        src={getImageUrl(item.image)}
                        alt={item.name}
                        onError={(e) => {
                          console.error('Image failed to load:', item.image, e);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <NoListImageBox>{t('pos.no_image')}</NoListImageBox>
                    )}
                    <ListItemDetails>
                      <ListItemInfo>
                        <ListItemName>{item.name}</ListItemName>
                        <ListItemMeta>
                          <ListItemMetaItem>
                            <ListItemMetaLabel>{t('inventory.price')}:</ListItemMetaLabel>
                            <ListItemMetaValue>BHD {Number(item.price).toFixed(3)}</ListItemMetaValue>
                          </ListItemMetaItem>
                          <ListItemMetaItem>
                            <ListItemMetaLabel>{t('inventory.stock')}:</ListItemMetaLabel>
                            <ListItemMetaValue className={item.stock_quantity < 10 ? 'low-stock' : ''}>
                              {item.stock_quantity}
                            </ListItemMetaValue>
                          </ListItemMetaItem>
                          <ListItemMetaItem>
                            <ListItemMetaLabel>{t('inventory.category')}:</ListItemMetaLabel>
                            <ListItemMetaValue>{item.category}</ListItemMetaValue>
                          </ListItemMetaItem>
                        </ListItemMeta>
                        {item.description && (
                          <ListItemDescription>{item.description}</ListItemDescription>
                        )}
                      </ListItemInfo>
                      <ListItemActions>
                        <ActionButton onClick={() => handleEditItem(item)} title={t('common.edit')}>
                          <HiOutlinePencil />
                        </ActionButton>
                        {canDeleteItems && (
                          <>
                            {item.active ? (
                              <ActionButton onClick={() => handleDeleteItem(item.itemid)} title={t('inventory.archive')}>
                                <HiOutlineTrash />
                              </ActionButton>
                            ) : (
                              <>
                                <ActionButton onClick={() => handleUnarchiveItem(item)} title={t('inventory.unarchive')}>
                                  <HiOutlineCheck />
                                </ActionButton>
                                <ActionButton onClick={() => handlePermanentDelete(item)} title={t('inventory.permanent_delete')} style={{ color: '#ef4444' }}>
                                  <HiOutlineX />
                                </ActionButton>
                              </>
                            )}
                          </>
                        )}
                      </ListItemActions>
                    </ListItemDetails>
                  </ListItemContent>
                </ListItemCard>
              ))}
            </ItemsList>
          )}

          <PaginationBar>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <PageSizeSelect value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
                  {itemsPerPageOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </PageSizeSelect>
                <PageInfo style={{ marginLeft: 8 }}>Items per page</PageInfo>
                <PageInfo style={{ marginLeft: 12 }}>{`Showing ${startIndex}–${endIndex} of ${displayItems.length} items`}</PageInfo> 
              </div>

              <PageControls>
                <PageButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>&laquo;</PageButton>
                <PageButton onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>Prev</PageButton>
                <PageInfo>{`Page ${currentPage} of ${totalPages}`}</PageInfo>
                <PageButton onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>Next</PageButton>
                <PageButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>&raquo;</PageButton>
              </PageControls>
            </PaginationBar>
        </ItemsSection>

        {/* Bulk Update Stock Modal */}
        {showBulkUpdateModal && (
          <Modal onClick={() => setShowBulkUpdateModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalTitle>Update Stock for {selectedItems.size} Items</ModalTitle>
              <FormGroup>
                <Label>New Stock Quantity</Label>
                <Input
                  type='number'
                  value={bulkStockValue}
                  onChange={(e) => setBulkStockValue(e.target.value)}
                  placeholder='Enter stock quantity'
                  min='0'
                />
              </FormGroup>
              <ModalActions>
                <CancelButton onClick={() => {
                  setShowBulkUpdateModal(false);
                  setBulkStockValue('');
                }}>
                  <HiOutlineX />
                  {t('common.cancel')}
                </CancelButton>
                <SubmitButton onClick={performBulkUpdateStock}>
                  <HiOutlineCheck />
                  {t('inventory.update_stock') || 'Update Stock'}
                </SubmitButton>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
      </PageContent>
    </PageContainer>
  );
};

export default InventoryPage;
