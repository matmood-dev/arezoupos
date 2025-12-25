import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import { ordersAPI, customersAPI, settingsAPI } from '../services/api';
import { Button } from '../components/Button';
import { HiOutlineTrash, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import type { Customer, CreateCustomerRequest, Branch } from '../services/api';
import { useTranslation } from 'react-i18next';

const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    padding: 16px;
    min-height: auto;
  }
`;

const CheckoutTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 18px;
  }
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const OrderSection = styled.div`
  background: ${props => props.theme.colors.glass};
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.colors.glassBorder};
  padding-bottom: 10px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 0;
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
  background: ${props => props.theme.colors.surface};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const ItemName = styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  margin-bottom: 4px;
`;

const ItemPrice = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    margin-top: 8px;
  }
`;

const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};

  &:hover {
    background: ${props => props.theme.gradients.primary};
    color: white;
    border-color: ${props => props.theme.colors.accent};
    transform: scale(1.1);
  }
`;

const QuantityDisplay = styled.span`
  min-width: 30px;
  text-align: center;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const RemoveButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #ef4444;

  &:hover {
    background: #ef4444;
    color: white;
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const OrderTotal = styled.div`
  margin-top: 25px;
  padding: 20px;
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  backdrop-filter: blur(10px);

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
`;

const FinalTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  margin-top: 8px;
  border-top: 2px solid ${props => props.theme.colors.glassBorder};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

const CustomerSection = styled.div`
  background: ${props => props.theme.colors.glass};
  border-radius: 16px;
  padding: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CustomerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  padding: 12px 16px;
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  font-size: 16px;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
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
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
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
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const BackButton = styled(Button)`
  flex: 1;
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.colors.glass};
  border: 2px solid ${props => props.theme.colors.glassBorder};
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: #ef4444;
    color: #ef4444;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`;

const SubmitButton = styled(Button)`
  flex: 1;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
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

  &:disabled {
    background: ${props => props.theme.colors.glass};
    color: ${props => props.theme.colors.textSecondary};
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px;
  }
`;

const CheckoutPage: React.FC = () => {
  const { t } = useTranslation();
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [orderData, setOrderData] = useState({
    customerId: '',
    branchId: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerAddress: '',
    notes: '',
    paymentMethod: 'cash'
  });
  const [loading, setLoading] = useState(false);

  // Calculate VAT and totals
  const subtotal = total;
  const vatAmount = (subtotal * taxRate) / 100;
  const totalWithVat = subtotal + vatAmount;

  // Fetch customers for dropdown
  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await customersAPI.getAll();
        if (response.success && response.data) {
          setCustomers(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  // Fetch branches for dropdown
  React.useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await settingsAPI.getBranches();
        if (response.success && response.data) {
          setBranches(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch branches:', error);
      }
    };
    fetchBranches();
  }, []);

  // Fetch settings to get tax rate
  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await settingsAPI.getSettings();
        if (response.success && response.data) {
          setTaxRate(Number(response.data.tax_rate) || 0);
        }
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchSettings();
  }, []);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      // Find the item in cart to check stock limit
      const cartItem = cart.find(item => item.product.itemid === itemId);
      if (cartItem && newQuantity > cartItem.product.stock_quantity) {
        toast.error(t('pos.stock_limit_error', { count: cartItem.product.stock_quantity }));
        return;
      }
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCustomerSelect = (customerId: string) => {
    const customer = customers.find(c => c.customerid.toString() === customerId);
    if (customer) {
      setOrderData({
        ...orderData,
        customerId,
        customerName: customer.name,
        customerPhone: customer.phone,
        customerEmail: customer.email || '',
        customerAddress: customer.address || ''
      });
    } else {
      setOrderData({
        ...orderData,
        customerId: '',
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        customerAddress: ''
      });
    }
  };

  const handleSubmitOrder = async () => {
    if (cart.length === 0) return;

    // Validate walk-in customer data
    if (!orderData.customerId) {
      if (!orderData.customerName.trim()) {
        toast.error(t('checkout.error_name_required'));
        return;
      }
      if (!orderData.customerPhone.trim()) {
        toast.error(t('checkout.error_phone_required'));
        return;
      }
    }

    // Require branch selection
    if (!orderData.branchId) {
      toast.error(t('checkout.error_branch_required') || 'Please select a branch');
      return;
    }

    setLoading(true);
    try {
      let customerId = orderData.customerId ? parseInt(orderData.customerId) : undefined;

      // If it's a walk-in customer with data, save them first
      if (!customerId && orderData.customerName && orderData.customerPhone) {
        const customerPayload: CreateCustomerRequest = {
          name: orderData.customerName.trim(),
          phone: orderData.customerPhone.trim(),
          email: orderData.customerEmail.trim() || undefined,
          address: orderData.customerAddress.trim() || undefined
        };

        const customerResponse = await customersAPI.create(customerPayload);
        if (customerResponse.success && customerResponse.data) {
          customerId = customerResponse.data.customerid;
          toast.success(t('checkout.customer_saved', { name: orderData.customerName }));
        } else {
          throw new Error(t('checkout.error_save_customer'));
        }
      }

      // Convert cart items to order format
      const orderItems = cart.map(item => ({
        itemid: item.product.itemid,
        quantity: item.quantity,
        note: item.note?.trim() || undefined,
        price: typeof item.overridePrice === 'number' ? Number(item.overridePrice) : undefined
      }));

      const orderPayload = {
        customerid: customerId,
        branchid: orderData.branchId ? parseInt(orderData.branchId) : undefined,
        items: orderItems,
        notes: orderData.notes?.trim() || undefined,
        paymentMethod: orderData.paymentMethod || undefined,
        total_amount: totalWithVat
      };

      const response = await ordersAPI.create(orderPayload);

      if (response.success) {
        toast.success(t('checkout.order_success', { id: response.data?.orderid }));
        clearCart();
        // Notify inventory listeners that stock changed (reserved)
        window.dispatchEvent(new CustomEvent('inventory-updated'));
        // Receipt opening suppressed (do not auto-open a new tab)
        navigate('/pos');
      } else {
        toast.error(t('checkout.error_create_order'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('checkout.error_create_order'));
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/pos');
  };

  if (cart.length === 0) {
    return (
      <CheckoutContainer>
        <CheckoutTitle>{t('checkout.title')}</CheckoutTitle>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '20px' }}>
            {t('pos.empty_cart')}
          </p>
          <BackButton onClick={handleBack}>
            {t('checkout.back_to_pos')}
          </BackButton>
        </div>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutTitle>{t('checkout.title')}</CheckoutTitle>

      <CheckoutGrid>
        <OrderSection>
          <SectionTitle>{t('checkout.order_items')}</SectionTitle>

          {cart.map((item) => (
            <CartItem key={item.product.itemid}>
              <ItemInfo>
                {item.product.image && (
                  <ItemImage src={item.product.image} alt={item.product.name} />
                )}
                <div>
                  <ItemName>{item.product.name}</ItemName>
                  <ItemPrice>BHD {Number(item.product.price).toFixed(3)} {t('checkout.each')}</ItemPrice>
                </div>
              </ItemInfo>
              <QuantityControls>
                <QuantityButton
                  onClick={() => handleQuantityChange(item.product.itemid, item.quantity - 1)}
                >
                  <HiOutlineMinus />
                </QuantityButton>
                <QuantityDisplay>{item.quantity}</QuantityDisplay>
                <QuantityButton
                  onClick={() => handleQuantityChange(item.product.itemid, item.quantity + 1)}
                >
                  <HiOutlinePlus />
                </QuantityButton>
                <RemoveButton
                  onClick={() => removeFromCart(item.product.itemid)}
                  title={t('checkout.remove_item')}
                >
                  <HiOutlineTrash />
                </RemoveButton>
              </QuantityControls>
            </CartItem>
          ))}

          <OrderTotal>
            <TotalRow>
              <span>{t('checkout.subtotal')}</span>
              <span>BHD {subtotal.toFixed(3)}</span>
            </TotalRow>
            <TotalRow>
              <span>{t('checkout.vat')} ({taxRate}%)</span>
              <span>BHD {vatAmount.toFixed(3)}</span>
            </TotalRow>
            <FinalTotal>
              <span>{t('checkout.total')}</span>
              <span>BHD {totalWithVat.toFixed(3)}</span>
            </FinalTotal>
          </OrderTotal>
        </OrderSection>

        <CustomerSection>
          <SectionTitle>{t('checkout.order_details')}</SectionTitle>

          <CustomerForm>
            <FormGroup>
              <Label htmlFor="customer">{t('checkout.customer_optional')}</Label>
              <Select
                id="customer"
                value={orderData.customerId}
                onChange={(e) => handleCustomerSelect(e.target.value)}
              >
                <option value="">{t('checkout.walk_in_customer_hint')}</option>
                {customers.map((customer) => (
                  <option key={customer.customerid} value={customer.customerid}>
                    {customer.name} - {customer.phone}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="branch">{t('checkout.branch')} <span style={{ color: '#ef4444' }}>*</span></Label>
              <Select
                id="branch"
                value={orderData.branchId}
                onChange={(e) => setOrderData({ ...orderData, branchId: e.target.value })}
                required
              >
                <option value="">{t('checkout.select_branch')}</option>
                {branches.filter(branch => branch.active).map((branch) => (
                  <option key={branch.branchid} value={branch.branchid}>
                    {branch.name} - {branch.address}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="customerName">
                {t('checkout.customer_name')} {!orderData.customerId && <span style={{ color: '#ef4444' }}>*</span>}
              </Label>
              <Input
                id="customerName"
                type="text"
                placeholder={t('checkout.customer_name_placeholder')}
                value={orderData.customerName}
                onChange={(e) => setOrderData({ ...orderData, customerName: e.target.value })}
                required={!orderData.customerId}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="customerPhone">
                {t('checkout.customer_phone')} {!orderData.customerId && <span style={{ color: '#ef4444' }}>*</span>}
              </Label>
              <Input
                id="customerPhone"
                type="tel"
                placeholder={t('checkout.phone_number_placeholder')}
                value={orderData.customerPhone}
                onChange={(e) => setOrderData({ ...orderData, customerPhone: e.target.value })}
                required={!orderData.customerId}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="customerEmail">{t('checkout.email_optional')}</Label>
              <Input
                id="customerEmail"
                type="email"
                placeholder={t('checkout.email_placeholder')}
                value={orderData.customerEmail}
                onChange={(e) => setOrderData({ ...orderData, customerEmail: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="customerAddress">{t('checkout.address_optional')}</Label>
              <Input
                id="customerAddress"
                type="text"
                placeholder={t('checkout.address_placeholder')}
                value={orderData.customerAddress}
                onChange={(e) => setOrderData({ ...orderData, customerAddress: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="paymentMethod">{t('checkout.payment_method')}</Label>
              <Select
                id="paymentMethod"
                value={orderData.paymentMethod}
                onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}
              >
                <option value="cash">{t('checkout.cash')}</option>
                <option value="card">{t('checkout.card')}</option>
                <option value="bank_transfer">{t('checkout.bank_transfer')}</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="notes">{t('checkout.notes_optional')}</Label>
              <Textarea
                id="notes"
                placeholder={t('checkout.notes_placeholder')}
                value={orderData.notes}
                onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
                rows={3}
              />
            </FormGroup>
          </CustomerForm>
        </CustomerSection>
      </CheckoutGrid>

      <ActionButtons>
        <BackButton onClick={handleBack}>
          ← {t('checkout.back_to_pos')}
        </BackButton>
        <SubmitButton onClick={handleSubmitOrder} disabled={loading || cart.length === 0 || !orderData.branchId}>
          {loading ? t('checkout.processing') : t('checkout.complete_order')}
        </SubmitButton>
      </ActionButtons>
    </CheckoutContainer>
  );
};

export default CheckoutPage;