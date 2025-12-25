import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usersAPI, type User } from '../services/api';
import { Button } from '../components/Button';
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineMail, HiOutlineShieldCheck, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi';
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

const ControlsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) { flex-direction: column; gap: 15px; margin-bottom: 20px; }
`;

const ViewToggle = styled.div`
  display: flex;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  overflow: hidden;
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
`;

const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 500;
  background: ${props => props.theme.gradients.primary};
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${props => props.theme.shadows.large}; }
  svg { width: 20px; height: 20px; }
`;

const UsersSection = styled.div``;

const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #ef4444;
  font-size: 16px;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
`;

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  @media (max-width: 1200px) { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
  @media (max-width: 992px) { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 15px; }
`;

const UserCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
  transition: all 0.3s ease;
  @media (max-width: 768px) { padding: 15px; border-radius: 10px; }
  @media (max-width: 480px) { padding: 12px; }
  &:hover { transform: translateY(-2px); box-shadow: ${props => props.theme.shadows.medium}; }
  @media (max-width: 768px) { &:hover { transform: none; } }
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const UserName = styled.h4`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  margin-right: 10px;
`;

const UserActions = styled.div`
  display: flex;
  gap: 8px;
`;

const ActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: ${props => props.theme.colors.glass};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover { transform: scale(1.1); }
  &:nth-child(1):hover { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
  &:nth-child(2):hover { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
  svg { width: 16px; height: 16px; color: ${props => props.theme.colors.textSecondary}; }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DetailIcon = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const DetailText = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  word-break: break-word;
`;

const RoleBadge = styled.span<{ role: 'admin' | 'cashier' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${props => props.role === 'admin' ? `background: rgba(239, 68, 68, 0.1); color: #ef4444;` : `background: rgba(59, 130, 246, 0.1); color: #3b82f6;`}
`;

const UserMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
`;

const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.glassBorder};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px;
  background: ${props => props.theme.colors.glass};
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
`;

const Td = styled.td`
  padding: 16px;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  border-bottom: 1px solid ${props => props.theme.colors.glassBorder};
`;

const Tr = styled.tr`
  &:last-child td { border-bottom: none; }
  &:hover { background: ${props => props.theme.colors.glass}; }
`;

/* ---------- Component ---------- */

const UsersPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    const saved = localStorage.getItem('users-view-mode');
    return saved === 'list' || saved === 'grid' ? saved : 'grid';
  });

  useEffect(() => { fetchUsers(); }, []);
  useEffect(() => { localStorage.setItem('users-view-mode', viewMode); }, [viewMode]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await usersAPI.getAll();
      if (response.success && response.data) {
        setUsers(response.data);
      } else {
        setError(t('users.loading') ?? 'Failed to load users');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t('users.loading') ?? 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => navigate('/users/edit/new');
  const handleEditUser = (user: User) => navigate(`/users/edit/${user.userid}`);

  const handleDeleteUser = (userId: string) => {
    const userToDelete = users.find(u => u.userid === userId);
    if (!userToDelete) return;
    toast((toastInstance) => (
      <div>
        <div style={{ marginBottom: '8px', fontWeight: '500' }}>{t('users.delete_confirm')}</div>
        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>{t('users.delete_confirm')}</div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button onClick={() => toast.dismiss(toastInstance.id)} style={{ padding: '6px 12px', border: '1px solid #d1d5db', background: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>{t('common.cancel')}</button>
          <button onClick={() => { toast.dismiss(toastInstance.id); performDelete(userToDelete); }} style={{ padding: '6px 12px', border: 'none', background: '#ef4444', color: 'white', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>{t('users.delete')}</button>
        </div>
      </div>
    ), { duration: 10000, style: { background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px' } });
  };

  const performDelete = async (user: User) => {
    toast.promise(
      usersAPI.delete(user.userid),
      {
        loading: t('users.delete'),
        success: (res) => {
          if (res.success) {
            setUsers(users.filter(u => u.userid !== user.userid));
            return t('users.delete_success');
          } else {
            throw new Error(t('users.delete_error'));
          }
        },
        error: (err) => err instanceof Error ? err.message : t('users.delete_error')
      }
    );
  };

  return (
    <PageContainer>
      <PageTitle>{t('users.title')}</PageTitle>
      <PageContent>
        <ControlsSection>
          <ViewToggle>
            <ViewToggleButton $active={viewMode === 'grid'} onClick={() => setViewMode('grid')}>
              <HiOutlineViewGrid /> {t('users.grid') ?? 'Grid'}
            </ViewToggleButton>
            <ViewToggleButton $active={viewMode === 'list'} onClick={() => setViewMode('list')}>
              <HiOutlineViewList /> {t('users.list') ?? 'List'}
            </ViewToggleButton>
          </ViewToggle>
          <AddButton onClick={handleAddUser}>
            <HiOutlinePlus /> {t('users.add_user')}
          </AddButton>
        </ControlsSection>
        <UsersSection>
          <SectionTitle>{t('users.title')} ({users.length})</SectionTitle>
          {loading ? (
            <LoadingMessage>{t('users.loading')}</LoadingMessage>
          ) : error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : users.length === 0 ? (
            <EmptyMessage>{t('users.no_users')}</EmptyMessage>
          ) : viewMode === 'grid' ? (
            <UsersGrid>
              {users.map(user => (
                <UserCard key={user.userid}>
                  <UserHeader>
                    <UserName>{user.username}</UserName>
                    <UserActions>
                      <ActionButton onClick={() => handleEditUser(user)} title={t('users.edit')}>
                        <HiOutlinePencil />
                      </ActionButton>
                      <ActionButton onClick={() => handleDeleteUser(user.userid)} title={t('users.delete')}>
                        <HiOutlineTrash />
                      </ActionButton>
                    </UserActions>
                  </UserHeader>
                  <UserDetails>
                    <UserDetail>
                      <DetailIcon><HiOutlineMail /></DetailIcon>
                      <DetailText>{user.email}</DetailText>
                    </UserDetail>
                    <UserDetail>
                      <DetailIcon><HiOutlineShieldCheck /></DetailIcon>
                      <RoleBadge role={user.role}>{user.role}</RoleBadge>
                    </UserDetail>
                  </UserDetails>
                  <UserMeta>
                    <span>{t('users.created') ?? 'Created'}: {new Date(user.created_at).toLocaleDateString()}</span>
                    <span>{t('users.updated') ?? 'Updated'}: {new Date(user.updated_at).toLocaleDateString()}</span>
                  </UserMeta>
                </UserCard>
              ))}
            </UsersGrid>
          ) : (
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <Th>{t('users.username')}</Th>
                    <Th>{t('users.email')}</Th>
                    <Th>{t('users.role')}</Th>
                    <Th>{t('users.created')}</Th>
                    <Th>{t('users.updated')}</Th>
                    <Th>{t('users.actions')}</Th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <Tr key={user.userid}>
                      <Td>
                        <div style={{ fontWeight: 600, color: 'inherit' }}>{user.username}</div>
                      </Td>
                      <Td>{user.email}</Td>
                      <Td>
                        <RoleBadge role={user.role}>{user.role}</RoleBadge>
                      </Td>
                      <Td>{new Date(user.created_at).toLocaleDateString()}</Td>
                      <Td>{new Date(user.updated_at).toLocaleDateString()}</Td>
                      <Td>
                        <UserActions>
                          <ActionButton onClick={() => handleEditUser(user)} title={t('users.edit')}>
                            <HiOutlinePencil />
                          </ActionButton>
                          <ActionButton onClick={() => handleDeleteUser(user.userid)} title={t('users.delete')}>
                            <HiOutlineTrash />
                          </ActionButton>
                        </UserActions>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          )}
        </UsersSection>
      </PageContent>
    </PageContainer>
  );
};

export default UsersPage;