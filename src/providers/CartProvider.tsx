import { createContext } from "react";

export const CartContext = createContext({});

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider
      value={{ items: ["a", "b", "e"], onAddItem: () => {} }}
    >
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;