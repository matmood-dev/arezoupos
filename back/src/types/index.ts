// User types
export interface User {
  userid: number;
  username: string;
  email: string;
  role: 'admin' | 'cashier';
  created_at: Date;
  updated_at: Date;
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
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: Omit<User, 'created_at' | 'updated_at'>;
    token: string;
    refreshToken: string;
  };
}

// Item types
export interface Item {
  itemid: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  stock_quantity: number;
  image?: string; // Now stores file path like '/uploads/filename.jpg'
  created_at: Date;
  updated_at: Date;
}

export interface CreateItemRequest {
  name: string;
  description?: string;
  price: number;
  category: string;
  stock_quantity: number;
  // Image is now handled via multipart/form-data file upload
}

export interface UpdateItemRequest {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  stock_quantity?: number;
  // Image is now handled via multipart/form-data file upload
}

// Customer types
export interface Customer {
  customerid: number;
  name: string;
  email?: string;
  phone: string;
  address?: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateCustomerRequest {
  name: string;
  email?: string;
  phone: string;
  address?: string;
}

export interface UpdateCustomerRequest {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

// Order types
export interface OrderItem {
  itemid: number;
  quantity: number;
  price: number;
}

export interface Order {
  orderid: number;
  customerid?: number;
  branchid?: number;
  items: OrderItem[];
  total_amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: Date;
  updated_at: Date;
}

export interface CreateOrderRequest {
  customerid?: number;
  branchid?: number;
  items: OrderItem[];
}

export interface UpdateOrderRequest {
  status?: 'pending' | 'completed' | 'cancelled';
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// JWT payload
export interface JWTPayload {
  userid: number;
  username: string;
  role: 'admin' | 'cashier';
}

// Request types with user info
export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
}

// Settings types
export interface Settings {
  settingid: number;
  shop_name: string;
  shop_logo?: string;
  shop_email?: string;
  vat_registration_number?: string;
  currency: string;
  tax_rate: number;
  receipt_footer: string;
  bank_name?: string;
  bank_account_name?: string;
  iban_number?: string;
  account_number?: string;
  swift_code?: string;
  created_at: Date;
  updated_at: Date;
}

export interface UpdateSettingsRequest {
  shop_name?: string;
  shop_logo?: string;
  shop_email?: string;
  vat_registration_number?: string;
  currency?: string;
  tax_rate?: number;
  receipt_footer?: string;
  bank_name?: string;
  bank_account_name?: string;
  iban_number?: string;
  account_number?: string;
  swift_code?: string;
}

// Branch types
export interface Branch {
  branchid: number;
  name: string;
  address: string;
  phone?: string;
  cr?: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
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
  phone?: string;
  active?: boolean;
}

// Item Category types
export interface ItemCategory {
  categoryid: number;
  name: string;
  created_at: Date;
}

export interface CreateCategoryRequest {
  name: string;
}