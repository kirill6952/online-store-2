import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import storeItems from '../data/items.json';
import { CartContext } from '../context/CartContext';
import { formatterCurrency } from '../currency/currencyFormater';
import CartItem from './CartItem';
import { BsArrows } from 'react-icons/bs';

function ShoppingCart() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    if (!cartItems || cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div>
            <Stack gap={3}>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} id={cartItem.id} quantity={cartItem.quantity} />
                ))}
                <div className="fw-bold fs-3 ms-auto">
                    Total: {formatterCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id);
                        return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
                </div>
                <Button variant='outline-secondary' className="mt-3" onClick={handleCheckout}>
                    <BsArrows /> Proceed to Checkout <BsArrows />
                </Button>
            </Stack>
        </div>
    );
}

export default ShoppingCart;
