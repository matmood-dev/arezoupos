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
export interface Item {
    itemid: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    stock_quantity: number;
    image?: string;
    created_at: Date;
    updated_at: Date;
}
export interface CreateItemRequest {
    name: string;
    description?: string;
    price: number;
    category: string;
    stock_quantity: number;
}
export interface UpdateItemRequest {
    name?: string;
    description?: string;
    price?: number;
    category?: string;
    stock_quantity?: number;
}
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
export interface OrderItem {
    itemid: number;
    quantity: number;
    price: number;
    note?: string;
}
export interface Order {
    orderid: number;
    customerid?: number;
    branchid?: number;
    userid?: number;
    items: OrderItem[];
    total_amount: number;
    status: 'pending' | 'completed' | 'cancelled';
    created_at: Date;
    updated_at: Date;
    user_name?: string;
    user_email?: string;
}
export interface CreateOrderRequest {
    customerid?: number;
    branchid?: number;
    items: OrderItem[];
}
export interface UpdateOrderRequest {
    status?: 'pending' | 'completed' | 'cancelled';
}
export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}
export interface JWTPayload {
    userid: number;
    username: string;
    role: 'admin' | 'cashier';
}
export interface AuthenticatedRequest extends Request {
    user?: JWTPayload;
}
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
export interface ItemCategory {
    categoryid: number;
    name: string;
    created_at: Date;
}
export interface CreateCategoryRequest {
    name: string;
}
//# sourceMappingURL=index.d.ts.map