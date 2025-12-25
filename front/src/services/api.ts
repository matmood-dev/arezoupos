/* eslint-disable @typescript-eslint/no-explicit-any */

// API Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Generic API response type
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

// API Error class
export class ApiError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

// Helper to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

// Helper to make API requests
const apiRequest = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  // Add authorization header if token exists
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Add Content-Type for JSON requests (but not for FormData)
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(response.status, data.message || 'Request failed');
    }

    return data as ApiResponse<T>;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    console.error('API Request Error:', error);
    throw new ApiError(500, error instanceof Error ? error.message : 'Network error');
  }
};

// Authentication API
export const authAPI = {
  login: async (email: string, password: string): Promise<ApiResponse<{
    user: User;
    token: string;
    refreshToken: string;
  }>> => {
    return apiRequest<{ user: User; token: string; refreshToken: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username: email, password }),
    });
  },

  refresh: async (): Promise<ApiResponse<{ token: string }>> => {
    return apiRequest<{ token: string }>('/api/auth/refresh', {
      method: 'POST',
    });
  },
};

// Items API
export const itemsAPI = {
  getAll: async (params?: { category?: string; search?: string; includeArchived?: boolean; archivedOnly?: boolean }): Promise<ApiResponse<Item[]>> => {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);
    if (params?.includeArchived) queryParams.append('includeArchived', 'true');
    if (params?.archivedOnly) queryParams.append('archivedOnly', 'true');
    
    const query = queryParams.toString();
    return apiRequest<Item[]>(`/api/items${query ? `?${query}` : ''}`);
  },

  getById: async (id: number): Promise<ApiResponse<Item>> => {
    return apiRequest<Item>(`/api/items/${id}`);
  },

  create: async (formData: FormData): Promise<ApiResponse<Item>> => {
    return apiRequest<Item>('/api/items', {
      method: 'POST',
      body: formData,
    });
  },

  update: async (id: number, formData: FormData): Promise<ApiResponse<Item>> => {
    return apiRequest<Item>(`/api/items/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  delete: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/items/${id}`, {
      method: 'DELETE',
    });
  },

  unarchive: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/items/${id}/unarchive`, {
      method: 'PUT',
    });
  },

  permanentDelete: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/items/${id}/permanent`, {
      method: 'DELETE',
    });
  },
};

// Users API
export const usersAPI = {
  getAll: async (): Promise<ApiResponse<User[]>> => {
    return apiRequest<User[]>('/api/users');
  },

  getById: async (id: string): Promise<ApiResponse<User>> => {
    return apiRequest<User>(`/api/users/${id}`);
  },

  create: async (user: CreateUserRequest): Promise<ApiResponse<User>> => {
    return apiRequest<User>('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  update: async (id: string, user: UpdateUserRequest): Promise<ApiResponse<User>> => {
    return apiRequest<User>(`/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    return apiRequest<void>(`/api/users/${id}`, {
      method: 'DELETE',
    });
  },
};

// Customers API
export const customersAPI = {
  getAll: async (params?: { archivedOnly?: boolean }): Promise<ApiResponse<Customer[]>> => {
    const queryParams = new URLSearchParams();
    if (params?.archivedOnly) queryParams.append('archivedOnly', 'true');
    
    const query = queryParams.toString();
    return apiRequest<Customer[]>(`/api/customers${query ? `?${query}` : ''}`);
  },

  getById: async (id: number): Promise<ApiResponse<Customer>> => {
    return apiRequest<Customer>(`/api/customers/${id}`);
  },

  create: async (customer: CreateCustomerRequest): Promise<ApiResponse<Customer>> => {
    return apiRequest<Customer>('/api/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  },

  update: async (id: number, customer: UpdateCustomerRequest): Promise<ApiResponse<Customer>> => {
    return apiRequest<Customer>(`/api/customers/${id}`, {
      method: 'PUT',
      body: JSON.stringify(customer),
    });
  },

  delete: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/customers/${id}`, {
      method: 'DELETE',
    });
  },

  unarchive: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/customers/${id}/unarchive`, {
      method: 'PUT',
    });
  },

  permanentDelete: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/customers/${id}/permanent`, {
      method: 'DELETE',
    });
  },
};

// Orders API
export const ordersAPI = {
  getAll: async (): Promise<ApiResponse<Order[]>> => {
    return apiRequest<Order[]>('/api/orders');
  },

  getById: async (id: number): Promise<ApiResponse<Order>> => {
    return apiRequest<Order>(`/api/orders/${id}`);
  },

  create: async (order: CreateOrderRequest): Promise<ApiResponse<Order>> => {
    return apiRequest<Order>('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  },

  update: async (id: number, order: UpdateOrderRequest): Promise<ApiResponse<Order>> => {
    return apiRequest<Order>(`/api/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify(order),
    });
  },

  delete: async (id: number): Promise<ApiResponse<void>> => {
    return apiRequest<void>(`/api/orders/${id}`, {
      method: 'DELETE',
    });
  },

  // Receipt functions
  getReceiptUrl: (id: number) => `${API_BASE_URL}/api/orders/${id}/receipt`,
  
  getReceiptHtml: async (id: number): Promise<string> => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/orders/${id}/receipt`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.text();
  },
  
  openReceiptInNewTab: async (id: number) => {
    const response = await apiRequest<{ token: string; url: string; redirectUrl: string }>(
      `/api/orders/${id}/receipt/token`,
      { method: 'POST' }
    );
    if (response.success && response.data) {
      window.open(response.data.redirectUrl, '_blank');
    }
    return true;
  },
  
  createReceiptDownloadToken: async (id: number): Promise<ApiResponse<{ token: string; url: string; redirectUrl: string }>> => {
    return apiRequest<{ token: string; url: string; redirectUrl: string }>(
      `/api/orders/${id}/receipt/token`,
      { method: 'POST' }
    );
  },
  
  getReceiptPdfUrl: (id: number) => `${API_BASE_URL}/api/orders/${id}/receipt.pdf`,
  
  getReceiptPdfBlob: async (id: number): Promise<Blob> => {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/api/orders/${id}/receipt.pdf`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return response.blob();
  },
  
  openReceiptPdfInNewTab: async (id: number) => {
    window.open(`${API_BASE_URL}/api/orders/${id}/receipt.pdf`, '_blank');
    return true;
  },
  
  downloadReceiptPdf: async (id: number, filename?: string) => {
    const blob = await ordersAPI.getReceiptPdfBlob(id);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || `receipt-${id}.pdf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
};

// Reports API
export interface ReportsSummary {
  totals: { users: number; customers: number; items: number; orders: number };
  revenue: number;
  topItems: { itemid: number; name: string; total_quantity: number }[];
  salesByDay: { date: string; total_sales: number }[];
  lowStock: { itemid: number; name: string; stock_quantity: number }[];
  recentOrders: { orderid: number; total_amount: number; status: string; created_at: string; customer_name?: string }[];
}

export const reportsAPI = {
  getSummary: async (threshold: number = 10): Promise<ApiResponse<ReportsSummary>> => {
    return apiRequest<ReportsSummary>(`/api/reports?threshold=${threshold}`);
  },

  getOrdersByDateRange: async (startIso: string, endIso: string): Promise<ApiResponse<{ orderid: number; created_at: string; total_amount: number; status: string; customer_name?: string }[]>> => {
    return apiRequest<{ orderid: number; created_at: string; total_amount: number; status: string; customer_name?: string }[]>(
      `/api/reports/orders?startDate=${encodeURIComponent(startIso)}&endDate=${encodeURIComponent(endIso)}`
    );
  }
};

// Settings API
export const settingsAPI = {
  getSettings: async (): Promise<ApiResponse<Settings>> => {
    return apiRequest<Settings>('/api/settings');
  },

  updateSettings: async (settings: UpdateSettingsRequest | FormData): Promise<ApiResponse<Settings>> => {
    if (settings instanceof FormData) {
      return apiRequest<Settings>('/api/settings', {
        method: 'PUT',
        body: settings,
      });
    }
    return apiRequest<Settings>('/api/settings', {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  },

  getBranches: async (params?: { archivedOnly?: boolean }): Promise<ApiResponse<Branch[]>> => {
    const queryParams = new URLSearchParams();
    if (params?.archivedOnly) queryParams.append('archivedOnly', 'true');
    
    const query = queryParams.toString();
    return apiRequest<Branch[]>(`/api/settings/branches${query ? `?${query}` : ''}`);
  },

  createBranch: async (branch: CreateBranchRequest): Promise<ApiResponse<Branch>> => {
    return apiRequest<Branch>('/api/settings/branches', {
      method: 'POST',
      body: JSON.stringify(branch),
    });
  },

  updateBranch: async (id: number, branch: UpdateBranchRequest): Promise<ApiResponse<Branch>> => {
    return apiRequest<Branch>(`/api/settings/branches/${id}`, {
      method: 'PUT',
      body: JSON.stringify(branch),
    });
  },

  deleteBranch: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/settings/branches/${id}`, {
      method: 'DELETE',
    });
  },

  unarchiveBranch: async (id: number): Promise<ApiResponse<null>> => {
    return apiRequest<null>(`/api/settings/branches/${id}/unarchive`, {
      method: 'PUT',
    });
  },

  getCategories: async (): Promise<ApiResponse<ItemCategory[]>> => {
    return apiRequest<ItemCategory[]>('/api/settings/categories');
  },

  createCategory: async (category: CreateCategoryRequest): Promise<ApiResponse<ItemCategory>> => {
    return apiRequest<ItemCategory>('/api/settings/categories', {
      method: 'POST',
      body: JSON.stringify(category),
    });
  },

  deleteCategory: async (id: number): Promise<ApiResponse<void>> => {
    return apiRequest<void>(`/api/settings/categories/${id}`, {
      method: 'DELETE',
    });
  },
};

// Type definitions
export interface User {
  userid: string;
  username: string;
  email: string;
  role: 'admin' | 'cashier';
  created_at: string;
  updated_at: string;
}

export interface Item {
  itemid: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  stock_quantity: number;
  image?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Customer {
  customerid: number;
  name: string;
  email?: string;
  phone: string;
  address?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  orderid: number;
  customerid?: number;
  branchid?: number;
  branch_name?: string;
  branch_phone?: string;
  branch_address?: string;
  branch_cr?: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  customer_address?: string;
  total_amount: number;
  notes?: string;
  payment_method?: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  itemid: number;
  quantity: number;
  price: number;
  name?: string;
  category?: string;
  image?: string;
  note?: string;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role?: 'admin' | 'cashier';
}

export interface UpdateUserRequest {
  username?: string;
  email?: string;
  role?: 'admin' | 'cashier';
  password?: string;
  currentPassword?: string;
}

export interface CreateItemRequest {
  name: string;
  description?: string;
  price: number;
  category: string;
  categoryid?: number;
  stock_quantity: number;
  active?: boolean;
}

export interface UpdateItemRequest {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  categoryid?: number;
  stock_quantity?: number;
  active?: boolean;
}

export interface CreateCustomerRequest {
  name: string;
  email?: string;
  phone: string;
  address?: string;
  active?: boolean;
}

export interface UpdateCustomerRequest {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  active?: boolean;
}

export interface CreateOrderRequest {
  customerid?: number;
  branchid?: number;
  items: {
    itemid: number;
    quantity: number;
    note?: string;
    price?: number;
  }[];
  notes?: string;
  paymentMethod?: string;
}

export interface UpdateOrderRequest {
  status: 'pending' | 'completed' | 'cancelled';
}

export interface Settings {
  settingid: number;
  shop_name: string;
  shop_logo?: string;
  shop_email?: string;
  vat_registration_number?: string;
  bank_name?: string;
  bank_account_name?: string;
  iban_number?: string;
  account_number?: string;
  swift_code?: string;
  currency: string;
  tax_rate: number;
  receipt_footer: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateSettingsRequest {
  shop_name?: string;
  shop_logo?: string;
  shop_email?: string;
  vat_registration_number?: string;
  bank_name?: string;
  bank_account_name?: string;
  iban_number?: string;
  account_number?: string;
  swift_code?: string;
  currency?: string;
  tax_rate?: number;
  receipt_footer?: string;
}

export interface Branch {
  branchid: number;
  name: string;
  address: string;
  phone?: string;
  cr?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateBranchRequest {
  name: string;
  address: string;
  phone?: string;
  cr?: string;
  active?: boolean;
}

export interface UpdateBranchRequest {
  name?: string;
  address?: string;
  phone?: string;
  cr?: string;
  active?: boolean;
}

export interface ItemCategory {
  categoryid: number;
  name: string;
  created_at: string;
}

export interface CreateCategoryRequest {
  name: string;
}
