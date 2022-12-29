import CartContext from "../context/Cart/CartContext";
import { useContext } from "react";

const useCart = () => {
    const [state, dispatch] = useContext(CartContext);

    const addToCart = (product) => dispatch({
        type:"ADD", payload: product
    })

    const removeFromCart = (productId) => dispatch({
        type: "REMOVE", payload: productId
    })

    return {
        state,
        addToCart,
        removeFromCart
    }
};

export default useCart;