import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';
import type { Item } from '../services/api';

export interface CartItem {
  product: Item;
  quantity: number;
  note?: string;
  overridePrice?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Item, quantity?: number) => void;
  updateItemNote: (productId: number, note: string) => void;
  updateItemPrice: (productId: number, price?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Item, quantity: number = 1) => {
    // Check if adding this quantity would exceed stock
    const existingItem = cart.find((item) => item.product.itemid === product.itemid);
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    const totalQuantity = currentQuantity + quantity;

    if (totalQuantity > product.stock_quantity) {
      const message = `Cannot add ${quantity} more items. Only ${product.stock_quantity - currentQuantity} available in stock.`;
      // Show an error toast to inform the user
      toast.error(message);
      throw new Error(message);
    }

    setCart((prev) => {
      if (existingItem) {
        return prev.map((item) =>
          item.product.itemid === product.itemid
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Show a success toast when an item is added to the cart
    try {
      const addedQty = existingItem ? quantity : quantity; // quantity added
      const itemName = product.name || 'Item';
      const label = addedQty > 1 ? `${addedQty} x ${itemName}` : itemName;
      toast.success(`${label} added to cart`);
    } catch (err) {
      // If for any reason toast fails, at least continue silently
      console.error('Toast error while adding to cart', err);
    }
  };

  const updateItemNote = (productId: number, note: string) => {
    setCart(prev => prev.map(i => i.product.itemid === productId ? { ...i, note } : i));
  };

  const updateItemPrice = (productId: number, price?: number) => {
    setCart(prev => prev.map(i => i.product.itemid === productId ? { ...i, overridePrice: typeof price === 'number' ? price : undefined } : i));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.itemid !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      // Prevent setting a quantity higher than available stock
      const item = cart.find(i => i.product.itemid === productId);
      if (item && quantity > item.product.stock_quantity) {
        throw new Error(`Cannot set quantity above available stock (${item.product.stock_quantity}).`);
      }
      setCart((prev) =>
        prev.map((item) =>
          item.product.itemid === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (sum, item) => sum + (typeof item.overridePrice === 'number' ? Number(item.overridePrice) : Number(item.product.price)) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItemNote, updateItemPrice, removeFromCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};