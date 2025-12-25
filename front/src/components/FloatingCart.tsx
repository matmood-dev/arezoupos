import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCart } from '../hooks/useCart';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HiOutlineShoppingCart, HiOutlineTrash, HiX, HiOutlineDocumentText, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { GlassButton } from './GlassCard';

const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const pop = keyframes`
  from { transform: translateY(12px) scale(.98); opacity: 0; }
  to { transform: translateY(0px) scale(1); opacity: 1; }
`;

const Floating = styled.div<{ $rtl?: boolean }>`
  position: fixed;
  right: ${props => props.$rtl ? 'auto' : '24px'};
  left: ${props => props.$rtl ? '24px' : 'auto'};
  bottom: 24px;
  z-index: 1200;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Fab = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: ${p => p.theme.shadows.large};
  transition: transform .14s ease, box-shadow .14s ease;

  &:active { transform: translateY(2px) scale(.99); }
`;

const Badge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: white;
  background: #ef4444;
`;

const Panel = styled.div<{ $open: boolean }>`
  width: 640px;
  max-width: calc(100vw - 48px);
  height: 68vh;
  max-height: 720px;
  background: ${p => p.theme.colors.surface2};
  border-radius: 14px;
  box-shadow: ${p => p.theme.shadows.large};
  border: 1px solid ${p => p.theme.colors.glassBorder};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  animation: ${pop} .16s ease;
  transition: transform .18s ease, opacity .18s ease;
  opacity: ${p => p.$open ? '1' : '0'};
  transform: ${p => p.$open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(.98)'};
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${p => p.theme.colors.glassBorder};
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: ${p => p.theme.colors.text};
`;

const Items = styled.div`
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const ItemMeta = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Thumb = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 8px;
  background: ${p => p.theme.colors.background};
`;

const ItemName = styled.div`
  font-weight: 600;
  color: ${p => p.theme.colors.text};
  font-size: 14px;
`;

const ItemPrice = styled.div`
  font-weight: 700;
  color: ${p => p.theme.colors.primary};
`;

const Footer = styled.div`
  padding: 12px;
  border-top: 1px solid ${p => p.theme.colors.glassBorder};
  background: ${p => p.theme.colors.glass};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

const Empty = styled.div`
  padding: 40px 12px;
  text-align: center;
  color: ${p => p.theme.colors.textSecondary};
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SmallButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: ${p => p.theme.colors.textSecondary};
  padding: 6px;
  height: 32px;
  min-width: 32px;
  line-height: 0;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QtyBtn = styled.button`
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${p => p.theme.colors.surface};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
`;

const FloatingCart: React.FC = () => {
  const { cart, updateQuantity, updateItemNote, updateItemPrice, total, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [noteOpen, setNoteOpen] = useState<Record<number, boolean>>({});
  const [priceOpen, setPriceOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsRtl(document.documentElement.dir === 'rtl');
  }, []);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  const { t } = useTranslation();
  const totalCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <Floating $rtl={isRtl}>
      <div style={{ position: 'relative' }}>
        <Fab onClick={() => setOpen(v => !v)} aria-expanded={open} aria-haspopup="dialog" title="Open cart" data-testid="floating-cart-button">
          <IconWrap>
            <HiOutlineShoppingCart size={22} />
            {totalCount > 0 && <Badge>{totalCount}</Badge>}
          </IconWrap>
        </Fab>
      </div>

      <div style={{ display: open ? 'block' : 'none' }}>
        <Panel $open={open} role="dialog" aria-label="Cart panel">
          <Header>
            <Title>{t('pos.current_order')}</Title>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <SmallButton onClick={() => setOpen(false)} aria-label="Close cart">
                <HiX size={18} />
              </SmallButton>
            </div>
          </Header>

          <Items>
            {cart.length === 0 ? (
              <Empty>{t('pos.empty_cart')}</Empty>
            ) : cart.map(item => (
              <Item key={item.product.itemid}>
                <ItemMeta>
                  {item.product.image ? <Thumb src={getImageUrl(item.product.image)} alt={item.product.name} /> : <Thumb src={''} alt={item.product.name} />}
                  <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                    <ItemName>{item.product.name}</ItemName>
                    <ItemPrice>
                      {typeof item.overridePrice === 'number' ? (
                        <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <span>BHD {Number(item.overridePrice).toFixed(3)}</span>
                          <span style={{ fontSize: 12, color: '#6b7280', textDecoration: 'line-through' }}>BHD {Number(item.product.price).toFixed(3)}</span>
                        </span>
                      ) : (
                        `BHD ${Number(item.product.price).toFixed(3)}`
                      )}
                    </ItemPrice>
                    <div style={{ marginTop: 6, display: 'flex', alignItems: 'flex-start', gap: 0, minWidth: 0 }}>
                      <SmallButton
                        onClick={() => setPriceOpen(prev => ({ ...prev, [item.product.itemid]: !prev[item.product.itemid] }))}
                        aria-label={`toggle-price-${item.product.itemid}`}
                        title={item.overridePrice ? 'Edit price' : 'Change price'}
                      >
                        <HiOutlineCurrencyDollar size={25} />
                      </SmallButton>
                      {priceOpen[item.product.itemid] ? (
                        <input
                          aria-label={`price-${item.product.itemid}`}
                          type="number"
                          step="0.001"
                          min="0"
                          value={typeof item.overridePrice === 'number' ? String(item.overridePrice) : String(item.product.price)}
                          onChange={(e) => {
                            const v = e.target.value;
                            const n = v === '' ? undefined : Number(v);
                            updateItemPrice(item.product.itemid, typeof n === 'number' && !isNaN(n) ? n : undefined);
                          }}
                          style={{ width: 140, minWidth: 0, padding: 6, borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)', fontSize: 12 }}
                        />
                      ) : null}
                      <SmallButton
                        onClick={() => setNoteOpen(prev => ({ ...prev, [item.product.itemid]: !prev[item.product.itemid] }))}
                        aria-label={`toggle-note-${item.product.itemid}`}
                        title={item.note ? 'Edit note' : 'Add note'}
                      >
                        <HiOutlineDocumentText size={25} />
                      </SmallButton>
                      {noteOpen[item.product.itemid] ? (
                        <textarea
                          aria-label={`note-${item.product.itemid}`}
                          placeholder="Add note"
                          value={item.note ?? ''}
                          onChange={(e) => updateItemNote(item.product.itemid, e.target.value)}
                          style={{ flex: 1, minWidth: 0, padding: 6, borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)', resize: 'vertical', fontSize: 12 }}
                        />
                        ) : (
                        item.note ? <div style={{ color: '#6b7280', fontSize: 13, maxWidth: 420, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.note}</div> : null
                      )}
                    </div>
                  </div>
                </ItemMeta>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <QuantityControls>
                    <QtyBtn onClick={() => updateQuantity(item.product.itemid, item.quantity - 1)}>-</QtyBtn>
                    <div style={{ minWidth: 22, textAlign: 'center' }}>{item.quantity}</div>
                    <QtyBtn onClick={() => {
                      try {
                        updateQuantity(item.product.itemid, item.quantity + 1);
                      } catch (error) {
                        toast.error(t('pos.stock_limit'));
                      }
                    }}>+</QtyBtn>
                  </QuantityControls>
                  <SmallButton onClick={() => removeFromCart(item.product.itemid)} aria-label="Remove item" style={{ color: '#ef4444' }} title={t('pos.remove_item') || 'Remove'}>
                    <HiOutlineTrash size={18} />
                  </SmallButton>
                </div>
              </Item>
            ))}
          </Items>

          <Footer>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--muted)', fontSize: 13 }}>{t('pos.total')}</span>
              <span style={{ fontWeight: 800 }}>BHD {total.toFixed(3)}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <GlassButton onClick={() => { if (cart.length) { navigate('/checkout'); setOpen(false); } }} $primary disabled={cart.length === 0}>{t('pos.checkout')}</GlassButton>
              <GlassButton onClick={() => {
                if (cart.length === 0) return;
                // confirm action using toast
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                toast((ti) => (
                  <div>
                    <div style={{ marginBottom: 8, fontWeight: 600 }}>{t('pos.clear_cart_confirm_title')}</div>
                    <div style={{ color: '#64748b', marginBottom: 12 }}>{t('pos.clear_cart_confirm_message')}</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                      <button
                        onClick={() => toast.dismiss(ti.id)}
                        style={{ padding: '6px 12px', border: '1px solid #d1d5db', background: 'white', borderRadius: 6, cursor: 'pointer' }}
                      >
                        {t('common.cancel')}
                      </button>
                      <button
                        onClick={() => {
                          toast.dismiss(ti.id);
                          clearCart();
                          toast.success(t('pos.clear_success'));
                        }}
                        style={{ padding: '6px 12px', border: 'none', background: '#ef4444', color: 'white', borderRadius: 6, cursor: 'pointer' }}
                      >
                        {t('pos.clear_cart')}
                      </button>
                    </div>
                  </div>
                ), {
                  duration: 10000,
                  style: { background: '#fff7ed', border: '1px solid #fed7aa', padding: '12px', borderRadius: 8 }
                });
              }} style={{ background: '#fff', color: '#ef4444', border: '1px solid #ef4444' }} disabled={cart.length === 0}>{t('pos.clear_cart')}</GlassButton>
            </div>
          </Footer>
        </Panel>
      </div>
    </Floating>
  );
};

export default FloatingCart;
