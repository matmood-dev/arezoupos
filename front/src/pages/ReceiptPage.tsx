import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ordersAPI, settingsAPI, type Order, type Settings } from '../services/api';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const PageContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BackButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  background: ${props => props.theme.colors.glass};
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  &:hover { background: ${props => props.theme.colors.surface}; }
  svg { color: inherit; width: 16px; height: 16px; }
`;

const PrintButton = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.gradients.primary};
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.18s ease;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${props => props.theme.shadows.small}; }
  &:focus-visible { outline: 2px solid ${props => props.theme.colors.accent}; outline-offset: 2px; }
`;

const ReceiptWrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
`;

const ShopInfo = styled.div`
  text-align: center;
  color: #6b7280;
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.6;
`;

const Divider = styled.div`
  border-top: 1px dashed #d1d5db;
  margin: 16px 0;
`;

const SolidDivider = styled.div`
  border-top: 2px solid #000;
  margin: 16px 0;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-weight: 700;
  font-size: 16px;
`;

const Footer = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
`;

const ReceiptPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const [orderRes, settingsRes] = await Promise.all([
          ordersAPI.getById(Number(id)),
          settingsAPI.getSettings()
        ]);

        if (orderRes.success && orderRes.data) setOrder(orderRes.data);
        if (settingsRes.success && settingsRes.data) setSettings(settingsRes.data);
      } catch (err) {
        console.error('Failed to load receipt:', err);
        toast.error('Failed to load receipt');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetch();
  }, [id]);


  const handleBack = () => {
    navigate(-1);
  };

  if (loading || !order) {
    return (
      <PageContainer>
        <p>Loading receipt...</p>
      </PageContainer>
    );
  }

  // Calculate VAT breakdown from items
  const taxRate = settings?.tax_rate ? Number(settings.tax_rate) : 0;
  const computedSubtotal = order.items.reduce((sum, it) => sum + (Number(it.price || 0) * (it.quantity || 0)), 0);
  const computedVat = computedSubtotal * (taxRate / 100);
  const computedTotal = computedSubtotal + computedVat;

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBack}><HiOutlineArrowLeft /> Back</BackButton>
        <div style={{ display: 'flex', gap: 8 }}>
          {/* Only Download PDF is kept — generates a real PDF using html2pdf */}
          <PrintButton onClick={async () => {
            try {
              const el = document.getElementById('receipt');
              if (!el) throw new Error('Receipt element not found');
              // Clone the receipt and inline external images as data URLs
              const cloneReceipt = async (node: HTMLElement): Promise<HTMLElement> => {
                const cloned = node.cloneNode(true) as HTMLElement;

                // Find all images and inline them by fetching and converting to data URLs
                const imgs = Array.from(cloned.querySelectorAll('img')) as HTMLImageElement[];
                await Promise.all(imgs.map(async (img) => {
                  try {
                    const src = img.src;
                    if (!src || src.startsWith('data:')) return; // already inlined

                    // fetch the image and convert to data URL
                    const resp = await fetch(src, { mode: 'cors' });
                    if (!resp.ok) throw new Error(`Image fetch failed: ${resp.status}`);
                    const blob = await resp.blob();
                    const reader = new Promise<string>((resolve, reject) => {
                      const r = new FileReader();
                      r.onloadend = () => resolve(r.result as string);
                      r.onerror = reject;
                      r.readAsDataURL(blob);
                    });
                    const dataUrl = await reader;
                    img.src = dataUrl;
                  } catch (err) {
                    // Best-effort: leave original src if we fail to inline
                    console.warn('Could not inline image for PDF generation:', img.src, err);
                  }
                }));

                return cloned;
              };

              const clonedEl = await cloneReceipt(el);

              // Load html2pdf on demand so it isn't bundled unless used
              const mod = await import('html2pdf.js');
              const html2pdf = (mod as any).default || (mod as any);

              await html2pdf().from(clonedEl).set({
                filename: `receipt-${order.orderid}.pdf`,
                margin: [5, 5, 5, 5],
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: [80, 297], orientation: 'portrait' }
              }).save();

              toast.success('Receipt downloaded');
            } catch (err) {
              console.error('Download PDF failed', err);
              toast.error(err instanceof Error ? err.message : 'Failed to download PDF');
            }
          }}>Download PDF</PrintButton>
        </div>
      </Header>

      <ReceiptWrapper id="receipt">
        {settings?.shop_logo && (
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <img src={getImageUrl(settings.shop_logo)} alt="logo" style={{ maxWidth: 180, maxHeight: 110, objectFit: 'contain' }} />
          </div>
        )}

        <ShopInfo>
          {order.branch_phone && <div>Tel: {order.branch_phone}</div>}
          {settings?.shop_email && <div>{settings.shop_email}</div>}
          {settings?.vat_registration_number && <div>VAT REG# {settings.vat_registration_number}</div>}
          {order.branch_address && <div>Area: {order.branch_address}</div>}
          {order.branch_cr && <div>CR: {order.branch_cr}</div>}
        </ShopInfo>

        <Divider />

        <Section style={{ fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span><strong>Ref#:</strong> {order.orderid}</span>
            <span><strong>Status:</strong> {order.status}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</span>
            <span><strong>Time:</strong> {new Date(order.created_at).toLocaleTimeString()}</span>
          </div>
          {order.customer_name && (() => {
            const name = order.customer_name === 'Deleted customer' ? t('orders.deleted_customer') : order.customer_name;
            return <div style={{ marginTop: 4 }}><strong>Customer:</strong> {name}</div>;
          })()}
        </Section>

        <Divider />

        <Section>
          <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '14px' }}>ORDER ITEMS</div>
          {order.items.map((item, idx) => {
            const qty = item.quantity || 0;
            const unit = Number(item.price || 0);
            const unitTax = unit * (taxRate / 100);
            const lineTotal = (unit + unitTax) * qty;
            return (
              <div key={idx} style={{ marginBottom: 8 }}>
                <ItemRow>
                  <div style={{ flex: 1, fontWeight: 500 }}>{item.name}</div>
                </ItemRow>
                <ItemRow style={{ fontSize: '13px', color: '#4b5563' }}>
                  <div>{qty} × BHD {unit.toFixed(3)}</div>
                  <div style={{ fontWeight: 600, color: '#000' }}>BHD {lineTotal.toFixed(3)}</div>
                </ItemRow>
                {unitTax > 0 && (
                  <div style={{ fontSize: 12, color: '#6b7280' }}>Tax per unit: BHD {unitTax.toFixed(3)}</div>
                )}
                {item.note && (
                  <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2, fontStyle: 'italic' }}>Note: {item.note}</div>
                )}
              </div>
            );
          })}
        </Section>

        <SolidDivider />

        {(
          <>
            <ItemRow style={{ fontSize: '14px' }}>
              <div>Subtotal</div>
              <div>BHD {computedSubtotal.toFixed(3)}</div>
            </ItemRow>
            <ItemRow style={{ fontSize: '14px' }}>
              <div>VAT ({taxRate}%)</div>
              <div>BHD {computedVat.toFixed(3)}</div>
            </ItemRow>
            <Divider />
            <TotalRow>
              <div>TOTAL</div>
              <div>BHD {computedTotal.toFixed(3)}</div>
            </TotalRow>
          </>
        )}

        <Footer>
          {settings?.receipt_footer || 'Thank you for your business!'}
        </Footer>
      </ReceiptWrapper>
    </PageContainer>
  );
};

export default ReceiptPage;
