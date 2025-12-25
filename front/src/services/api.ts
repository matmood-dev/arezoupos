/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from './supabase';

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

// Helper to handle Supabase errors
const handleSupabaseError = (error: unknown) => {
  console.error('Supabase Error:', error);
  let code = 500;
  let message = 'An error occurred';
  if (error && typeof error === 'object') {
    const e = error as Record<string, unknown>;
    const rawCode = e['code'];
    if (typeof rawCode === 'number') code = rawCode;
    else if (typeof rawCode === 'string') code = parseInt(rawCode, 10) || code;
    if (typeof e['message'] === 'string') message = e['message'] as string;
  }
  throw new ApiError(code, message);
};

// Helper to upload image
const uploadImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(filePath);

  return data.publicUrl;
};

// Helper to delete an image when we only have the public URL or file path
const deleteImageByUrl = async (imageUrl?: string | null) => {
  if (!imageUrl) return;
  try {
    // Supabase public URL usually contains '/images/<path>' for the images bucket
    const parts = imageUrl.split('/images/');
    if (parts.length < 2) {
      // Not a recognized path; nothing to delete
      return;
    }

    // Extract file path and strip query params if present
    const filePath = parts[parts.length - 1].split('?')[0];
    if (!filePath) return;

    const { error } = await supabase.storage.from('images').remove([filePath]);
    if (error) {
      console.error('Failed to remove image from storage:', error);
    }
  } catch (err) {
    console.error('Error deleting image by URL', err);
  }
};

// Authentication API
export const authAPI = {
  login: async (email: string, password: string): Promise<ApiResponse<{
    user: User;
    token: string;
    refreshToken: string;
  }>> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) handleSupabaseError(error);
    if (!data.user || !data.session) throw new ApiError(401, 'Login failed');

    // Fetch user role from public.users
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('userid', data.user.id)
      .single();

    if (userError) handleSupabaseError(userError);

    return {
      success: true,
      message: 'Login successful',
      data: {
        user: { ...userData, email: data.user.email! },
        token: data.session.access_token,
        refreshToken: data.session.refresh_token,
      },
    };
  },

  refresh: async (): Promise<ApiResponse<{ token: string }>> => {
    const { data, error } = await supabase.auth.getSession();
    if (error) handleSupabaseError(error);
    if (!data.session) throw new ApiError(401, 'No session');

    return {
      success: true,
      message: 'Token refreshed',
      data: { token: data.session.access_token },
    };
  },
};

// Items API
export const itemsAPI = {
  getAll: async (params?: { category?: string; search?: string; includeArchived?: boolean; archivedOnly?: boolean }): Promise<ApiResponse<Item[]>> => {
    let query = supabase.from('items').select('*');

    if (params?.category) {
      query = query.eq('category', params.category);
    }

    if (params?.search) {
      query = query.or(`name.ilike.%${params.search}%,description.ilike.%${params.search}%`);
    }

    // Filter based on archived status
    if (params?.archivedOnly) {
      query = query.eq('active', false);
    } else if (!params?.includeArchived) {
      query = query.eq('active', true);
    }

    const { data, error } = await query.order('name');
    if (error) handleSupabaseError(error);

    return { success: true, message: 'Items retrieved', data: data as Item[] };
  },

  getById: async (id: number): Promise<ApiResponse<Item>> => {
    const { data, error } = await supabase.from('items').select('*').eq('itemid', id).single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Item retrieved', data: data as Item };
  },

  create: async (formData: FormData): Promise<ApiResponse<Item>> => {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);

    // Handle both 'categoryid' and 'category' from FormData
    const categoryId = formData.get('categoryid') as string;
    const category = formData.get('category') as string;

    let categoryValue = category;

    // If categoryId is provided (numeric), fetch the category name from the item_categories table
    if (categoryId && /^\d+$/.test(categoryId)) {
      const { data: categoryData, error: categoryError } = await supabase
        .from('item_categories')
        .select('name')
        .eq('categoryid', parseInt(categoryId))
        .single();

      if (categoryError) {
        console.error('Error fetching category:', categoryError);
        throw new Error('Invalid category selected');
      }

      categoryValue = categoryData.name;
    }

    if (!categoryValue) {
      throw new Error('Category is required');
    }

    const stock_quantity = parseInt(formData.get('stock_quantity') as string);
    const imageFile = formData.get('image') as File;
    const active = formData.has('active') ? formData.get('active') === 'true' : true; // Default to true if not specified

    let imageUrl = '';
    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
    }

    const { data, error } = await supabase
      .from('items')
      .insert([{ name, description, price, category: categoryValue, stock_quantity, image: imageUrl, active }])
      .select()
      .single();

    if (error) handleSupabaseError(error);
    return { success: true, message: 'Item created', data: data as Item };
  },

  update: async (id: number, formData: FormData): Promise<ApiResponse<Item>> => {
    const updates: any = {};
    if (formData.has('name')) updates.name = formData.get('name') as string;
    if (formData.has('description')) updates.description = formData.get('description') as string;
    if (formData.has('price')) updates.price = parseFloat(formData.get('price') as string);
    // Handle both 'categoryid' and 'category' from FormData (same as create)
    if (formData.has('categoryid') || formData.has('category')) {
      const categoryId = formData.get('categoryid') as string;
      const category = formData.get('category') as string;

      let categoryValue = category;

      // If categoryId is provided (numeric), fetch the category name from the item_categories table
      if (categoryId && /^\d+$/.test(categoryId)) {
        const { data: categoryData, error: categoryError } = await supabase
          .from('item_categories')
          .select('name')
          .eq('categoryid', parseInt(categoryId))
          .single();

        if (categoryError) {
          console.error('Error fetching category:', categoryError);
          throw new Error('Invalid category selected');
        }

        categoryValue = categoryData.name;
      }

      if (categoryValue) {
        updates.category = categoryValue;
      }
    }
    if (formData.has('stock_quantity')) updates.stock_quantity = parseInt(formData.get('stock_quantity') as string);
    if (formData.has('active')) updates.active = formData.get('active') === 'true';

    const imageFile = formData.get('image') as File;
    if (imageFile && imageFile.size > 0) {
      // Upload the new image first
      const newImageUrl = await uploadImage(imageFile);

      // Fetch existing image for this item (if any)
      try {
        const { data: existingItem } = await supabase.from('items').select('image').eq('itemid', id).single();
        const oldImageUrl = existingItem?.image;

        // Only attempt delete if there was an existing image and it's different from the new one
        if (oldImageUrl && oldImageUrl !== newImageUrl) {
          await deleteImageByUrl(oldImageUrl);
        }
      } catch (err) {
        // best-effort: if we fail to fetch existing image, continue and set the new image
        console.error('Could not fetch existing item image to delete', err);
      }

      updates.image = newImageUrl;
    }

    const { data, error } = await supabase
      .from('items')
      .update(updates)
      .eq('itemid', id)
      .select()
      .single();

    if (error) handleSupabaseError(error);
    return { success: true, message: 'Item updated', data: data as Item };
  },

  delete: async (id: number): Promise<ApiResponse<null>> => {
    // Archive the item instead of deleting it
    const { error } = await supabase
      .from('items')
      .update({ active: false })
      .eq('itemid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Item archived' };
  },

  unarchive: async (id: number): Promise<ApiResponse<null>> => {
    const { error } = await supabase
      .from('items')
      .update({ active: true })
      .eq('itemid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Item unarchived successfully', data: null };
  },

  permanentDelete: async (id: number): Promise<ApiResponse<null>> => {
    // Fetch item (to delete image if present)
    const { data: itemData, error: fetchErr } = await supabase.from('items').select('name, category, image').eq('itemid', id).single();
    if (fetchErr) handleSupabaseError(fetchErr);

    // Try to delete the item directly first
    let { error: deleteErr } = await supabase.from('items').delete().eq('itemid', id);
    if (!deleteErr) {
      // Deleted successfully
      try { await deleteImageByUrl(itemData?.image); } catch (e) { console.warn('Failed to delete item image from storage', e); }
      return { success: true, message: 'Item permanently deleted', data: null };
    }

    // If delete failed, attempt a safe fallback: snapshot related order_items and nullify the itemid, then retry delete
    console.warn('Initial permanent delete failed, attempting fallback to preserve order history and unlink item:', deleteErr);

    try {
      // 1) Snapshot item fields onto order_items (best-effort; columns may not exist if migration hasn't been run)
      try {
        await supabase.from('order_items').update({ item_name: itemData?.name ?? null, item_category: itemData?.category ?? null, item_image: itemData?.image ?? null }).eq('itemid', id);
      } catch (e) {
        console.warn('Could not write snapshot fields to order_items (columns may be missing):', e);
      }

      // 2) Nullify itemid references so FK won't block delete (requires itemid to be nullable)
      const { error: nullErr } = await supabase.from('order_items').update({ itemid: null }).eq('itemid', id);
      if (nullErr) {
        // If we can't set null (e.g., column NOT NULL), return a helpful error
        console.error('Failed to nullify order_items.itemid:', nullErr);
        throw new Error('Failed to unlink item from related order items. Ensure migration was applied to make order_items.itemid nullable and add snapshot columns. See migrations/2025_12_18_order_items_snapshot_and_fk.sql');
      }

      // 3) Retry delete
      const { error: deleteErr2 } = await supabase.from('items').delete().eq('itemid', id);
      if (deleteErr2) {
        console.error('Permanent delete retry failed:', deleteErr2);
        handleSupabaseError(deleteErr2);
      }

      // 4) Delete image if present
      try { await deleteImageByUrl(itemData?.image); } catch (e) { console.warn('Failed to delete item image from storage', e); }

      return { success: true, message: 'Item permanently deleted (fallback path)', data: null };
    } catch (e) {
      // Surface a helpful message
      if (e instanceof Error) throw new ApiError(500, e.message);
      throw new ApiError(500, 'Permanent delete failed');
    }
  },
};

// Users API
export const usersAPI = {
  getAll: async (): Promise<ApiResponse<User[]>> => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Users retrieved', data: data as User[] };
  },

  getById: async (id: string): Promise<ApiResponse<User>> => {
    const { data, error } = await supabase.from('users').select('*').eq('userid', id).single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'User retrieved', data: data as User };
  },

  create: async (user: CreateUserRequest): Promise<ApiResponse<User>> => {
    // Create a Supabase Auth user via a Supabase Edge Function (server-side) which uses the service_role key.
    // Set VITE_SUPABASE_CREATE_USER_URL to your function URL (e.g. https://<project>.functions.supabase.co/create-auth-user)
    const functionUrl = import.meta.env.VITE_SUPABASE_CREATE_USER_URL || '/api/users/supabase';
    const token = localStorage.getItem('token');
    const res = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify(user)
    });

    const json = await res.json();
    // Return the server body directly so callers (UI) can display validation errors inline.
    return json as ApiResponse<User>;
  },

  update: async (id: string, user: UpdateUserRequest): Promise<ApiResponse<User>> => {
    const { password, ...profileUpdates } = user;

    // Update profile in public.users
    const { data, error } = await supabase
      .from('users')
      .update(profileUpdates)
      .eq('userid', id)
      .select()
      .single();

    if (error) handleSupabaseError(error);

    // Handle password update if provided
    if (password) {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData.session?.user.id === id) {
        const { error: authError } = await supabase.auth.updateUser({ password });
        if (authError) console.error('Error updating auth password:', authError);
      } else {
        console.warn('Cannot update other user\'s password from client-side.');
      }
    }

    return { success: true, message: 'User updated', data: data as User };
  },

  delete: async (id: string): Promise<ApiResponse<void>> => {
    // Deleting from public.users will trigger cascade delete in auth.users if configured,
    // but usually we can't delete from auth.users from client.
    // We can delete from public.users.
    const { error } = await supabase.from('users').delete().eq('userid', id);
    if (error) handleSupabaseError(error);
    return { success: true, message: 'User deleted' };
  },
};

// Customers API
export const customersAPI = {
  getAll: async (params?: { archivedOnly?: boolean }): Promise<ApiResponse<Customer[]>> => {
    let query = supabase.from('customers').select('*');

    // Filter based on archived status
    if (params?.archivedOnly) {
      query = query.eq('active', false);
    } else {
      query = query.eq('active', true);
    }

    const { data, error } = await query.order('name');
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Customers retrieved', data: data as Customer[] };
  },

  getById: async (id: number): Promise<ApiResponse<Customer>> => {
    const { data, error } = await supabase.from('customers').select('*').eq('customerid', id).single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Customer retrieved', data: data as Customer };
  },

  create: async (customer: CreateCustomerRequest): Promise<ApiResponse<Customer>> => {
    const customerData = { ...customer, active: customer.active ?? true };
    const { data, error } = await supabase.from('customers').insert([customerData]).select().single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Customer created', data: data as Customer };
  },

  update: async (id: number, customer: UpdateCustomerRequest): Promise<ApiResponse<Customer>> => {
    const { data, error } = await supabase.from('customers').update(customer).eq('customerid', id).select().single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Customer updated', data: data as Customer };
  },

  delete: async (id: number): Promise<ApiResponse<null>> => {
    // Archive the customer instead of deleting it
    const { error } = await supabase
      .from('customers')
      .update({ active: false })
      .eq('customerid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Customer archived successfully', data: null };
  },

  unarchive: async (id: number): Promise<ApiResponse<null>> => {
    const { error } = await supabase
      .from('customers')
      .update({ active: true })
      .eq('customerid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Customer unarchived successfully', data: null };
  },

  permanentDelete: async (id: number): Promise<ApiResponse<null>> => {
    // Fetch customer info for possible snapshot
    const { data: customerData, error: fetchErr } = await supabase.from('customers').select('name, email, phone, address').eq('customerid', id).single();
    if (fetchErr) handleSupabaseError(fetchErr);

    // Try to delete the customer directly
    let { error: deleteErr } = await supabase.from('customers').delete().eq('customerid', id);
    if (!deleteErr) {
      return { success: true, message: 'Customer permanently deleted', data: null };
    }

    // If delete failed, attempt fallback: nullify customerid on related orders (if column is nullable) and snapshot name to orders.customer_name (if column exists)
    console.warn('Initial permanent delete failed, attempting fallback to unlink customer from orders:', deleteErr);

    try {
      // 1) Attempt to write snapshot customer_name on orders if column exists
      try {
        await supabase.from('orders').update({ customer_name: customerData?.name ?? null }).eq('customerid', id);
      } catch (e) {
        console.warn('Could not write customer_name snapshot to orders (column may be missing):', e);
      }

      // 2) Nullify customerid references so FK won't block delete (requires customerid to be nullable)
      const { error: nullErr } = await supabase.from('orders').update({ customerid: null }).eq('customerid', id);
      if (nullErr) {
        console.error('Failed to nullify orders.customerid:', nullErr);
        throw new Error('Failed to unlink customer from related orders. Ensure migration was applied to make orders.customerid nullable or add a customer_name snapshot column.');
      }

      // 3) Retry delete
      const { error: deleteErr2 } = await supabase.from('customers').delete().eq('customerid', id);
      if (deleteErr2) {
        console.error('Permanent delete retry failed:', deleteErr2);
        handleSupabaseError(deleteErr2);
      }

      return { success: true, message: 'Customer permanently deleted (fallback path)', data: null };
    } catch (e) {
      console.error('Permanent delete customer error:', e);
      handleSupabaseError(e);
      return { success: false, message: 'Failed to permanently delete customer', data: null };
    }
  },
};

// Orders API
export const ordersAPI = {
  getAll: async (): Promise<ApiResponse<Order[]>> => {
    // Fetch orders and include related order_items and items metadata so frontend can show item names, category and image
    const { data, error } = await supabase
      .from('orders')
      // select customers and order_items; for order_items include the related item metadata via the items foreign table
      .select('*, customers(name, email, phone), branches(name), order_items(itemid, quantity, price, note, items(itemid, name, category, image))')
      .order('created_at', { ascending: false });

    if (error) handleSupabaseError(error);

    // Transform data to match Order interface
    const orders = data?.map((order: any) => ({
      ...order,
      // Prefer joined customer name; if the join is missing but customerid is null (unlink), mark as deleted customer
      customer_name: order.customers?.name || order.customer_name || (order.customerid === null ? 'Deleted customer' : undefined),
      customer_email: order.customers?.email || undefined,
      customer_phone: order.customers?.phone || undefined,
      branch_name: order.branches?.name,
      items: (order.order_items || []).map((oi: any) => ({
        itemid: oi.itemid,
        quantity: oi.quantity,
        price: oi.price,
        // Prefer joined item metadata, fall back to snapshot fields stored on order_items
        name: oi.items?.name || oi.item_name || 'Deleted item',
        category: oi.items?.category || oi.item_category || undefined,
        image: oi.items?.image || oi.item_image || undefined,
        note: oi.note ?? undefined
      }))
    }));

    return { success: true, message: 'Orders retrieved', data: orders as Order[] };
  },

  getById: async (id: number): Promise<ApiResponse<Order>> => {
    const { data, error } = await supabase
      .from('orders')
      .select('*, customers(name, email, phone, address), branches(name, phone, address, cr), order_items(itemid, quantity, price, note, items(itemid, name, category, image))')
      .eq('orderid', id)
      .single();

    if (error) handleSupabaseError(error);

    const order = {
      ...data,
      customer_name: data.customers?.name || data.customer_name || (data.customerid === null ? 'Deleted customer' : undefined),
      customer_email: data.customers?.email || undefined,
      customer_phone: data.customers?.phone || undefined,
      customer_address: data.customers?.address || undefined,
      branch_name: data.branches?.name,
      branch_phone: data.branches?.phone,
      branch_address: data.branches?.address,
      branch_cr: data.branches?.cr,
      items: (data.order_items || []).map((oi: any) => ({
        itemid: oi.itemid,
        quantity: oi.quantity,
        price: oi.price,
        name: oi.items?.name || oi.item_name || 'Deleted item',
        category: oi.items?.category || oi.item_category || undefined,
        image: oi.items?.image || oi.item_image || undefined,
        note: oi.note ?? undefined
      }))
    };

    return { success: true, message: 'Order retrieved', data: order as Order };
  },

  create: async (order: CreateOrderRequest): Promise<ApiResponse<Order>> => {
    // Calculate total amount
    let total_amount = 0;
    const orderItemsData = [];

    for (const item of order.items) {
      const { data: itemData } = await supabase.from('items').select('price, name, category, image, stock_quantity').eq('itemid', item.itemid).single();
      if (itemData) {
        // check stock
        if (typeof itemData.stock_quantity === 'number' && itemData.stock_quantity < item.quantity) {
          throw new Error(`Insufficient stock for item ${itemData.name || item.itemid}`);
        }
        const providedPrice = (item as any).price;
        const priceToUse = typeof providedPrice === 'number' ? providedPrice : itemData.price;
        total_amount += priceToUse * item.quantity;
        orderItemsData.push({
          itemid: item.itemid,
          quantity: item.quantity,
          price: priceToUse,
          note: (item as any).note ?? null,
          // Snapshot fields to preserve item info if the item record is later deleted
          item_name: itemData?.name ?? null,
          item_category: itemData?.category ?? null,
          item_image: itemData?.image ?? null
        });
      }
    }

    // Create Order
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert([{ 
        customerid: order.customerid, 
        branchid: order.branchid,
        total_amount, 
        status: 'pending', 
        notes: order.notes ?? null, 
        payment_method: (order.paymentMethod ?? null) 
      }])
      .select()
      .single();

    if (orderError) handleSupabaseError(orderError);

    // Create Order Items
    const itemsToInsert = orderItemsData.map(item => ({
      orderid: orderData.orderid,
      itemid: item.itemid,
      quantity: item.quantity,
      price: item.price,
      note: item.note ?? null,
      // Snapshot fields
      item_name: item.item_name ?? null,
      item_category: item.item_category ?? null,
      item_image: item.item_image ?? null
    }));

    const { error: itemsError } = await supabase.from('order_items').insert(itemsToInsert);
    if (itemsError) handleSupabaseError(itemsError);

    // Deduct stock quantities for each item (best-effort). If update fails, log and continue.
    for (const it of itemsToInsert) {
      try {
        // Use atomic update: call rpc 'decrement_item_stock' if available
        const { error: decErr } = await supabase.rpc('decrement_item_stock', { p_itemid: it.itemid, p_qty: it.quantity });
        if (decErr) {
          // fallback to simple update (may not be perfectly atomic)
          const { data: current } = await supabase.from('items').select('stock_quantity').eq('itemid', it.itemid).single();
          if (current && typeof current.stock_quantity === 'number') {
            const newQty = Math.max(0, current.stock_quantity - it.quantity);
            await supabase.from('items').update({ stock_quantity: newQty }).eq('itemid', it.itemid);
          }
        }
      } catch (e) {
        console.error('Failed to decrement stock for item', it.itemid, e);
      }
    }

    return ordersAPI.getById(orderData.orderid);
  },

  update: async (id: number, order: UpdateOrderRequest): Promise<ApiResponse<Order>> => {
    // If status change involves stock adjustments, we'll perform checks/reserves
    if (order && typeof order.status === 'string') {
      // Fetch existing order items and status
      const { data: existing, error: fetchErr } = await supabase
        .from('orders')
        .select('status, order_items(itemid, quantity)')
        .eq('orderid', id)
        .single();

      if (fetchErr) handleSupabaseError(fetchErr);

      const prevStatus = existing?.status;
      const itemsList = existing?.order_items || [];

      // If transitioning from cancelled -> pending/completed, re-reserve stock (check availability first)
      if (prevStatus === 'cancelled' && (order.status === 'pending' || order.status === 'completed')) {
        // Check availability
        for (const oi of itemsList) {
          const { data: it } = await supabase.from('items').select('stock_quantity, name').eq('itemid', oi.itemid).single();
          if (it && typeof it.stock_quantity === 'number' && it.stock_quantity < oi.quantity) {
            throw new Error(`Insufficient stock to change status for item ${it.name || oi.itemid}`);
          }
        }
        // Decrement stock
        for (const oi of itemsList) {
          try {
            const { error: decErr } = await supabase.rpc('decrement_item_stock', { p_itemid: oi.itemid, p_qty: oi.quantity });
            if (decErr) {
              // fallback update
              const { data: current } = await supabase.from('items').select('stock_quantity').eq('itemid', oi.itemid).single();
              if (current && typeof current.stock_quantity === 'number') {
                const newQty = Math.max(0, current.stock_quantity - oi.quantity);
                await supabase.from('items').update({ stock_quantity: newQty }).eq('itemid', oi.itemid);
              }
            }
          } catch (e) {
            console.error('Failed to decrement stock on status change', oi.itemid, e);
          }
        }
      }

      // If transitioning to cancelled from non-cancelled, restore stock
      if (order.status === 'cancelled' && prevStatus !== 'cancelled') {
        // Update order status first
        const { error: updErr } = await supabase.from('orders').update({ status: order.status }).eq('orderid', id);
        if (updErr) handleSupabaseError(updErr);

        // Restore stock
        for (const oi of itemsList) {
          try {
            const { data: current } = await supabase.from('items').select('stock_quantity').eq('itemid', oi.itemid).single();
            if (current && typeof current.stock_quantity === 'number') {
              await supabase.from('items').update({ stock_quantity: current.stock_quantity + oi.quantity }).eq('itemid', oi.itemid);
            }
          } catch (e) {
            console.error('Failed to restore stock for item', oi.itemid, e);
          }
        }

        return ordersAPI.getById(id);
      }
    }

    const { error } = await supabase.from('orders').update(order).eq('orderid', id).select().single();
    if (error) handleSupabaseError(error);
    return ordersAPI.getById(id);
  },

  delete: async (id: number): Promise<ApiResponse<void>> => {
    const { error } = await supabase.from('orders').delete().eq('orderid', id);
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Order deleted' };
  },

  // Receipt functions - simplified for now
  getReceiptUrl: (id: number) => `/receipts/${id}`, // Placeholder
  getReceiptHtml: async (_id: number): Promise<string> => {
    void _id;
    return '<html><body>Receipt functionality requires backend or Edge Function</body></html>';
  },
  openReceiptInNewTab: async (_id: number) => {
    void _id;
    alert('Receipt functionality requires backend or Edge Function');
    return true;
  },
  createReceiptDownloadToken: async (_id: number): Promise<ApiResponse<{ token: string; url: string; redirectUrl: string }>> => {
    void _id;
    throw new ApiError(501, 'Not implemented');
  },
  getReceiptPdfUrl: (_id: number) => { void _id; return ''; },
  getReceiptPdfBlob: async (_id: number): Promise<Blob> => {
    void _id;
    throw new ApiError(501, 'Not implemented');
  },
  openReceiptPdfInNewTab: async (_id: number) => {
    void _id;
    alert('Receipt functionality requires backend or Edge Function');
    return true;
  },
  downloadReceiptPdf: async (_id: number, _filename?: string) => {
    void _id; void _filename;
    alert('Receipt functionality requires backend or Edge Function');
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
    // Parallel queries
    const [
      { count: usersCount },
      { count: customersCount },
      { count: itemsCount },
      { count: ordersCount },
      { data: revenueData },
      { data: lowStockData },
      { data: recentOrdersData }
    ] = await Promise.all([
      supabase.from('users').select('*', { count: 'exact', head: true }),
      supabase.from('customers').select('*', { count: 'exact', head: true }),
      supabase.from('items').select('*', { count: 'exact', head: true }),
      supabase.from('orders').select('*', { count: 'exact', head: true }),
      supabase.from('orders').select('total_amount').eq('status', 'completed'),
      supabase.from('items').select('itemid, name, stock_quantity').lt('stock_quantity', threshold),
      supabase.from('orders').select('orderid, total_amount, status, created_at, customers(name)').order('created_at', { ascending: false }).limit(5)
    ]);

    const revenue = revenueData?.reduce((sum, order) => sum + order.total_amount, 0) || 0;

    // Top items and sales by day require aggregation which is hard with simple client queries
    // We will return empty/mock data for those or do client-side aggregation if dataset is small
    // For now, let's do client side aggregation for salesByDay (fetching last 7 days orders)

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const { data: lastWeekOrders } = await supabase
      .from('orders')
      .select('created_at, total_amount')
      .gte('created_at', sevenDaysAgo.toISOString())
      .eq('status', 'completed');

    const salesByDayMap = new Map<string, number>();
    lastWeekOrders?.forEach(order => {
      const date = new Date(order.created_at).toISOString().split('T')[0];
      salesByDayMap.set(date, (salesByDayMap.get(date) || 0) + order.total_amount);
    });

    const salesByDay = Array.from(salesByDayMap.entries()).map(([date, total_sales]) => ({ date, total_sales }));
    // Compute top selling items by aggregating order_items for completed orders.
    // We do a small client-side aggregation: fetch completed order ids, then fetch related order_items joined with items.
    const { data: completedOrders } = await supabase.from('orders').select('orderid').eq('status', 'completed');
    const completedOrderIds = (completedOrders || []).map((o: any) => o.orderid);

    let topItems: { itemid: number; name: string; total_quantity: number }[] = [];
    if (completedOrderIds.length > 0) {
      const { data: orderItemsData } = await supabase
        .from('order_items')
        .select('orderid, itemid, quantity, item_name, items(itemid, name)')
        .in('orderid', completedOrderIds);

      const agg = new Map<number, { name: string; total: number }>();
      (orderItemsData || []).forEach((oi: any) => {
        const id = oi.itemid;
        // prefer joined item name, fall back to stored snapshot name
        const name = oi.items?.name || oi.item_name || '';
        const prev = agg.get(id);
        agg.set(id, { name, total: (prev?.total || 0) + (oi.quantity || 0) });
      });

      topItems = Array.from(agg.entries())
        .map(([itemid, v]) => ({ itemid, name: v.name, total_quantity: v.total }))
        .sort((a, b) => b.total_quantity - a.total_quantity)
        .slice(0, 5);
    }

    return {
      success: true,
      message: 'Reports retrieved',
      data: {
        totals: {
          users: usersCount || 0,
          customers: customersCount || 0,
          items: itemsCount || 0,
          orders: ordersCount || 0
        },
        revenue,
        topItems,
        salesByDay,
        lowStock: lowStockData as any[] || [],
        recentOrders: recentOrdersData?.map((o: any) => ({
          ...o,
          customer_name: o.customers?.name
        })) || []
      }
    };
  },

  getOrdersByDateRange: async (startIso: string, endIso: string): Promise<ApiResponse<{ orderid: number; created_at: string; total_amount: number; status: string; customer_name?: string }[]>> => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('orderid, created_at, total_amount, status, customers(name), branches(name), customer_name, customerid')
        .gte('created_at', startIso)
        .lte('created_at', endIso)
        .order('created_at', { ascending: false });

      if (error) handleSupabaseError(error);

      const orders = (data || []).map((o: any) => ({
        orderid: o.orderid,
        created_at: o.created_at,
        total_amount: o.total_amount,
        status: o.status,
        customer_name: o.customers?.name || o.customer_name || (o.customerid === null ? 'Deleted customer' : undefined),
        branch_name: o.branches?.name || o.branch_name || undefined
      }));

      return { success: true, message: 'Orders retrieved', data: orders };
    } catch (e) {
      return { success: false, message: e instanceof Error ? e.message : 'Failed to retrieve orders', data: [] };
    }
  }
};

// Settings API
export const settingsAPI = {
  getSettings: async (): Promise<ApiResponse<Settings>> => {
    const { data, error } = await supabase.from('settings').select('*').single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Settings retrieved', data: data as Settings };
  },

  updateSettings: async (settings: UpdateSettingsRequest | FormData): Promise<ApiResponse<Settings>> => {
    let updates: any = {};

    if (settings instanceof FormData) {
      if (settings.has('shop_name')) updates.shop_name = settings.get('shop_name');
      if (settings.has('shop_email')) updates.shop_email = settings.get('shop_email');
      if (settings.has('vat_registration_number')) updates.vat_registration_number = settings.get('vat_registration_number');
      if (settings.has('currency')) updates.currency = settings.get('currency');
      if (settings.has('tax_rate')) updates.tax_rate = parseFloat(settings.get('tax_rate') as string);
      if (settings.has('receipt_footer')) updates.receipt_footer = settings.get('receipt_footer');

      const logoFile = settings.get('shop_logo') as File;
      if (logoFile && logoFile.size > 0) {
        // Upload new logo first
        const newLogoUrl = await uploadImage(logoFile);

        // Fetch current settings (single row) to get previous logo url
        try {
          const { data: currentSettings } = await supabase.from('settings').select('shop_logo').eq('settingid', 1).single();
          const oldLogoUrl = currentSettings?.shop_logo;
          if (oldLogoUrl && oldLogoUrl !== newLogoUrl) {
            await deleteImageByUrl(oldLogoUrl);
          }
        } catch (err) {
          console.error('Could not fetch current settings to delete previous logo:', err);
        }

        updates.shop_logo = newLogoUrl;
      }
    } else {
      updates = settings;
    }

    const { data, error } = await supabase
      .from('settings')
      .update(updates)
      .eq('settingid', 1) // Assuming single settings row
      .select()
      .single();

    if (error) handleSupabaseError(error);
    return { success: true, message: 'Settings updated', data: data as Settings };
  },

  getBranches: async (params?: { archivedOnly?: boolean }): Promise<ApiResponse<Branch[]>> => {
    let query = supabase.from('branches').select('*');

    // Filter based on archived status
    if (params?.archivedOnly) {
      query = query.eq('active', false);
    } else {
      query = query.eq('active', true);
    }

    const { data, error } = await query.order('name');
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Branches retrieved', data: data as Branch[] };
  },

  createBranch: async (branch: CreateBranchRequest): Promise<ApiResponse<Branch>> => {
    const branchData = { ...branch, active: branch.active ?? true };
    const { data, error } = await supabase.from('branches').insert([branchData]).select().single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Branch created', data: data as Branch };
  },

  updateBranch: async (id: number, branch: UpdateBranchRequest): Promise<ApiResponse<Branch>> => {
    const { data, error } = await supabase.from('branches').update(branch).eq('branchid', id).select().single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Branch updated', data: data as Branch };
  },

  deleteBranch: async (id: number): Promise<ApiResponse<null>> => {
    // Archive the branch instead of deleting it
    const { error } = await supabase
      .from('branches')
      .update({ active: false })
      .eq('branchid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Branch archived successfully', data: null };
  },

  unarchiveBranch: async (id: number): Promise<ApiResponse<null>> => {
    const { error } = await supabase
      .from('branches')
      .update({ active: true })
      .eq('branchid', id);

    if (error) handleSupabaseError(error);

    return { success: true, message: 'Branch unarchived successfully', data: null };
  },

  getCategories: async (): Promise<ApiResponse<ItemCategory[]>> => {
    const { data, error } = await supabase.from('item_categories').select('*');
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Categories retrieved', data: data as ItemCategory[] };
  },

  createCategory: async (category: CreateCategoryRequest): Promise<ApiResponse<ItemCategory>> => {
    const { data, error } = await supabase.from('item_categories').insert([category]).select().single();
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Category created', data: data as ItemCategory };
  },

  deleteCategory: async (id: number): Promise<ApiResponse<void>> => {
    const { error } = await supabase.from('item_categories').delete().eq('categoryid', id);
    if (error) handleSupabaseError(error);
    return { success: true, message: 'Category deleted' };
  },
};

// Type definitions
export interface User {
  userid: string; // Changed from number to string (UUID)
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