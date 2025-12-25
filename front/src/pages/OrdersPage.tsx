// OrdersPage with full i18n support
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useViewMode from '../hooks/useViewMode';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { ordersAPI, settingsAPI, type Order } from '../services/api';
import AdvancedSearch, { type AdvancedFilter } from '../components/AdvancedSearch';
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineClock, HiOutlineMail, HiOutlineTrash, HiOutlineViewGrid, HiOutlineViewList, HiOutlineSearch, HiOutlineChevronDown, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { usePermissions } from '../hooks/usePermissions';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

/* ---------- Styled Components ---------- */
const PageContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) { padding: 15px; }
  @media (max-width: 480px) { padding: 10px; }
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 2rem;
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.25rem; }
`;

const PageContent = styled.div`
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  box-shadow: ${props => props.theme.shadows.medium};
  @media (max-width: 768px) { padding: 20px; border-radius: 12px; }
  @media (max-width: 480px) { padding: 15px; }
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

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  /* tablet */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 14px;
    margin-bottom: 18px;
  }

  /* mobile - tighter card layout and two columns where possible */
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(110px, 1fr));
    gap: 10px;
    margin-bottom: 14px;
  }

  /* very small narrow phones fallback to single column */
  @media (max-width: 340px) {
    grid-template-columns: 1fr;
  }
`;

const ControlsSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) { justify-content: center; margin-bottom: 20px; }
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
  &:hover { background: ${props => props.$active ? props.theme.gradients.primary : props.theme.colors.surface}; }
  svg { width: 16px; height: 16px; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 13px; svg { width: 14px; height: 14px; } }
  &:first-child {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StatCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 18px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  text-align: center;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`;
const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 5px;
  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 2px;
  }
`;
const StatLabel = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const OrdersSection = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) { margin-top: 20px; }
`;
const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media (max-width: 768px) { font-size: 1.25rem; margin-bottom: 16px; }
  @media (max-width: 480px) { font-size: 1.1rem; margin-bottom: 12px; }
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
  @keyframes slideDown { from { opacity: 0; transform: translateY(-10px);} to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 768px) { flex-direction: column; align-items: stretch; gap: 12px; }
`;
const BulkActionsLeft = styled.div` display: flex; align-items: center; gap: 12px; flex-wrap: wrap; `;
const BulkActionsRight = styled.div` display: flex; gap: 8px; flex-wrap: wrap; `;
const SelectionInfo = styled.span` color: ${props => props.theme.colors.text}; font-weight: 600; font-size: 14px; `;
const BulkButton = styled(Button) <{ $variant?: 'danger' | 'primary' }>`
  display: flex; align-items: center; gap: 8px; padding: 10px 16px; font-size: 14px; font-weight: 500; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; border: none;
  ${props => props.$variant === 'danger' ? ` background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; &:hover:not(:disabled) { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); transform: translateY(-1px); box-shadow: ${props.theme.shadows.medium}; }` : ` background: ${props.theme.gradients.primary}; color: white; &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: ${props.theme.shadows.medium}; }`}
  &:disabled { opacity: 0.5; cursor: not-allowed; } svg { width: 16px; height: 16px; } @media (max-width: 768px) { flex: 1; justify-content: center; }
`;
const Checkbox = styled.input` width: 18px; height: 18px; cursor: pointer; accent-color: ${props => props.theme.colors.accent}; `;
const CheckboxLabel = styled.label` display: flex; align-items: center; gap: 8px; cursor: pointer; user-select: none; color: ${props => props.theme.colors.text}; font-size: 14px; font-weight: 500; `;

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  @media (max-width: 1200px) { grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
  @media (max-width: 992px) { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 16px; }
`;

const OrderCard = styled.div`
  background: ${props => props.theme.colors.surface}99;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover { transform: translateY(-5px) scale(1.01); box-shadow: ${props => props.theme.shadows.large}; border-color: ${props => props.theme.colors.glassBorder}99; }
`;

const OrderHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.surface}4D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`;
const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;
const OrderId = styled.div`
  font-weight: 600;
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.01em;
`;
const OrderDate = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 12px;
  font-weight: 500;
`;

const OrderStatus = styled.div<{ status: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => {
    switch (props.status) {
      case 'completed': return '#dcfce7';
      case 'pending': return '#fef3c7';
      case 'cancelled': return '#fee2e2';
      default: return props.theme.colors.glass;
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'completed': return '#166534';
      case 'pending': return '#92400e';
      case 'cancelled': return '#991b1b';
      default: return props.theme.colors.textSecondary;
    }
  }};
`;

const OrderActions = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`;
const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover { transform: scale(1.1); background: rgba(59,130,246,0.1); }
  svg { width: 14px; height: 14px; color: ${props => props.theme.colors.textSecondary}; }
`;
const DeleteButton = styled(ActionButton)`
  &:hover { background: rgba(239,68,68,0.1); svg { color: #ef4444; } }
`;

const OrderContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  background: ${props => props.theme.colors.surface}4D;
  padding: 12px;
  border-radius: 10px;
`;
const CustomerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.accent};
  color: white;
  font-weight: 600;
  font-size: 13px;
  flex-shrink: 0;
`;
const CustomerDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  min-width: 0;
  padding: 4px 0;
  overflow: hidden;
`;
const DetailIcon = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.accent};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailText = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 13px;
  font-weight: 500;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  background: ${props => props.theme.colors.surface}4D;
  padding: 12px;
  border-radius: 10px;
`;
const OrderTotal = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  text-align: right;
  margin-bottom: 8px;
`;
const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  width: 100%;
  max-height: 120px;
  overflow-y: auto;
  padding-right: 6px;
`;
const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 13px;
  gap: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
  &:last-child { border-bottom: none; }
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
const ItemName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`;
const ItemQuantity = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  margin: 0 8px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 13px;
`;
const ItemPrice = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.colors.accent};
  white-space: nowrap;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
`;
const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  background: rgba(239,68,68,0.1);
  border-radius: 8px;
  border: 1px solid rgba(239,68,68,0.2);
`;
const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ListItemCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all 0.3s ease;
  @media (max-width: 768px) { padding: 15px; border-radius: 10px; }
  @media (max-width: 480px) { padding: 12px; }
  &:hover { transform: translateY(-1px); box-shadow: ${props => props.theme.shadows.medium}; }
  @media (max-width: 768px) { &:hover { transform: none; } }
`;
const ListItemContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 15px; }
`;
const ListItemDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 10px; }
`;
const ListItemInfo = styled.div`
  flex: 1;
`;
const ListItemName = styled.h4`
  margin: 0 0 8px 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  overflow-wrap: anywhere;
  font-weight: 600;
  @media (max-width: 768px) { font-size: 16px; }
  @media (max-width: 480px) { font-size: 15px; }
`;
const ListItemMeta = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 480px) { gap: 15px; }
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
const ListItemActions = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  @media (max-width: 768px) { align-self: flex-end; }
`;

/* ---------- Component ---------- */
const OrdersPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { canDeleteOrders } = usePermissions();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState<AdvancedFilter>({});
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [selectedOrders, setSelectedOrders] = useState<Set<number>>(new Set());
  const [viewMode, setViewMode] = useViewMode();
  const [branches, setBranches] = useState<{ branchid: number; name: string }[]>([]);

  // fetch orders
  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ordersAPI.getAll();
      if (response.success && response.data) {
        setOrders(response.data);
      } else {
        setError(t('orders.error'));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('orders.error'));
    } finally {
      setLoading(false);
    }
  }, [t]);

  // fetch branches
  const fetchBranches = useCallback(async () => {
    try {
      const response = await settingsAPI.getBranches();
      if (response.success && response.data) {
        setBranches(response.data.map(branch => ({ branchid: branch.branchid, name: branch.name })));
      }
    } catch (err) {
      console.error('Failed to fetch branches:', err);
    }
  }, []);

  useEffect(() => { 
    fetchOrders(); 
    fetchBranches();
  }, [fetchOrders, fetchBranches]);
  // view mode handled and persisted by useViewMode hook

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768 && viewMode === 'grid') {
        setViewMode('list');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [viewMode, setViewMode]);

  // moved fetchOrders above as a stable callback

  const handleViewOrder = (order: Order) => navigate(`/orders/edit/${order.orderid}`);

  // Select/Deselect individual order
  const handleToggleSelect = (orderId: number) => {
    setSelectedOrders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(orderId)) newSet.delete(orderId);
      else newSet.add(orderId);
      return newSet;
    });
  };

  // Select/Deselect all orders (per current page)
  const handleSelectAll = () => {
    const pageIds = paginatedOrders.map(o => o.orderid);
    const allOnPageSelected = pageIds.length > 0 && pageIds.every(id => selectedOrders.has(id));
    if (allOnPageSelected) {
      setSelectedOrders(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.delete(id));
        return newSet;
      });
    } else {
      setSelectedOrders(prev => {
        const newSet = new Set(prev);
        pageIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  };

  const applyFilters = (f: AdvancedFilter) => setFilters(f);
  const clearFilters = () => setFilters({});

  const displayOrders = React.useMemo(() => {
    return orders.filter(order => {
      if (filters.orderId && filters.orderId.trim() !== '') {
        const v = filters.orderId.trim();
        // match id or customer name
        if (!(order.orderid.toString().includes(v) || (order.customer_name && order.customer_name.toLowerCase().includes(v.toLowerCase())))) return false;
      }
      if (filters.status) {
        if (order.status !== filters.status) return false;
      }
      if (filters.minTotal && filters.minTotal !== '') {
        if (Number(order.total_amount) < Number(filters.minTotal)) return false;
      }
      if (filters.maxTotal && filters.maxTotal !== '') {
        if (Number(order.total_amount) > Number(filters.maxTotal)) return false;
      }
      if (filters.startDate && filters.startDate !== '') {
        const s = new Date(filters.startDate);
        if (new Date(order.created_at) < s) return false;
      }
      if (filters.endDate && filters.endDate !== '') {
        const e = new Date(filters.endDate);
        if (new Date(order.created_at) > e) return false;
      }
      if (filters.branchId && filters.branchId !== '') {
        if (order.branchid !== Number(filters.branchId)) return false;
      }
      return true;
    });
  }, [orders, filters]);

  useEffect(() => {
    setSelectedOrders(new Set());
    setCurrentPage(1);
  }, [displayOrders]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPageOptions = [10, 20, 50];
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageOptions[0]);

  const totalPages = Math.max(1, Math.ceil(displayOrders.length / itemsPerPage));

  const paginatedOrders = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return displayOrders.slice(start, start + itemsPerPage);
  }, [displayOrders, currentPage, itemsPerPage]);

  const startIndex = displayOrders.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, displayOrders.length);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  // Clear selection
  const handleClearSelection = () => setSelectedOrders(new Set());

  const handleBulkDelete = async () => {
    if (selectedOrders.size === 0) return;
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>Delete {selectedOrders.size} order(s)?</div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>This action cannot be undone.</div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={() => toast.dismiss(toastInstance.id)} style={{ padding: '6px 12px', border: '1px solid #d1d5db', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>{t('common.cancel')}</button>
          <button onClick={() => { toast.dismiss(toastInstance.id); performBulkDelete(); }} style={{ padding: '6px 12px', border: 'none', background: '#ef4444', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>{t('common.delete')}</button>
        </div>
      </div>
    ), { duration: 10000, style: { background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px' } });
  };

  const performBulkDelete = async () => {
    const ids = Array.from(selectedOrders);
    const loadingToast = toast.loading(`Deleting ${ids.length} orders...`);
    try {
      await Promise.all(ids.map(id => ordersAPI.delete(id)));
      toast.success(`Successfully deleted ${ids.length} orders`, { id: loadingToast });
      await fetchOrders();
      setSelectedOrders(new Set());
    } catch (err) {
      toast.error('Failed to delete some orders', { id: loadingToast });
      console.error('Bulk delete orders error:', err);
    }
  };

  const handleDeleteOrder = async (order: Order) => {
    toast.custom(toastInstance => (
      <div style={{ background: '#1f2937', color: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
        <div style={{ fontWeight: '600', fontSize: '16px' }}>{t('orders.delete_confirm_title', { id: order.orderid })}</div>
        <div style={{ fontSize: '14px', color: '#9ca3af' }}>{t('orders.delete_confirm_message')}</div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={() => toast.dismiss(toastInstance.id)} style={{ padding: '6px 12px', background: '#374151', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>{t('common.cancel')}</button>
          <button onClick={async () => {
              toast.dismiss(toastInstance.id);
              const loadingToast = toast.loading(t('orders.deleting'), { style: { background: '#3b82f6', color: 'white' } });
            try {
              const response = await ordersAPI.delete(order.orderid);
              if (response.success) {
                setOrders(orders.filter(o => o.orderid !== order.orderid));
                window.dispatchEvent(new CustomEvent('inventory-updated'));
                toast.dismiss(loadingToast);
                toast.success(t('orders.delete_success', { id: order.orderid }), { duration: 4000, style: { background: '#10b981', color: 'white', border: '1px solid #059669' } });
              } else {
                toast.dismiss(loadingToast);
                toast.error(t('orders.delete_error'), { duration: 4000, style: { background: '#ef4444', color: 'white', border: '1px solid #dc2626' } });
              }
            } catch {
              toast.dismiss(loadingToast);
              toast.error(t('orders.delete_error'), { duration: 4000, style: { background: '#ef4444', color: 'white', border: '1px solid #dc2626' } });
            }
          }} style={{ padding: '6px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>{t('common.delete')}</button>
        </div>
      </div>
    ), { duration: Infinity, position: 'top-center' });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <HiOutlineCheckCircle />;
      case 'pending': return <HiOutlineClock />;
      case 'cancelled': return <HiOutlineXCircle />;
      default: return <HiOutlineClock />;
    }
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  const getOrderStats = () => {
    const total = orders.length;
    const completed = orders.filter(o => o.status === 'completed').length;
    const pending = orders.filter(o => o.status === 'pending').length;
    const totalRevenue = orders.filter(o => o.status === 'completed').reduce((sum, o) => sum + Number(o.total_amount), 0);
    return { total, completed, pending, totalRevenue };
  };

  const stats = getOrderStats();

  return (
    <PageContainer>
      <PageTitle>{t('orders.title')}</PageTitle>
      <PageContent>
        <StatsSection>
          <StatCard><StatValue>{stats.total}</StatValue><StatLabel>{t('orders.total_orders')}</StatLabel></StatCard>
          <StatCard><StatValue>{stats.completed}</StatValue><StatLabel>{t('orders.completed')}</StatLabel></StatCard>
          <StatCard><StatValue>{stats.pending}</StatValue><StatLabel>{t('orders.pending')}</StatLabel></StatCard>
          <StatCard><StatValue>BHD {stats.totalRevenue.toFixed(3)}</StatValue><StatLabel>{t('orders.total_revenue')}</StatLabel></StatCard>
        </StatsSection>
        {isSearchExpanded ? (
          <AdvancedSearch 
            initialFilters={filters} 
            categories={[]} 
            branches={branches}
            onApply={applyFilters} 
            onClear={clearFilters} 
            isOpen={true}
            onClose={() => setIsSearchExpanded(false)}
            variant='orders'
          />
        ) : (
          <MiniSearchContainer onClick={() => setIsSearchExpanded(true)}>
            <SearchIcon />
            <MiniSearchInput
              type="text"
              placeholder={t('orders.search_placeholder', 'Search orders...')}
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
            <ViewToggleButton $active={viewMode === 'grid'} onClick={() => setViewMode('grid')}><HiOutlineViewGrid />{t('orders.view_grid')}</ViewToggleButton>
            <ViewToggleButton $active={viewMode === 'list'} onClick={() => setViewMode('list')}><HiOutlineViewList />{t('orders.view_list')}</ViewToggleButton>
          </ViewToggle>
        </ControlsSection>
        <OrdersSection>
          <SectionTitle>
            {t('orders.recent_orders', { count: displayOrders.length })}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              {displayOrders.length > 0 && (
                <CheckboxLabel>
                  <Checkbox type='checkbox' checked={paginatedOrders.length > 0 && paginatedOrders.every(o => selectedOrders.has(o.orderid))} onChange={handleSelectAll} />
                  {t('orders.select_all')}
                </CheckboxLabel>
              )}
            </div>
          </SectionTitle>
          {selectedOrders.size > 0 && (
            <BulkActionsBar>
              <BulkActionsLeft>
                <SelectionInfo>{selectedOrders.size} {t('orders.selected') || 'order(s) selected'}</SelectionInfo>
                <Button onClick={handleClearSelection} style={{ padding: '6px 12px', fontSize: '13px' }}>{t('inventory.clear_selection') || 'Clear Selection'}</Button>
              </BulkActionsLeft>
              <BulkActionsRight>
                {canDeleteOrders && (
                  <BulkButton $variant='danger' onClick={handleBulkDelete}><HiOutlineTrash /> {t('orders.delete_selected') || 'Delete Selected'}</BulkButton>
                )}
              </BulkActionsRight>
            </BulkActionsBar>
          )}
          {loading ? (
            <LoadingMessage>{t('orders.loading')}</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : orders.length === 0 ? (
            <EmptyMessage>{t('orders.no_orders')}</EmptyMessage>
          ) : viewMode === 'grid' ? (
            <>
            {selectedOrders.size > 0 && (
              <BulkActionsBar>
                <BulkActionsLeft>
                  <SelectionInfo>{selectedOrders.size} {t('orders.selected') || 'order(s) selected'}</SelectionInfo>
                  <Button onClick={handleClearSelection} style={{ padding: '6px 12px', fontSize: '13px' }}>{t('inventory.clear_selection') || 'Clear Selection'}</Button>
                </BulkActionsLeft>
                <BulkActionsRight>
                  {canDeleteOrders && (
                    <BulkButton $variant='danger' onClick={handleBulkDelete}><HiOutlineTrash /> {t('orders.delete_selected') || 'Delete Selected'}</BulkButton>
                  )}
                </BulkActionsRight>
              </BulkActionsBar>
            )}
            <OrdersGrid>
              {paginatedOrders.map(order => (
                <OrderCard key={order.orderid} onClick={() => handleViewOrder(order)} style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <Checkbox type='checkbox' checked={selectedOrders.has(order.orderid)} onChange={() => handleToggleSelect(order.orderid)} onClick={(e) => e.stopPropagation()} />
                    <OrderHeader style={{ flex: 1 }}>
                    <OrderInfo style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                        <OrderId>{t('orders.order_number', { id: order.orderid })}</OrderId>
                      </div>

                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                        <OrderDate>{formatDate(order.created_at)}</OrderDate>
                        <OrderStatus status={order.status}>{getStatusIcon(order.status)}{order.status}</OrderStatus>
                      </div>
                    </OrderInfo>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <OrderActions>
                        {canDeleteOrders && (<DeleteButton onClick={(e) => { e.stopPropagation(); handleDeleteOrder(order); }} title={t('orders.delete_order')}><HiOutlineTrash /></DeleteButton>)}
                      </OrderActions>
                    </div>
                    </OrderHeader>
                  </div>
                  <OrderContent>
                    <CustomerInfo>
                      {(() => {
                        const name = order.customer_name === 'Deleted customer' ? t('orders.deleted_customer') : order.customer_name;
                        if (!name) {
                          return (
                            <CustomerHeader>
                              <Avatar>WI</Avatar>
                              <div><div style={{ fontWeight: 600 }}>{t('orders.walk_in_customer')}</div></div>
                            </CustomerHeader>
                          );
                        }

                        return (
                          <>
                            <CustomerHeader>
                              <Avatar>{(name || 'W').split(' ').map((n: string) => n[0]).slice(0, 2).join('').toUpperCase()}</Avatar>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontWeight: 600, color: 'inherit', maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
                                {order.customer_phone && (
                                  <div style={{ fontSize: 12, color: '#6b7280', marginTop: 2, maxWidth: '220px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{order.customer_phone}</div>
                                )}
                              </div>
                            </CustomerHeader>

                            {order.customer_email && (
                              <CustomerDetail>
                                <DetailIcon><HiOutlineMail /></DetailIcon>
                                <DetailText>{order.customer_email}</DetailText>
                              </CustomerDetail>
                            )}

                            {order.branch_name && (
                              <CustomerDetail>
                                <DetailIcon><HiOutlineOfficeBuilding /></DetailIcon>
                                <DetailText>{order.branch_name}</DetailText>
                              </CustomerDetail>
                            )}
                          </>
                        );
                      })()}
                    </CustomerInfo>

                    <OrderSummary>
                      <OrderTotal>BHD {Number(order.total_amount).toFixed(3)}</OrderTotal>
                      <OrderItems>
                        {order.items.slice(0, 3).map((item, idx) => (
                          <OrderItem key={idx}>
                            <ItemName>{item.name ?? `#${item.itemid}`}</ItemName>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <ItemQuantity>×{item.quantity}</ItemQuantity>
                              <ItemPrice>BHD {(Number(item.price) * item.quantity).toFixed(3)}</ItemPrice>
                                </div>
                          </OrderItem>
                        ))}
                        {order.items.length > 3 && (
                          <div style={{ textAlign: 'center', padding: '5px', color: '#64748b', fontSize: '12px' }}>{t('orders.more_items', { count: order.items.length - 3 })}</div>
                        )}
                      </OrderItems>
                    </OrderSummary>
                  </OrderContent>
                </OrderCard>
              ))}
            </OrdersGrid>
            </>
          ) : (
            <>
            <OrdersList>
              {paginatedOrders.map(order => (
                <ListItemCard key={order.orderid} onClick={() => handleViewOrder(order)} style={{ cursor: 'pointer' }}>
                  <ListItemContent>
                    <Checkbox type='checkbox' checked={selectedOrders.has(order.orderid)} onChange={() => handleToggleSelect(order.orderid)} onClick={(e) => e.stopPropagation()} style={{ marginRight: '12px' }} />
                    <ListItemDetails>
                      <ListItemInfo>
                        <ListItemName>{t('orders.order_number', { id: order.orderid })}</ListItemName>
                        <ListItemMeta>
                          <ListItemMetaItem><ListItemMetaLabel>{t('orders.date_label')}</ListItemMetaLabel><ListItemMetaValue>{formatDate(order.created_at)}</ListItemMetaValue></ListItemMetaItem>
                          <ListItemMetaItem><ListItemMetaLabel>{t('orders.status_label')}</ListItemMetaLabel><ListItemMetaValue><OrderStatus status={order.status}>{getStatusIcon(order.status)}{order.status}</OrderStatus></ListItemMetaValue></ListItemMetaItem>
                          <ListItemMetaItem><ListItemMetaLabel>{t('orders.total_label')}</ListItemMetaLabel><ListItemMetaValue>BHD {Number(order.total_amount).toFixed(3)}</ListItemMetaValue></ListItemMetaItem>
                          <ListItemMetaItem><ListItemMetaLabel>{t('orders.customer_label')}</ListItemMetaLabel><ListItemMetaValue>{order.customer_name === 'Deleted customer' ? t('orders.deleted_customer') : (order.customer_name || t('orders.walk_in_customer'))}</ListItemMetaValue></ListItemMetaItem>
                        </ListItemMeta>
                      </ListItemInfo>
                      <ListItemActions>
                        {canDeleteOrders && (<DeleteButton onClick={(e) => { e.stopPropagation(); handleDeleteOrder(order); }} title={t('orders.delete_order')}><HiOutlineTrash /></DeleteButton>)}
                      </ListItemActions>
                    </ListItemDetails>
                  </ListItemContent>
                </ListItemCard>
              ))}
            </OrdersList>
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
              <PageInfo style={{ marginLeft: 12 }}>{`Showing ${startIndex}–${endIndex} of ${displayOrders.length} orders`}</PageInfo>
            </PaginationLeft>

            <PageControls>
              <PageButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>&laquo;</PageButton>
              <PageButton onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>{'Prev'}</PageButton>
              <PageInfo>{`Page ${currentPage} of ${totalPages}`}</PageInfo>
              <PageButton onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>{'Next'}</PageButton>
              <PageButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>&raquo;</PageButton>
            </PageControls>
          </PaginationBar>
        </OrdersSection>
      </PageContent>
    </PageContainer>
  );
};

export default OrdersPage;
