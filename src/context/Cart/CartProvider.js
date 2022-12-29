import CartContext from "./CartContext";
import { useReducer } from "react";

const initialState = {
  products: [],
  amount: 0,
};

const CartReduser = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newProduct = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === newProduct.id
      );
      const isProductExist = productIndex !== -1;

      if (isProductExist) {
        const products = [...state.products];
        products[productIndex].count += 1;

        return { ...state, products, amount: products.length };
      }

      const newProducts = [...state.products, { ...newProduct, count: 1 }];
      return { ...state, products: newProducts, amount: newProducts.length };
    }
    case "REMOVE": {
      const removeId = action.payload;
      const newProducts = state.products.filter(
        (product) => product.id !== removeId
      );

      return {
        ...state,
        products: newProducts,
        amount: newProducts.length,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReduser, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
