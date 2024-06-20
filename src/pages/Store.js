import React, {useContext, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';
import {CartContext} from "../context/CartContext";

const Store = ({ searchText }) => {

    const {cartItems,setCartItems} = useContext(CartContext);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    };

    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) } : cartItem
        );
        setCartItems(updatedCartItems.filter(cartItem => cartItem.quantity > 0));
    };

    const filteredItems = storeItems.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className='mg-bottom center-align'>
                <h1 className='me-auto'>Welcome to Store</h1>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {filteredItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem
                            item={item}
                            removeFromCart={removeFromCart}
                            cartItems={cartItems}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            addToCart={() => addToCart(item)}
                        />
                    </Col>
                ))}
            </Row>




        </>
    );
};

export default Store;
