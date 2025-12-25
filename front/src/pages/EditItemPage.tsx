import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { itemsAPI, settingsAPI, type Item } from '../services/api';
import useCategories from '../hooks/useCategories';
import { Button } from '../components/Button';
import { HiOutlineArrowLeft, HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
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

const PageHeader = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
  }
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

  &:hover {
    background: ${props => props.theme.colors.surface};
    transform: translateX(-2px);
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

const PageTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const FormContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 8px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
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

const CurrentImageContainer = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
  }
`;

const CurrentImageLabel = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 12px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

const CurrentImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 768px) {
    max-width: 250px;
    height: 150px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    height: 120px;
  }
`;

const ImagePreview = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-top: 8px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 12px;
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
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const AddButton = styled.button`
  padding: 4px 12px;
  background: ${props => props.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const EditItemPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock_quantity: '',
    image: null as File | null
  });
  const { categories, loading: categoriesLoading, reload: reloadCategories } = useCategories();
  const [missingCategory, setMissingCategory] = useState<string | null>(null);

  // Fetch item data on component mount
  const fetchItem = useCallback(async () => {
    try {
      setLoading(true);
      const response = await itemsAPI.getById(parseInt(id!));
      if (response.success && response.data) {
        setItem(response.data);
        setFormData({
          name: response.data.name,
          description: response.data.description || '',
          price: response.data.price.toString(),
          category: response.data.category,
          stock_quantity: response.data.stock_quantity.toString(),
          image: null
        });
      } else {
        setError(t('editItem.item_not_found'));
      }
    } catch (err) {
      console.error('Error fetching item:', err);
      setError(err instanceof Error ? err.message : t('editItem.load_error'));
    } finally {
      setLoading(false);
    }
  }, [id, t]);

  useEffect(() => {
    if (id) {
      fetchItem();
    }
    // categories are loaded via useCategories hook
  }, [id, fetchItem]);

  useEffect(() => {
    if (!item || categoriesLoading) return;
    const found = categories.find(c => c.name === item.category);
    if (found) {
      setFormData(prev => ({ ...prev, category: found.categoryid.toString() }));
      setMissingCategory(null);
    } else if (item.category) {
      setFormData(prev => ({ ...prev, category: item.category }));
      setMissingCategory(item.category);
    }
  }, [item, categories, categoriesLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!item) return;

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
      const response = await itemsAPI.update(item.itemid, formDataToSend);
      if (response.success) {
        toast.success(t('editItem.update_success'));
        navigate('/inventory');
      } else {
        toast.error(t('editItem.update_error'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('editItem.update_error'));
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

  const handleGoBack = () => {
    navigate('/inventory');
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>{t('editItem.loading')}</LoadingContainer>
      </PageContainer>
    );
  }

  if (error || !item) {
    return (
      <PageContainer>
        <PageHeader>
          <BackButton onClick={handleGoBack}>
            <HiOutlineArrowLeft />
            {t('editItem.back_to_inventory')}
          </BackButton>
        </PageHeader>
        <ErrorContainer>
          {error || t('editItem.item_not_found')}
        </ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton onClick={handleGoBack}>
          <HiOutlineArrowLeft />
          {t('editItem.back_to_inventory')}
        </BackButton>
        <PageTitle>{t('editItem.title')}</PageTitle>
      </PageHeader>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="name">{t('inventory.name')} *</Label>
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
              <Label htmlFor="category">{t('inventory.category')} *</Label>
              <Select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">{t('inventory.select_category')}</option>
                {categoriesLoading ? (
                  <option value="" disabled>{t('inventory.loading_categories')}</option>
                ) : (
                  categories.map(cat => (
                    <option key={cat.categoryid} value={cat.categoryid.toString()}>{cat.name}</option>
                  ))
                )}
              </Select>
              {missingCategory && (
                <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <em style={{ color: '#f59e0b' }}>{t('editItem.missing_category', { name: missingCategory })}</em>
                  <AddButton onClick={async () => {
                    try {
                      const resp = await settingsAPI.createCategory({ name: missingCategory });
                      if (resp.success && resp.data) {
                        await reloadCategories();
                        setFormData(prev => ({ ...prev, category: resp.data!.categoryid.toString() }));
                        setMissingCategory(null);
                        toast.success(t('editItem.category_readded'));
                      }
                    } catch (err) {
                      console.error(err);
                      toast.error(t('editItem.category_readd_error'));
                    }
                  }}>{t('editItem.readd_button')}</AddButton>
                </div>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <Label htmlFor="price">{t('inventory.price')} *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="stock_quantity">{t('inventory.stock')} *</Label>
              <Input
                id="stock_quantity"
                name="stock_quantity"
                type="number"
                min="0"
                value={formData.stock_quantity}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="description">{t('inventory.description')}</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">{t('inventory.image')}</Label>
            {item.image && (
              <CurrentImageContainer>
                <CurrentImageLabel>{t('editItem.current_image')}</CurrentImageLabel>
                <CurrentImage
                  src={getImageUrl(item.image)}
                  alt={item.name}
                  onError={(e) => {
                    console.error('Current image failed to load:', item.image, e);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </CurrentImageContainer>
            )}
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {formData.image && (
              <ImagePreview>
                {t('editItem.new_image_selected', { name: formData.image.name })}
              </ImagePreview>
            )}
            {!formData.image && item.image && (
              <ImagePreview>
                {t('editItem.keep_current_image')}
              </ImagePreview>
            )}
          </FormGroup>

          <FormActions>
            <CancelButton type="button" onClick={handleGoBack}>
              <HiOutlineX />
              {t('common.cancel')}
            </CancelButton>
            <SubmitButton type="submit">
              <HiOutlineCheck />
              {t('editItem.update_button')}
            </SubmitButton>
          </FormActions>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default EditItemPage;