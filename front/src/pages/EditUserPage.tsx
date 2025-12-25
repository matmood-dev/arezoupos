import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usersAPI, type User, type UpdateUserRequest, type CreateUserRequest } from '../services/api';
import { Button } from '../components/Button';
import { HiOutlineArrowLeft, HiOutlineCheck } from 'react-icons/hi';
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
    gap: 12px;
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

const ContentContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 30px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  max-width: 600px;
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

const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const UserName = styled.h2`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const UserMeta = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Section = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 16px;
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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 8px;
    margin-top: 8px;
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

const EditUserPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'cashier' as 'admin' | 'cashier'
  });

  // Fetch user data on component mount (only for existing users)
  const fetchUser = useCallback(async () => {
    if (id === 'new') {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await usersAPI.getById(id!);
      if (response.success && response.data) {
        setUser(response.data);
        setFormData({
          username: response.data.username,
          email: response.data.email,
          password: '', // Don't pre-fill password
          role: response.data.role
        });
      } else {
        setError(t('editUser.user_not_found'));
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      setError(err instanceof Error ? err.message : t('editUser.load_error'));
    } finally {
      setLoading(false);
    }
  }, [id, t]);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id, fetchUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNewUser = id === 'new';

    try {
      let response;
      if (isNewUser) {
        // Create new user
        const createData: CreateUserRequest = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role
        };
        response = await usersAPI.create(createData);
      } else {
        // Update existing user
        if (!user) return;

        const updateData: UpdateUserRequest = {
          username: formData.username,
          email: formData.email,
          role: formData.role
        };

        // Only include password if it was changed
        if (formData.password) {
          updateData.password = formData.password;
        }

        response = await usersAPI.update(user.userid, updateData);
      }

      if (response.success && response.data) {
        toast.success(t(isNewUser ? 'editUser.create_success' : 'editUser.update_success', { name: response.data.username }));
        navigate('/users');
      } else {
        toast.error(t(isNewUser ? 'editUser.create_error' : 'editUser.update_error'));
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t(isNewUser ? 'editUser.create_error' : 'editUser.update_error'));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoBack = () => {
    navigate('/users');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingContainer>{t('editUser.loading')}</LoadingContainer>
      </PageContainer>
    );
  }

  // If there was an error loading an existing user, show it.
  // For a "new" user route, allow `user` to be null and render the create form.
  if (error || (!user && id !== 'new')) {
    return (
      <PageContainer>
        <PageHeader>
          <BackButton onClick={handleGoBack}>
            <HiOutlineArrowLeft />
            {t('editUser.back_to_users')}
          </BackButton>
        </PageHeader>
        <ErrorContainer>
          {error || t('editUser.user_not_found')}
        </ErrorContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <BackButton onClick={handleGoBack}>
          <HiOutlineArrowLeft />
          {t('editUser.back_to_users')}
        </BackButton>
        <PageTitle>{id === 'new' ? t('editUser.title_create') : t('editUser.title_edit')}</PageTitle>
      </PageHeader>

      <ContentContainer>
        {id !== 'new' && user && (
          <UserHeader>
            <UserName>{user.username}</UserName>
            <UserMeta>
              <span>{t('users.created')}: {formatDate(user.created_at)}</span>
              <span>{t('users.updated')}: {formatDate(user.updated_at)}</span>
            </UserMeta>
          </UserHeader>
        )}

        <Section>
          <SectionTitle>{t('editUser.user_info')}</SectionTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">{t('editUser.username_label')}</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">{t('editUser.email_label')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">{t('editUser.password_label')} {id === 'new' ? t('editUser.password_hint_new') : t('editUser.password_hint_edit')}</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={id === 'new' ? t('editUser.password_placeholder_new') : t('editUser.password_placeholder_edit')}
                required={id === 'new'}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="role">{t('editUser.role_label')}</Label>
              <Select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="cashier">{t('users.cashier')}</option>
                <option value="admin">{t('users.admin')}</option>
              </Select>
            </FormGroup>

            <FormActions>
              <SubmitButton type="submit">
                <HiOutlineCheck />
                {id === 'new' ? t('editUser.create_button') : t('editUser.update_button')}
              </SubmitButton>
            </FormActions>
          </Form>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
};

export default EditUserPage;