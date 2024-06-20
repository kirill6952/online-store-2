import React, { createContext } from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //const [cartItems, setCartItems] = useState([]);
    const [cartItems, setCartItems] = useLocalStorage(
        'cart',
        []
    )

    const addToCart = (id) => {
        setCartItems(prevItems => {
            const item = prevItems.find(item => item.id === id);
            if (item) {
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { id, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(prevItems =>
            prevItems
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
