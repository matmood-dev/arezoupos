// Frontend types (matching backend API)
export interface Product {
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

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
  overridePrice?: number;
}

export interface Order {
  orderid: number;
  customerid?: number;
  branchid?: number;
  branch_name?: string;
  branch_address?: string;
  branch_phone?: string;
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
  name: string;
  category: string;
  image?: string;
  note?: string;
}

export interface User {
  userid: number;
  username: string;
  email: string;
  role: 'admin' | 'cashier';
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

// API Request types
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

export interface CreateItemRequest {
  name: string;
  description?: string;
  price: number;
  category: string;
  stock_quantity: number;
  active?: boolean;
}

export interface UpdateItemRequest {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
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

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

// Auth types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}