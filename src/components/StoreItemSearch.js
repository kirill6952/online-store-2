import React, { useContext } from 'react';
import { Col, Stack } from 'react-bootstrap';
import { CartContext } from "../context/CartContext";
import StoreItem from "./StoreItem";
import storeItems from "../data/items.json";

const StoreItemSearch = ({ searchText = '' }) => {
    const { cartItems, addToCart } = useContext(CartContext);



    const filteredItems = storeItems.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <Stack xs={1} md={2} lg={4} className="g-4">
                {filteredItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem
                            item={item}
                            cartItems={cartItems}
                            addToCart={() => addToCart(item)}
                        />
                    </Col>
                ))}
            </Stack>
        </div>
    );
};

export default StoreItemSearch;
