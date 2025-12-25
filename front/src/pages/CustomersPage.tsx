import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvancedSearch, { type AdvancedFilter } from '../components/AdvancedSearch';
import useViewMode from '../hooks/useViewMode';
import styled from 'styled-components';
import { customersAPI, type Customer, type CreateCustomerRequest } from '../services/api';
import { Button } from '../components/Button';
import { usePermissions } from '../hooks/usePermissions';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineViewGrid, HiOutlineViewList, HiOutlineSearch, HiOutlineChevronDown, HiOutlineX, HiOutlineCheck } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

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
  @media (max-width: 768px) {
    display: none;
  }
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

const CustomersSection = styled.div``;

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
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
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
    &:hover:not(:disabled) { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); transform: translateY(-1px); box-shadow: ${props.theme.shadows.medium}; }
  ` : `
    background: ${props.theme.gradients.primary};
    color: white;
    &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: ${props.theme.shadows.medium}; }
  `}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
  svg { width: 16px; height: 16px; }
  @media (max-width: 768px) { flex: 1; justify-content: center; }
`;

const Checkbox = styled.input`
  width: 18px; height: 18px; cursor: pointer; accent-color: ${props => props.theme.colors.accent};
`;

const CheckboxLabel = styled.label`
  display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; color: ${props => props.theme.colors.text}; font-size: 14px; font-weight: 500;
`;

const CustomersGrid = styled.div`
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

const CustomerCard = styled.div`
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

const CustomerActions = styled.div`
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

const CustomerDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const CustomerDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DetailIcon = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const DetailText = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  word-break: break-word;
`;

const CustomersList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
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
    gap: 12px;
  }
`;

const PageControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
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
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
  }
`;

const PageInfo = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const PageSizeSelect = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 6px;
    font-size: 13px;
  }
`;
const PaginationLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
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

const ListItemName = styled.h3`
  margin: 0 0 12px 0;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
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
`;

const CustomerAddress = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }
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

const CustomersPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { canDeleteCustomers } = usePermissions();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useViewMode();
  const [filters, setFilters] = useState<AdvancedFilter>({});
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Fetch customers on component mount
  const fetchCustomers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await customersAPI.getAll({});
      if (response.success && response.data) {
        setCustomers(response.data);
      } else {
        setError(t('customers.error'));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('customers.error'));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768 && viewMode === 'list') {
        setViewMode('grid');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [viewMode, setViewMode]);

  // view mode is handled and persisted by useViewMode hook

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    setShowAddForm(false);
  };

  const handleAddCustomer = () => {
    resetForm();
    setShowAddForm(true);
  };

  // Select/Deselect individual customer
  const handleToggleSelect = (customerId: number) => {
    setSelectedCustomers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(customerId)) newSet.delete(customerId);
      else newSet.add(customerId);
      return newSet;
    });
  };

  // Select/Deselect all customers (acts on current page)
  const handleSelectAll = () => {
    const pageIds = paginatedCustomers.map(c => c.customerid);
    const allOnPageSelected = pageIds.length > 0 && pageIds.every(id => selectedCustomers.has(id));
    if (allOnPageSelected) {
      setSelectedCustomers(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.delete(id));
        return newSet;
      });
    } else {
      setSelectedCustomers(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  };

  const applyFilters = (f: AdvancedFilter) => setFilters(f);
  const clearFilters = () => setFilters({});

  const displayCustomers = React.useMemo(() => {
    return customers.filter((c) => {
      if (filters.search && filters.search.trim() !== '') {
        const s = filters.search.toLowerCase();
        if (!c.name.toLowerCase().includes(s) && !(c.address && c.address.toLowerCase().includes(s))) return false;
      }
      if (filters.email && filters.email.trim() !== '') {
        if (!c.email || !c.email.toLowerCase().includes(filters.email.toLowerCase())) return false;
      }
      if (filters.phone && filters.phone.trim() !== '') {
        if (!c.phone || !c.phone.includes(filters.phone)) return false;
      }
      if (filters.address && filters.address.trim() !== '') {
        if (!c.address || !c.address.toLowerCase().includes(filters.address.toLowerCase())) return false;
      }
      if (filters.startDate && filters.startDate !== '') {
        const s = new Date(filters.startDate);
        const created = new Date(c.created_at);
        if (created < s) return false;
      }
      if (filters.endDate && filters.endDate !== '') {
        const e = new Date(filters.endDate);
        const created = new Date(c.created_at);
        if (created > e) return false;
      }
      return true;
    });
  }, [customers, filters]);

  useEffect(() => {
    // Clear selection when the displayed items change to avoid mismatched selection
    setSelectedCustomers(new Set());
  }, [displayCustomers]);

  // Pagination state (per-page selection and client-side pagination)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPageOptions = [10, 20, 50];
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageOptions[0]);

  const totalPages = Math.max(1, Math.ceil(displayCustomers.length / itemsPerPage));

  const paginatedCustomers = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displayCustomers.slice(start, start + itemsPerPage);
  }, [displayCustomers, currentPage, itemsPerPage]);

  const startIndex = displayCustomers.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, displayCustomers.length);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  // Clear selection
  const handleClearSelection = () => setSelectedCustomers(new Set());

  // Bulk delete
  const handleBulkDelete = async () => {
    if (selectedCustomers.size === 0) return;

    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>Delete {selectedCustomers.size} customer(s) permanently?</div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>This will permanently remove the customers. Orders will show "Deleted Customer" for these customers.</div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={() => toast.dismiss(toastInstance.id)} style={{ padding: '6px 12px', border: '1px solid #d1d5db', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>{t('common.cancel')}</button>
          <button onClick={() => { toast.dismiss(toastInstance.id); performBulkDelete(); }} style={{ padding: '6px 12px', border: 'none', background: '#ef4444', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>Delete</button>
        </div>
      </div>
    ), { duration: 15000, style: { background: '#fff1f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px' } });
  };

  const performBulkDelete = async () => {
    const ids = Array.from(selectedCustomers);
    const loadingToast = toast.loading(`Deleting ${ids.length} customers...`);
    try {
      const results = await Promise.allSettled(ids.map(id => customersAPI.delete(id)));
      const successes = results.filter(r => r.status === 'fulfilled').length;
      const failures = results.length - successes;

      if (successes > 0) {
        toast.success(`${successes} customer(s) deleted successfully`, { id: loadingToast });
      }
      if (failures > 0) {
        toast.error(`${failures} customers failed to delete`, { id: loadingToast });
      }

      await fetchCustomers();
      setSelectedCustomers(new Set());
    } catch (err) {
      toast.error('Failed to delete customers', { id: loadingToast });
      console.error('Bulk delete customers error:', err);
    }
  };

const handleEditCustomer = (customer: Customer) => {
    navigate(`/customers/edit/${customer.customerid}`);
  };

  const handleDeleteCustomer = async (customerId: number) => {
    const customerToDelete = customers.find(customer => customer.customerid === customerId);
    if (!customerToDelete) return;

    // Show confirmation toast
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>
          Delete {customerToDelete.name}?
        </div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
          This will permanently remove the customer. Orders will show "Deleted Customer".
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
            {t('common.cancel')}
          </button>
          <button
            onClick={() => {
              toast.dismiss(toastInstance.id);
              performDelete(customerToDelete);
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
            Delete
          </button>
        </div>
      </div>
    ), {
      duration: 10000,
      style: {
        background: '#fff1f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        padding: '16px'
      }
    });
  };

  const performDelete = async (customer: Customer) => {
    toast.promise(
      customersAPI.delete(customer.customerid),
      {
        loading: t('customers.deleting', { name: customer.name }) || 'Deleting...',
        success: (response) => {
          if (response.success) {
            setCustomers(customers.filter(c => c.customerid !== customer.customerid));
            return t('customers.delete_success', { name: customer.name }) || 'Deleted successfully';
          } else {
            throw new Error(t('customers.delete_error') || 'Failed to delete');
          }
        },
        error: (err) => err instanceof Error ? err.message : (t('customers.delete_error') || 'Failed to delete')
      }
    );
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const customerData: CreateCustomerRequest = {
      name: formData.name,
      email: formData.email || undefined,
      phone: formData.phone,
      address: formData.address || undefined
    };

    try {
      toast.promise(
        customersAPI.create(customerData),
        {
          loading: t('customers.creating'),
          success: (response) => {
            if (response.success && response.data) {
              setCustomers([...customers, response.data]);
              resetForm();
              return t('customers.create_success', { name: response.data.name });
            } else {
              throw new Error(t('customers.create_error'));
            }
          },
          error: (err) => err instanceof Error ? err.message : t('customers.create_error')
        }
      );
    } catch (err) {
      // This catch block is now redundant since toast.promise handles errors
      // But keeping it for safety
      console.error('Unexpected error:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageContainer>
      <PageTitle>{t('customers.title')}</PageTitle>
      <PageContent>
        {isSearchExpanded ? (
          <AdvancedSearch 
            initialFilters={filters} 
            categories={[]} 
            onApply={applyFilters} 
            onClear={clearFilters} 
            isOpen={true}
            onClose={() => setIsSearchExpanded(false)}
            variant='customers'
          />
        ) : (
          <MiniSearchContainer onClick={() => setIsSearchExpanded(true)}>
            <SearchIcon />
            <MiniSearchInput
              type="text"
              placeholder={t('customers.search_placeholder', 'Search customers...')}
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
          <ViewToggle>
            <ViewToggleButton $active={viewMode === 'grid'} onClick={() => setViewMode('grid')}>
              <HiOutlineViewGrid />
              {t('customers.view_grid')}
            </ViewToggleButton>
            <ViewToggleButton $active={viewMode === 'list'} onClick={() => setViewMode('list')}>
              <HiOutlineViewList />
              {t('customers.view_list')}
            </ViewToggleButton>
          </ViewToggle>
          <AddButton onClick={handleAddCustomer}>
            <HiOutlinePlus />
            {t('customers.add_customer')}
          </AddButton>
        </ControlsSection>

        {showAddForm && (
          <FormContainer>
            <FormTitle>{t('customers.add_customer')}</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">{t('customers.name')} *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">{t('customers.phone')} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">{t('customers.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('customers.email_placeholder')}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="address">{t('customers.address')}</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder={t('customers.address_placeholder')}
                />
              </FormGroup>

              <FormActions>
                <CancelButton type="button" onClick={resetForm}>
                  <HiOutlineX />
                  {t('common.cancel')}
                </CancelButton>
                <SubmitButton type="submit">
                  <HiOutlineCheck />
                  {t('customers.add_customer')}
                </SubmitButton>
              </FormActions>
            </Form>
          </FormContainer>
        )}

        <CustomersSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <SectionTitle style={{ margin: 0 }}>
              {t('customers.customer_list', { count: displayCustomers.length })}
            </SectionTitle>
            {displayCustomers.length > 0 && (
              <CheckboxLabel>
                <Checkbox
                  type='checkbox'
                  checked={selectedCustomers.size === paginatedCustomers.length && paginatedCustomers.length > 0}
                  onChange={handleSelectAll}
                />
                {t('customers.select_all')}
              </CheckboxLabel>
            )}
          </div>

          {selectedCustomers.size > 0 && (
            <BulkActionsBar>
              <BulkActionsLeft>
                <SelectionInfo>{selectedCustomers.size} {t('customers.selected') || 'customers(s) selected'}</SelectionInfo>
                <Button onClick={handleClearSelection} style={{ padding: '6px 12px', fontSize: '13px' }}>{t('inventory.clear_selection') || 'Clear Selection'}</Button>
              </BulkActionsLeft>
              <BulkActionsRight>
                {canDeleteCustomers && (
                  <BulkButton $variant='danger' onClick={handleBulkDelete}>
                    <HiOutlineTrash /> Delete Selected
                  </BulkButton>
                )}
              </BulkActionsRight>
            </BulkActionsBar>
          )}
          {loading ? (
            <LoadingMessage>{t('customers.loading')}</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : customers.length === 0 ? (
            <EmptyMessage>{t('customers.no_customers')}</EmptyMessage>
          ) : viewMode === 'grid' ? (
            <CustomersGrid>
              {paginatedCustomers.map((customer) => (
                <CustomerCard key={customer.customerid}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <Checkbox
                      type='checkbox'
                      checked={selectedCustomers.has(customer.customerid)}
                      onChange={() => handleToggleSelect(customer.customerid)}
                      onClick={(e) => e.stopPropagation()}
                    />
                    <CustomerActions>
                      <ActionButton onClick={() => handleEditCustomer(customer)} title={t('common.edit')}>
                        <HiOutlinePencil />
                      </ActionButton>
                      {canDeleteCustomers && (
                        <ActionButton onClick={() => handleDeleteCustomer(customer.customerid)} title={t('common.delete')}>
                          <HiOutlineTrash />
                        </ActionButton>
                      )}
                    </CustomerActions>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <ListItemName>{customer.name}</ListItemName>
                  </div>

                  <CustomerDetails>
                    <CustomerDetail>
                      <DetailIcon>
                        <HiOutlinePhone />
                      </DetailIcon>
                      <DetailText>{customer.phone}</DetailText>
                    </CustomerDetail>

                    {customer.email && (
                      <CustomerDetail>
                        <DetailIcon>
                          <HiOutlineMail />
                        </DetailIcon>
                        <DetailText>{customer.email}</DetailText>
                      </CustomerDetail>
                    )}
                  </CustomerDetails>

                  {customer.address && (
                    <CustomerAddress>
                      <HiOutlineLocationMarker />
                      {customer.address}
                    </CustomerAddress>
                  )}
                </CustomerCard>
              ))}
            </CustomersGrid>
          ) : (
            <>
            <CustomersList>
              {paginatedCustomers.map((customer) => (
                <ListItemCard key={customer.customerid}>
                  <ListItemContent>
                    <Checkbox
                      type='checkbox'
                      checked={selectedCustomers.has(customer.customerid)}
                      onChange={() => handleToggleSelect(customer.customerid)}
                      onClick={(e) => e.stopPropagation()}
                      style={{ marginRight: '12px' }}
                    />
                    <ListItemDetails>
                      <ListItemInfo>
                        <ListItemName>{customer.name}</ListItemName>
                        <ListItemMeta>
                          <ListItemMetaItem>
                            <ListItemMetaLabel>{t('customers.phone_label')}</ListItemMetaLabel>
                            <ListItemMetaValue>{customer.phone}</ListItemMetaValue>
                          </ListItemMetaItem>
                          {customer.email && (
                            <ListItemMetaItem>
                              <ListItemMetaLabel>{t('customers.email_label')}</ListItemMetaLabel>
                              <ListItemMetaValue>{customer.email}</ListItemMetaValue>
                            </ListItemMetaItem>
                          )}
                        </ListItemMeta>
                        {customer.address && (
                          <ListItemDescription>
                            <HiOutlineLocationMarker />
                            {customer.address}
                          </ListItemDescription>
                        )}
                      </ListItemInfo>
                      <ListItemActions>
                        <ActionButton onClick={() => handleEditCustomer(customer)} title={t('common.edit')}>
                          <HiOutlinePencil />
                        </ActionButton>
                        {canDeleteCustomers && (
                          <ActionButton onClick={() => handleDeleteCustomer(customer.customerid)} title={t('common.delete')}>
                            <HiOutlineTrash />
                          </ActionButton>
                        )}
                      </ListItemActions>
                    </ListItemDetails>
                  </ListItemContent>
                </ListItemCard>
              ))}
            </CustomersList>
            </>

          )}
          {/* Pagination Bar */}
          <PaginationBar>
            <PaginationLeft>
              <PageSizeSelect value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
                {itemsPerPageOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </PageSizeSelect>
              <PageInfo style={{ marginLeft: 8 }}>{'Items per page'}</PageInfo>
              <PageInfo style={{ marginLeft: 12 }}>{`Showing ${startIndex}–${endIndex} of ${displayCustomers.length} customers`}</PageInfo>
            </PaginationLeft>

            <PageControls>
              <PageButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>&laquo;</PageButton>
              <PageButton onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>{'Prev'}</PageButton>
              <PageInfo>{`Page ${currentPage} of ${totalPages}`}</PageInfo>
              <PageButton onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>{'Next'}</PageButton>
              <PageButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>&raquo;</PageButton>
            </PageControls>
          </PaginationBar>
        </CustomersSection>
      </PageContent>
    </PageContainer>
  );
};

export default CustomersPage;