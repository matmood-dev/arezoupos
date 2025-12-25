import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { customersAPI, type Customer, type UpdateCustomerRequest } from '../services/api';
import { Button } from '../components/Button';
import { HiOutlineArrowLeft, HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
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

const EditCustomerPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  // Fetch customer data on component mount
  const fetchCustomer = useCallback(async () => {
    try {
      setLoading(true);
      const response = await customersAPI.getById(parseInt(id!));
      if (response.success && response.data) {
        setCustomer(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email || '',
          phone: response.data.phone,
          address: response.data.address || ''
        });
      } else {
        setError(t('editCustomer.customer_not_found'));
      }
    } catch (err) {
      console.error('Error fetching customer:', err);
      setError(err instanceof Error ? err.message : t('editCustomer.load_error'));
    } finally {
      setLoading(false);
    }
  }, [id, t]);

  useEffect(() => {
    if (id) {
      fetchCustomer();
    }
  }, [id, fetchCustomer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer) return;

    const updateData: UpdateCustomerRequest = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      address: formData.address || undefined
    };

    try {
      const response = await customersAPI.update(customer.customerid, updateData);
      if (response.success) {
        toast.success(t('editCustomer.update_success'));
        navigate('/customers');
      } else {
        toast.error(t('editCustomer.update_error'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t('editCustomer.update_error'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGoBack = () => {
    navigate('/customers');
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>{t('editCustomer.loading')}</LoadingContainer>
      </PageContainer>
    );
  }

  if (error || !customer) {
    return (
      <PageContainer>
        <PageHeader>
          <BackButton onClick={handleGoBack}>
            <HiOutlineArrowLeft />
            {t('editCustomer.back_to_customers')}
          </BackButton>
        </PageHeader>
        <ErrorContainer>
          {error || t('editCustomer.customer_not_found')}
        </ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton onClick={handleGoBack}>
          <HiOutlineArrowLeft />
          {t('editCustomer.back_to_customers')}
        </BackButton>
        <PageTitle>{t('editCustomer.title')}</PageTitle>
      </PageHeader>

      <FormContainer>
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
            <CancelButton type="button" onClick={handleGoBack}>
              <HiOutlineX />
              {t('common.cancel')}
            </CancelButton>
            <SubmitButton type="submit">
              <HiOutlineCheck />
              {t('editCustomer.update_button')}
            </SubmitButton>
          </FormActions>
        </Form>
      </FormContainer>
    </PageContainer>
  );
};

export default EditCustomerPage;