import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    const existingCartItem = items.find(
      (item) => item.product === product && item.size === size
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
      setItems([...items]);
      return;
    }
    // if (existingCartItem) {
    //   updateQuantity(existingCartItem.id, 1)
    //   return;
    // }
    // if already in cart, increment quantity

    const newCartItem: CartItem = {
      id: randomUUID(), // generate
      product: product,
      product_id: product.id,
      size: size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedItems = items
      .map((item) =>
        item.id !== itemId
          ? item
          : { ...item, quantity: item.quantity + amount }
      )
      .filter((item) => item.quantity > 0);
    setItems(updatedItems);
  };

  const total = parseFloat(items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  ).toFixed(2));

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
