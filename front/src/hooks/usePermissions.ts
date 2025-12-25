import { useAuth } from './useAuth';

export const usePermissions = () => {
  const { user } = useAuth();

  const isAdmin = user?.role === 'admin';
  const isCashier = user?.role === 'cashier';

  return {
    isAdmin,
    isCashier,
    canViewReports: isAdmin,
    canViewUsers: isAdmin,
    canManageUsers: isAdmin,
    canDeleteItems: isAdmin,
    canDeleteCustomers: isAdmin,
    canDeleteOrders: isAdmin,
    canViewItems: true, // Both admin and cashier can view
    canManageItems: true, // Both can add/edit items
    canViewCustomers: true,
    canManageCustomers: true,
    canViewOrders: true,
    canManageOrders: true,
  };
};