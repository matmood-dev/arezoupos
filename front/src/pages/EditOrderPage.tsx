import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ordersAPI, type Order } from '../services/api';
import { HiOutlineArrowLeft, HiOutlineUser, HiOutlinePhone, HiOutlineMail, HiOutlinePrinter, HiOutlineOfficeBuilding, HiOutlineDocumentText, HiOutlineChatAlt, HiOutlineTruck, HiOutlineLocationMarker } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

/* ---------- Styled Components ---------- */
const PageContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) { padding: 15px; }
  @media (max-width: 480px) { padding: 10px; }
`;

const PageHeader = styled.div`
  margin-bottom: 30px;
  @media (max-width: 768px) { margin-bottom: 20px; }
  @media (max-width: 480px) { margin-bottom: 16px;}
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: ${props => props.theme.colors.glass};
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 16px;
  &:hover { background: ${props => props.theme.colors.surface}; transform: translateX(-2px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 13px; svg { width: 14px; height: 14px; } }
`;

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  margin: 0;
  font-size: 2rem;
  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.25rem; }
`;

const ContentContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
    margin: 0 10px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
    margin: 0 5px;
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    gap: 16px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const OrderId = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  @media (max-width: 480px) { font-size: 20px; }
`;

const OrderDate = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
`;

const StatusSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const StatusLabel = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
`;

const StatusSelect = styled.select<{ status: string }>`
  padding: 10px 16px;
  border: 2px solid ${props => {
    switch (props.status) {
      case 'completed': return '#16a34a';
      case 'pending': return '#d97706';
      case 'cancelled': return '#dc2626';
      default: return props.theme.colors.glassBorder;
    }
  }};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  &:focus { outline: none; box-shadow: ${props => props.theme.shadows.glow}; }
  @media (max-width: 480px) { padding: 8px 12px; font-size: 14px; }
`;

const PrintButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  /* Prevent button text from breaking into multiple lines */
  > button { white-space: nowrap; }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    /* Use a 2-column grid on small screens so there are two buttons per row */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    > button {
      width: 100%;
      font-size: 13px;
      padding: 8px 10px;
      min-width: 0;
      justify-content: center;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 30px;
  @media (max-width: 768px) { margin-bottom: 20px; }
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 480px) { font-size: 16px; margin-bottom: 16px; }
`;

const CustomerInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 16px; }
`;

const CustomerDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  @media (max-width: 480px) { padding: 12px; gap: 10px; }
`;

const DetailIcon = styled.div`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: 480px) { width: 18px; height: 18px; }
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const DetailText = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 480px) { font-size: 14px; }
`;

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: ${props => props.theme.shadows.medium}; }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  @media (max-width: 480px) {
    padding: 12px;
    gap: 10px;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 4px;
  @media (max-width: 480px) { font-size: 14px; }
`;

const ItemCategory = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  @media (max-width: 480px) { font-size: 13px; }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  text-align: right;
  @media (max-width: 768px) {
    align-self: flex-end;
    text-align: right;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    align-self: stretch;
    text-align: right;
  }
`;

const ItemQuantity = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  @media (max-width: 480px) { font-size: 14px; }
`;

const OrderTotal = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: ${props => props.theme.gradients.primary};
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  @media (max-width: 480px) { padding: 16px; margin-top: 16px; }
`;

const TotalLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.85)'};
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TotalAmount = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: white;
  @media (max-width: 480px) { font-size: 24px; }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  background: rgba(239,68,68,0.1);
  border-radius: 8px;
  border: 1px solid rgba(239,68,68,0.2);
`;

const PrintReceiptButton = styled.button`
  padding: 10px 14px;
  min-height: 44px;
  border-radius: 12px;
  border: none;
  background: ${props => props.theme.gradients.primary};
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: ${props => props.theme.shadows.small};

  svg { width: 16px; height: 16px; color: white; flex-shrink: 0; }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
    opacity: 0.98;
  }

  &:active { transform: translateY(0); }

  &:focus-visible { outline: 2px solid ${props => props.theme.colors.accent}; outline-offset: 2px; }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 13px;
    min-height: 42px;
    border-radius: 10px;
  }
`;

const NotesSection = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  white-space: pre-wrap;
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const PaymentMethodSection = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 14px;
  }
`;

/* ---------- Component ---------- */
const EditOrderPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch order on mount
  const fetchOrder = useCallback(async () => {
    try {
      setLoading(true);
      const response = await ordersAPI.getById(parseInt(id!));
      if (response.success && response.data) {
        setOrder(response.data);
      } else {
        setError(t('editOrder.not_found'));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('editOrder.load_error'));
    } finally {
      setLoading(false);
    }
  }, [id, t]);

  useEffect(() => { if (id) fetchOrder(); }, [id, fetchOrder]);

  const handleStatusChange = async (newStatus: string) => {
    if (!order) return;
    try {
      const response = await ordersAPI.update(order.orderid, { status: newStatus as 'pending' | 'completed' | 'cancelled' });
      if (response.success && response.data) {
        setOrder(response.data);
        toast.success(t('editOrder.status_updated', { status: newStatus }));
        window.dispatchEvent(new CustomEvent('inventory-updated'));
      } else {
        toast.error(t('editOrder.failed_to_update_status'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('editOrder.failed_to_update_status'));
    }
  };

  const handleGoBack = () => navigate('/orders');

  const handlePrintReceipt = () => {
    if (!order) return;
    navigate(`/orders/receipt/${order.orderid}`);
  };

  const handlePrintInvoice = () => {
    if (!order) return;
    navigate(`/orders/invoice/${order.orderid}`);
  };

  const handlePrintQuotation = () => {
    if (!order) return;
    navigate(`/orders/quotation/${order.orderid}`);
  };

  const handlePrintDelivery = () => {
    if (!order) return;
    navigate(`/orders/delivery/${order.orderid}`);
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>{t('editOrder.loading')}</LoadingContainer>
      </PageContainer>
    );
  }

  if (error || !order) {
    return (
      <PageContainer>
        <PageHeader>
          <BackButton onClick={handleGoBack}>
            <HiOutlineArrowLeft />
            {t('editOrder.back_to_orders')}
          </BackButton>
        </PageHeader>
        <ErrorContainer>{error || t('editOrder.not_found')}</ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton onClick={handleGoBack}>
          <HiOutlineArrowLeft />
          {t('editOrder.back_to_orders')}
        </BackButton>
        <PageTitle>{t('editOrder.title')}</PageTitle>
      </PageHeader>

      <ContentContainer>
        <OrderHeader>
          <OrderInfo>
            <OrderId>{t('editOrder.order_number', { id: order.orderid })}</OrderId>
            <OrderDate>{formatDate(order.created_at)}</OrderDate>
          </OrderInfo>

          <StatusSection>
            <StatusLabel>{t('editOrder.status_label')}</StatusLabel>
            <StatusSelect status={order.status} value={order.status} onChange={e => handleStatusChange(e.target.value)}>
              <option value="pending">{t('editOrder.status_pending')}</option>
              <option value="completed">{t('editOrder.status_completed')}</option>
              <option value="cancelled">{t('editOrder.status_cancelled')}</option>
            </StatusSelect>
            <PrintButtonsContainer>
              <PrintReceiptButton onClick={handlePrintReceipt} title={t('editOrder.receipt')}><HiOutlinePrinter />{t('editOrder.receipt')}</PrintReceiptButton>
              <PrintReceiptButton onClick={handlePrintInvoice} title={t('editOrder.invoice')}><HiOutlineDocumentText />{t('editOrder.invoice')}</PrintReceiptButton>
              <PrintReceiptButton onClick={handlePrintQuotation} title={t('editOrder.quotation')}><HiOutlineChatAlt />{t('editOrder.quotation')}</PrintReceiptButton>
              <PrintReceiptButton onClick={handlePrintDelivery} title={t('editOrder.delivery')}><HiOutlineTruck />{t('editOrder.delivery')}</PrintReceiptButton>
            </PrintButtonsContainer>
          </StatusSection>
        </OrderHeader>

        <Section>
          <SectionTitle>{t('editOrder.customer_info')}</SectionTitle>
          <CustomerInfo>
            {(() => {
              const name = order.customer_name === 'Deleted customer' ? t('orders.deleted_customer') : order.customer_name;
              if (name) {
                return (
                  <>
                    <CustomerDetail>
                      <DetailIcon><HiOutlineUser /></DetailIcon>
                      <DetailContent>
                        <DetailLabel>{t('editOrder.name_label')}</DetailLabel>
                        <DetailText>{name}</DetailText>
                      </DetailContent>
                    </CustomerDetail>
                    {order.customer_phone && (
                      <CustomerDetail>
                        <DetailIcon><HiOutlinePhone /></DetailIcon>
                        <DetailContent>
                          <DetailLabel>{t('editOrder.phone_label')}</DetailLabel>
                          <DetailText>{order.customer_phone}</DetailText>
                        </DetailContent>
                      </CustomerDetail>
                    )}
                    {order.customer_email && (
                      <CustomerDetail>
                        <DetailIcon><HiOutlineMail /></DetailIcon>
                        <DetailContent>
                          <DetailLabel>{t('editOrder.email_label')}</DetailLabel>
                          <DetailText>{order.customer_email}</DetailText>
                        </DetailContent>
                      </CustomerDetail>
                    )}
                    {order.customer_address && (
                      <CustomerDetail>
                        <DetailIcon><HiOutlineLocationMarker /></DetailIcon>
                        <DetailContent>
                          <DetailLabel>{t('editOrder.address_label')}</DetailLabel>
                          <DetailText>{order.customer_address}</DetailText>
                        </DetailContent>
                      </CustomerDetail>
                    )}
                  </>
                );
              }
              return (
                <CustomerDetail>
                  <DetailIcon><HiOutlineUser /></DetailIcon>
                  <DetailContent>
                    <DetailLabel>{t('editOrder.customer_type')}</DetailLabel>
                    <DetailText>{t('editOrder.walk_in_customer')}</DetailText>
                  </DetailContent>
                </CustomerDetail>
              );
            })()}
            {order.branch_name && (
              <CustomerDetail>
                <DetailIcon><HiOutlineOfficeBuilding /></DetailIcon>
                <DetailContent>
                  <DetailLabel>{t('checkout.branch')}</DetailLabel>
                  <DetailText>{order.branch_name}</DetailText>
                </DetailContent>
              </CustomerDetail>
            )}
          </CustomerInfo>
        </Section>

        {order.notes && (
          <Section>
            <SectionTitle>{t('editOrder.notes_label', 'Order Notes')}</SectionTitle>
            <NotesSection>
              {order.notes}
            </NotesSection>
          </Section>
        )}

        {order.payment_method && (
          <Section>
            <SectionTitle>{t('editOrder.payment_method_label', 'Payment Method')}</SectionTitle>
            <PaymentMethodSection>
              {t(`checkout.${order.payment_method}`, order.payment_method)}
            </PaymentMethodSection>
          </Section>
        )}

        <Section>
          <SectionTitle>{t('editOrder.order_items')}</SectionTitle>
          <OrderItems>
            {order.items.map((item, index) => (
              <OrderItem key={index}>
                <ItemInfo>
                  <ItemName>{item.name ?? `#${item.itemid}`}</ItemName>
                  {item.note && (
                    <div style={{ marginTop: 6, color: '#6b7280', fontSize: 13 }}>{item.note}</div>
                  )}
                  <ItemCategory>{item.category ?? ''}</ItemCategory>
                </ItemInfo>
                <ItemDetails>
                  <ItemQuantity>×{item.quantity}</ItemQuantity>
                  <ItemPrice>BHD {(Number(item.price) * item.quantity).toFixed(3)}</ItemPrice>
                </ItemDetails>
              </OrderItem>
            ))}
          </OrderItems>

          <OrderTotal>
            <TotalLabel>{t('editOrder.total_amount_label')}</TotalLabel>
            <TotalAmount>BHD {Number(order.total_amount).toFixed(3)}</TotalAmount>
          </OrderTotal>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default EditOrderPage;