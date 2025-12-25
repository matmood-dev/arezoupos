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
`;

const InvoiceWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  color: #000;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Use Noto Sans Arabic font for Arabic (RTL) */
  html[dir="rtl"] & {
    font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const InvoiceTitleText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

/* HeaderBox removed (unused after layout refactor) */

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  min-width: 220px;
`;

const QuoteBox = styled.div`
  background: #f3f4f6;
  padding: 12px 14px;
  min-width: 220px;
  max-width: 320px;
  text-align: left;
  border-radius: 4px;
  font-size: 13px;
  color: #111827;
`;

const MetaLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const MetaValue = styled.div`
  font-weight: 700;
  color: #111827;
  margin-top: 6px;
`;

const CustomerSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CustomerInfo = styled.div`
  flex: 1;
`;

const InvoiceDetails = styled.div`
  flex: 1;
  text-align: right;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #000;
`;

const InfoRow = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
`;

const NoteText = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-top: 6px;
`;

const Divider = styled.div`
  border-top: 1px solid #d1d5db;
  margin: 20px 0;
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 12px 10px;
  background: #f3f4f6;
  color: #111827;
  font-weight: 700;
  font-size: 13px;
  border-bottom: 1px solid #d1d5db;
`;

const TableCell = styled.td`
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 14px;
  color: #374151;
`;

const TotalsBox = styled.div`
  width: 320px;
  margin-left: auto;
  margin-top: 8px;
  font-size: 14px;
  color: #111827;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid transparent;
  }

  .subtotal {
    border-top: 1px solid #e5e7eb;
    padding-top: 10px;
  }

  .total-amount {
    font-weight: 800;
    font-size: 18px;
  }
`;

const QuantityCell = styled(TableCell)`
  text-align: center;
  width: 80px;
`;

const PriceCell = styled(TableCell)`
  text-align: right;
  width: 100px;
`;

const TotalCell = styled(TableCell)`
  text-align: right;
  width: 120px;
  font-weight: bold;
`;

const TotalSection = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Footer = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #6b7280;
  font-size: 12px;
  font-style: italic;
`;

const InvoicePage: React.FC = () => {
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
        console.error('Failed to load invoice:', err);
        toast.error('Failed to load invoice');
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
        <p>Loading invoice...</p>
      </PageContainer>
    );
  }

  // Calculate VAT breakdown per item
  const taxRate = settings?.tax_rate ? Number(settings.tax_rate) : 0;

  const computedSubtotal = order.items.reduce((sum, it) => sum + (Number(it.price) * (it.quantity || 0)), 0);
  const computedVat = computedSubtotal * (taxRate / 100);
  const computedTotal = computedSubtotal + computedVat;

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBack}><HiOutlineArrowLeft /> Back</BackButton>
        <div style={{ display: 'flex', gap: 8 }}>
          <PrintButton onClick={async () => {
            try {
              const el = document.getElementById('invoice');
              if (!el) throw new Error('Invoice element not found');
              // Clone the invoice and inline external images as data URLs
              const cloneInvoice = async (node: HTMLElement): Promise<HTMLElement> => {
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

              const clonedEl = await cloneInvoice(el);

              // Load html2pdf on demand so it isn't bundled unless used
              const mod = await import('html2pdf.js');
              type Html2PdfType = (...args: unknown[]) => { from: (el: HTMLElement) => { set: (opts: unknown) => { save: () => Promise<void> } } };
              const html2pdf = ((mod as unknown) as { default?: Html2PdfType }).default ?? ((mod as unknown) as Html2PdfType);

              await html2pdf().from(clonedEl).set({
                filename: `invoice-${order.orderid}.pdf`,
                margin: [10, 10, 10, 10],
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
              }).save();

              toast.success('Invoice downloaded');
            } catch (err) {
              console.error('Download PDF failed', err);
              toast.error(err instanceof Error ? err.message : 'Failed to download PDF');
            }
          }}>Download PDF</PrintButton>
        </div>
      </Header>

      <InvoiceWrapper id="invoice">
        <InvoiceHeader>
          <CompanyInfo>
            {settings?.shop_logo && (
              <div style={{ marginBottom: 12 }}>
                <img src={getImageUrl(settings.shop_logo)} alt="logo" style={{ maxWidth: 180, maxHeight: 80, objectFit: 'contain' }} />
              </div>
            )}
            <div style={{ fontSize: 13, lineHeight: 1.4 }}>
              {order.branch_name && <div style={{ fontWeight: 700 }}>{order.branch_name}</div>}
              {order.branch_address && <div>{order.branch_address}</div>}
              {order.branch_phone && <div>Phone: {order.branch_phone}</div>}
              {settings?.shop_email && <div>Email: {settings.shop_email}</div>}
              {settings?.vat_registration_number && <div>VAT: {settings.vat_registration_number}</div>}
            </div>
          </CompanyInfo>

          <RightColumn>
            <div style={{ textAlign: 'right' }}>
              <InvoiceTitleText>INVOICE</InvoiceTitleText>
            </div>

            <QuoteBox style={{ alignSelf: 'flex-start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <MetaLabel>Order #</MetaLabel>
                <MetaValue>#{order.orderid}</MetaValue>
              </div>

              <MetaLabel style={{ marginTop: 10 }}>Invoice Date</MetaLabel>
              <MetaValue>{new Date(order.created_at).toLocaleDateString()}</MetaValue>

              <MetaLabel style={{ marginTop: 10 }}>Salesperson</MetaLabel>
              <MetaValue>{order.user_name || settings?.shop_name || '-'}</MetaValue>
            </QuoteBox>
          </RightColumn>
        </InvoiceHeader>

        <CustomerSection>
          <CustomerInfo>
            <SectionTitle>{t('editOrder.customer_info')}</SectionTitle>
            <div style={{ fontSize: 14, lineHeight: 1.4 }}>
              {(() => {
                const name = order.customer_name === 'Deleted customer' ? t('orders.deleted_customer') : order.customer_name;
                if (name) {
                  return (
                    <>
                      <div><strong>{name}</strong></div>
                      {order.customer_phone && <div>{t('editOrder.phone_label')}: {order.customer_phone}</div>}
                      {order.customer_email && <div>{t('editOrder.email_label')}: {order.customer_email}</div>}
                      {order.customer_address && <div>{t('editOrder.address_label')}: {order.customer_address}</div>}
                    </>
                  );
                }
                return <div><strong>{t('editOrder.walk_in_customer')}</strong></div>;
              })()}
            </div>
          </CustomerInfo>
          <InvoiceDetails>
            <SectionTitle>{t('editOrder.invoice')}</SectionTitle>
            <InfoRow><strong>{t('editOrder.order_date')}</strong> {new Date(order.created_at).toLocaleDateString()}</InfoRow>
            <InfoRow><strong>{t('editOrder.time_label')}</strong> {new Date(order.created_at).toLocaleTimeString()}</InfoRow>
            <InfoRow><strong>{t('editOrder.status_label')}</strong> {order.status}</InfoRow>
          </InvoiceDetails>
        </CustomerSection>

        <Divider />

        <SectionTitle>Order Items:</SectionTitle>
        <ItemsTable>
          <thead>
            <tr>
                  <TableHeader>Description</TableHeader>
                  <TableHeader style={{ textAlign: 'center' }}>Qty</TableHeader>
                  <TableHeader style={{ textAlign: 'right' }}>Unit Price</TableHeader>
                  <TableHeader style={{ textAlign: 'right' }}>Tax</TableHeader>
                  <TableHeader style={{ textAlign: 'right' }}>Total</TableHeader>
                </tr>
          </thead>
          <tbody>
                {order.items.map((item, idx) => {
                  const qty = item.quantity || 0;
                  const unit = Number(item.price || 0);
                  const unitTax = unit * (taxRate / 100);
                  const lineTotal = (unit + unitTax) * qty;
                  return (
                    <tr key={idx}>
                      <TableCell>
                        <div style={{ fontWeight: 500 }}>{item.name}</div>
                        {item.note && <NoteText>Note: {item.note}</NoteText>}
                      </TableCell>
                      <QuantityCell>{qty}</QuantityCell>
                      <PriceCell>BHD {unit.toFixed(3)}</PriceCell>
                      <PriceCell>BHD {unitTax.toFixed(3)}</PriceCell>
                      <TotalCell>BHD {lineTotal.toFixed(3)}</TotalCell>
                    </tr>
                  );
                })}
          </tbody>
        </ItemsTable>

        <TotalSection>
          <TotalsBox>
            <div className="row">
              <div>Subtotal:</div>
              <div>BHD {computedSubtotal.toFixed(3)}</div>
            </div>

            <div className="row">
              <div>VAT ({taxRate}%):</div>
              <div>BHD {computedVat.toFixed(3)}</div>
            </div>

            <div className="row subtotal">
              <div style={{ fontSize: 16 }}>Total Amount:</div>
              <div className="total-amount">BHD {computedTotal.toFixed(3)}</div>
            </div>
          </TotalsBox>
        </TotalSection>

        {order.notes && (
          <>
            <Divider />
            <div style={{ marginTop: 20 }}>
              <SectionTitle>Notes:</SectionTitle>
              <div style={{ fontSize: 14, lineHeight: 1.4 }}>{order.notes}</div>
            </div>
          </>
        )}

        <Footer>
          <div style={{ textAlign: 'left', color: '#111' }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Account Details:</div>
            {settings?.bank_name && <div><strong>{settings.bank_name}</strong></div>}
            {settings?.bank_account_name && <div>Account: {settings.bank_account_name}</div>}
            {settings?.iban_number && <div>IBAN: {settings.iban_number}</div>}
            {settings?.account_number && <div>Account #: {settings.account_number}</div>}
            {settings?.swift_code && <div>SWIFT: {settings.swift_code}</div>}

            <div style={{ marginTop: 8 }}>
              {settings?.shop_email && <div>Email: {settings.shop_email}</div>}
              {order.branch_address && <div>Address: {order.branch_address}</div>}
              {(order.branch_phone || order.customer_phone) && <div>Contact: {order.branch_phone || order.customer_phone}</div>}
            </div>
          </div>

          <div style={{ marginTop: 12, color: '#6b7280' }}>{settings?.receipt_footer || 'Thank you for your business!'}</div>
        </Footer>
      </InvoiceWrapper>
    </PageContainer>
  );
};

export default InvoicePage;