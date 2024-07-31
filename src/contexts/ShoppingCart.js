import { createContext, useContext, useState, useEffect } from 'react';

const ShoppingContext = createContext();
export const useShoppingContext = () => useContext(ShoppingContext);

export const ShoppingContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    const increaseQty = (_id) => {
        const currentCartItem = cartItems.find(item => item._id === _id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item._id === _id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    };

    const decreaseQty = (_id) => {
        const currentCartItem = cartItems.find(item => item._id === _id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(_id);
            } else {
                const newItems = cartItems.map(item => {
                    if (item._id === _id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    };

    const addCartItem = (product) => {
        const currentCartItem = cartItems.find(item => item._id === product._id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item._id === product._id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        } else {
            const newItem = { ...product, qty: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };

    const removeCartItem = (_id) => {
        const newItems = cartItems.filter(item => item._id !== _id);
        setCartItems(newItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <ShoppingContext.Provider value={{
            cartItems, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, removeCartItem, clearCart
        }}>
            {children}
        </ShoppingContext.Provider>
    );
};

export default ShoppingContext;
