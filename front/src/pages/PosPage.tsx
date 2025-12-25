import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import { itemsAPI, settingsAPI } from '../services/api';
import type { Product } from '../types';
import toast from 'react-hot-toast';
import { GlassCard } from '../components/GlassCard';
import FloatingCart from '../components/FloatingCart';
import { useTranslation } from 'react-i18next';

// Helper function to get full image URL
const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${API_BASE_URL}${imagePath}`;
};

const PosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: transparent; /* Background handled by global body style */

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 10px;
  }
`;

const ProductCard = styled(GlassCard)`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 160px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProductContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  line-height: 1.4;
`;

const ProductPrice = styled.p`
  margin: auto 0 0 0;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const ProductCategory = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  z-index: 1;
`;

const ProductStock = styled.div<{ $lowStock: boolean }>`
  font-size: 12px;
  color: ${props => props.$lowStock ? '#ef4444' : props.theme.colors.textSecondary};
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.$lowStock ? '#ef4444' : '#22c55e'};
  }
`;

/* cart section converted to a floating popout component (FloatingCart) */

const ControlsSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 14px 20px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 15px;
  flex: 1;
  min-width: 250px;
  background: ${props => props.theme.colors.surface};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.glow};
    transform: translateY(-2px);
  }
`;

const CategorySelect = styled.select`
  padding: 14px 20px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  border-radius: 14px;
  font-size: 15px;
  background: ${props => props.theme.colors.surface};
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.text};
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.glow};
    transform: translateY(-2px);
  }

  option {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 10px;
  }
`;

const PosPage: React.FC = () => {
  const { t } = useTranslation();
  const { cart, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(t('pos.all_categories'));
  const [products, setProducts] = useState<Product[]>([]);
  const [fetchedCategories, setFetchedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await itemsAPI.getAll();
        if (response.success && response.data) {
          setProducts(response.data);
        } else {
          setError(t('pos.error'));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : t('pos.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [t]);

  // Fetch categories from settings
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await settingsAPI.getCategories();
        if (response.success && response.data) {
          setFetchedCategories(response.data.map(c => c.name));
        }
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    };
    fetchCategories();
  }, []);

  const categories = useMemo(() => {
    const productCats = products.map(p => p.category);
    const allCategory = t('pos.all_categories');
    const uniqueCats = new Set([allCategory, ...fetchedCategories, ...productCats]);
    return Array.from(uniqueCats).sort((a, b) => {
      if (a === allCategory) return -1;
      if (b === allCategory) return 1;
      return a.localeCompare(b);
    });
  }, [products, fetchedCategories, t]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === t('pos.all_categories') || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, products, t]);

  return (
    <PosContainer>
      <div>
        <ControlsSection>
          <SearchInput
            type="text"
            placeholder={t('pos.search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CategorySelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </CategorySelect>
        </ControlsSection>

        <ProductGrid>
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
              <GlassCard>{t('pos.loading')}</GlassCard>
            </div>
          ) : error ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#ef4444' }}>
              <GlassCard>{error}</GlassCard>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#64748b' }}>
              <GlassCard>{t('pos.no_products')}</GlassCard>
            </div>
          ) : (
            filteredProducts.map((product) => {
              const cartItem = cart.find(c => c.product.itemid === product.itemid);
              const qtyInCart = cartItem ? cartItem.quantity : 0;
              const canAdd = product.stock_quantity > qtyInCart;
              const outOfStock = product.stock_quantity <= 0;

              return (
                <ProductCard
                  key={product.itemid}
                  onClick={() => {
                    if (outOfStock) return toast.error(t('pos.out_of_stock'));
                    if (!canAdd) return toast.error(t('pos.stock_limit'));
                    try {
                      addToCart(product);
                    } catch (error) {
                      toast.error(error instanceof Error ? error.message : t('pos.add_error'));
                    }
                  }}
                >
                  <ProductImageContainer>
                    {product.image ? (
                      <ProductImage src={getImageUrl(product.image)} alt={product.name} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>{t('pos.no_image')}</div>
                    )}
                    <ProductCategory>{product.category}</ProductCategory>
                  </ProductImageContainer>

                  <ProductContent>
                    <ProductName>{product.name}</ProductName>
                    <ProductStock $lowStock={product.stock_quantity <= 5}>
                      {outOfStock ? t('pos.out_of_stock_label') : t('pos.in_stock', { count: product.stock_quantity })}
                    </ProductStock>
                    <ProductPrice>BHD {Number(product.price).toFixed(3)}</ProductPrice>
                  </ProductContent>

                  {!canAdd && !outOfStock && (
                    <div style={{ position: 'absolute', top: 10, left: 10, background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: 10, fontSize: 10, fontWeight: 'bold', zIndex: 2 }}>MAX</div>
                  )}
                </ProductCard>
              );
            })
          )}
        </ProductGrid>
      </div>

      {/* Floating cart replaces the sidebar cart for a cleaner popout UX */}
      <FloatingCart />
    </PosContainer>
  );
};

export default PosPage;