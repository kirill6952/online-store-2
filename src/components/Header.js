import React, {useContext, useState} from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas , Badge} from 'react-bootstrap';
import {NavLink, Route, Routes, useNavigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Store from '../pages/Store';
import Support from '../pages/Support';
import logo from './super.png';
import '../App.css';
import ShoppingCart from "./ShoppingCart";
import { FaShoppingCart } from 'react-icons/fa';
import {CartContext} from "../context/CartContext";
import {BsSearchHeart} from "react-icons/bs";
import StoreItemSearch from "./StoreItemSearch";


const Header = () => {
    const [search, setSearch] = useState('');
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartItems } = useContext(CartContext);
    const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);



    const handleShowSearch = () => {
        setShowSearch(true);
        setShowCart(false);
    };
    const handleShowSearchClose = () => {
        setShowCart(false);
        setShowSearch(false);
    };


    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const navigate = useNavigate();

    const handleFocus = () => {
        navigate('/store');
    };



    return (
        <>
            <Navbar expand='md' bg='light' className="navbar-shadow" sticky='top'>
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src={logo}
                            alt='Logo'
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                            <Nav.Link as={NavLink} to='/support'>Support</Nav.Link>
                            <Nav.Link as={NavLink} to='/store'>Store</Nav.Link>

                        </Nav>

                        <BsSearchHeart />

                        <Form className='d-flex'>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='me-sm-2'
                                onChange={handleSearch}
                                value={search}
                                onClick={() => {
                                    const currentPath = window.location.pathname;
                                    if (currentPath !== "/store") {
                                        handleShowSearch();
                                    }else{handleFocus()}
                                }}
                            />
                        </Form>

                        <Nav className="ml-auto">
                            <Nav.Link className='position-relative' onClick={handleShowCart}>
                                <FaShoppingCart style={{ fontSize: '1.5em' }} />
                                {totalItemsCount > 0 && (
                                    <Badge pill bg="danger"
                                           className="position-absolute bottom-10 start-100 translate-middle badge-sm">
                                        {totalItemsCount}
                                        <span className="visually-hidden rounded-pill">items in cart</span>

                                    </Badge>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="container-fluid-full">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/store' element={<Store searchText={search} />} />
                    <Route path='/support' element={<Support />} />
                </Routes>
            </Container>

            <Offcanvas placement="end" show={showCart} onHide={handleCloseCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ShoppingCart />
                </Offcanvas.Body>
            </Offcanvas>


            <Offcanvas show={showSearch} onHide={handleShowSearchClose} placement='start'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <StoreItemSearch />
                </Offcanvas.Body>
            </Offcanvas>






        </>
    );
};

export default Header;