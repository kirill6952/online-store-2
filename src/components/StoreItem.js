import React from 'react';
import { Button, Card } from 'react-bootstrap';
import StarRating from './StarRating';
import { FaTrashCanArrowUp } from 'react-icons/fa6';
import { IoAddCircleSharp } from 'react-icons/io5';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import {formatterCurrency} from "../currency/currencyFormater";

const StoreItem = ({ addToCart, removeFromCart, item, decreaseQuantity, increaseQuantity, cartItems = [] }) => {
    const { id, name, price, imgUrl } = item;
    const cartItem = cartItems.find(cartItem => cartItem.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <Card className="h-100 d-flex flex-column shadow">
            {imgUrl && (
                <div style={{ height: '300px', overflow: 'hidden' }}>
                    <Card.Img
                        variant="top"
                        src={imgUrl}
                        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                </div>
            )}
            <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
                    <StarRating />
                    <span className='fs-3'>{name}</span>
                    <span className='ms-2 text-muted'>{formatterCurrency(price)}</span>
                </Card.Title>
                <Card.Text className="flex-grow-1">
                    This is the unique vehicle, sport style...
                </Card.Text>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="outline-secondary" className="w-100" onClick={addToCart}>Add to cart</Button>
                    ) : (
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <Button variant="outline-secondary" className="me-2 border-0"
                                        onClick={() => decreaseQuantity(item)}>
                                    <MdOutlineRemoveCircle style={{fontSize: '1.5em'}}/>
                                </Button>
                                <div className="d-inline px-5">
                                    <span className="fs-3">{quantity}</span> in cart
                                </div>
                                <Button variant="outline-secondary" className="ms-2 border-0"
                                        onClick={() => increaseQuantity(item)}>
                                    <IoAddCircleSharp style={{fontSize: '1.5em'}}/>
                                </Button>
                            </div>
                            <Button variant="outline-danger" className="w-100 border-0"
                                    onClick={() => removeFromCart(item)}>
                                <FaTrashCanArrowUp style={{fontSize: '1.5em'}}/>
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};


export default StoreItem;
