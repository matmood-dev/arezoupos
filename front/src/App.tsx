import { Suspense, lazy, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PosPage = lazy(() => import('./pages/PosPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const InventoryPage = lazy(() => import('./pages/InventoryPage'));
const EditItemPage = lazy(() => import('./pages/EditItemPage'));
const CustomersPage = lazy(() => import('./pages/CustomersPage'));
const EditCustomerPage = lazy(() => import('./pages/EditCustomerPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const EditOrderPage = lazy(() => import('./pages/EditOrderPage'));
const ReceiptPage = lazy(() => import('./pages/ReceiptPage'));
const InvoicePage = lazy(() => import('./pages/InvoicePage'));
const QuotationPage = lazy(() => import('./pages/QuotationPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage'));
const UsersPage = lazy(() => import('./pages/UsersPage'));
const EditUserPage = lazy(() => import('./pages/EditUserPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
import { GlobalStyles } from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useTranslation } from 'react-i18next';
import Loader from './components/Loader';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (isLoading) {
    return (
      <ThemeProvider>
        <GlobalStyles />
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <Loader size={140} ariaLabel={t('common.loading')} />
        </div>
      </ThemeProvider>
    );
  }

  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <GlobalStyles />
        <LoginPage />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Suspense fallback={<div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}><Loader size={140} ariaLabel={t('common.loading')} /></div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/pos" replace />} />
          <Route path="/pos" element={
            <Layout activePage="pos" title={t('sidebar.pos')}>
              <PosPage />
            </Layout>
          } />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/inventory" element={
            <Layout activePage="inventory" title={t('inventory.title')}>
              <InventoryPage />
            </Layout>
          } />
          <Route path="/inventory/edit/:id" element={
            <Layout activePage="inventory" title={t('editItem.title')}>
              <EditItemPage />
            </Layout>
          } />
          <Route path="/customers" element={
            <Layout activePage="customers" title={t('customers.title')}>
              <CustomersPage />
            </Layout>
          } />
          <Route path="/customers/edit/:id" element={
            <Layout activePage="customers" title={t('editCustomer.title')}>
              <EditCustomerPage />
            </Layout>
          } />
          <Route path="/orders" element={
            <Layout activePage="orders" title={t('orders.title')}>
              <OrdersPage />
            </Layout>
          } />
          <Route path="/orders/edit/:id" element={
            <Layout activePage="orders" title={t('editOrder.title')}>
              <EditOrderPage />
            </Layout>
          } />
          <Route path="/orders/receipt/:id" element={
            <Layout activePage="orders" title={t('orders.receipt')}>
              <ReceiptPage />
            </Layout>
          } />
          <Route path="/orders/invoice/:id" element={
            <Layout activePage="orders" title={t('orders.invoice')}>
              <InvoicePage />
            </Layout>
          } />
          <Route path="/orders/quotation/:id" element={
            <Layout activePage="orders" title={t('orders.quotation')}>
              <QuotationPage />
            </Layout>
          } />
          <Route path="/orders/delivery/:id" element={
            <Layout activePage="orders" title={t('orders.delivery')}>
              <DeliveryPage />
            </Layout>
          } />
          <Route path="/users" element={
            <Layout activePage="users" title={t('users.title')}>
              <UsersPage />
            </Layout>
          } />
          <Route path="/users/edit/:id" element={
            <Layout activePage="users" title={t('editUser.title_edit')}>
              <EditUserPage />
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout activePage="settings" title={t('settings.title')}>
              <SettingsPage />
            </Layout>
          } />
          <Route path="/reports" element={
            <Layout activePage="reports" title={t('reports.title')}>
              <ReportsPage />
            </Layout>
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;