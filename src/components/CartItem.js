import React, { useContext } from 'react';
import { Button, Stack } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { CartContext } from '../context/CartContext';
import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import {formatterCurrency} from "../currency/currencyFormater";


const CartItem = ({ id, quantity }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const item = storeItems.find(item => item.id === id);

    if (item == null) return null;

    return (
        <Stack direction='horizontal' gap={1} className='align-items-center'>
            <img
                src={item.imgUrl}
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                alt={item.name}
            />
            <div className="me-auto">
                <div>
                    {item.name}
                </div>
                <div className="text-muted" style={{ fontSize: ".5rem" }}>
                    {formatterCurrency(item.price)}
                </div>
            </div>
            <div>{formatterCurrency(item.price * quantity)}</div>


            <div className="d-flex align-items-center">
                <Button variant="" className="border-0 decrease-btn" onClick={() => decreaseQuantity(id)}>
                    <MdOutlineRemoveCircle style={{fontSize: '1em'}}/>
                </Button>
                <div className="quantity-border px-3">
                    <span className="fs-6">{quantity}</span>
                </div>
                <Button variant="" className="border-0 increase-btn" onClick={() => increaseQuantity(id)}>
                    <IoAddCircleSharp style={{fontSize: '1em'}}/>
                </Button>
            </div>
            <Button variant='' size='sm' className="remove-btn" onClick={() => removeFromCart(id)}>
                <FaTrashCanArrowUp style={{ fontSize: '1em' }} />
            </Button>
        </Stack>
    );
};

export default CartItem;
