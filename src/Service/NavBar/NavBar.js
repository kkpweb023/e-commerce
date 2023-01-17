import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


const NavBar = () => {

    const [point,setPoint] = useState('');

    function cartPoint(){
        axios.get(`http://localhost:4000/cartlist`)
            .then((result) =>{
                setPoint(result.data)
            })
            .catch((error) => console.log("!404 failed"));
    }
    useEffect(()=>{
        cartPoint();
    },[])

  
    



    return (

        <>
            <Navbar expand="lg" bg="dark" variant="dark" className="pt-0 pb-0" style={{ fontSize: "14px" }}>

                <Navbar.Brand className="me-5 ms-3 fs-6 fw-bold" >E-shopper</Navbar.Brand>

                <Nav className="me-auto">

                    <Nav.Link as={NavLink} to='/'  className="menu">Home</Nav.Link>

                    <NavDropdown title="Categories" id="collasible-nav-dropdown" className='menu width-2' menuVariant="dark">

                        <NavDropdown.Item  as={Link} to='/categories/cameras' className='menu-item'>Cameras</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/categories/mobiles' className='menu-item'>Mobiles</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/categories/watches' className='menu-item'>Watches</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/categories/drones' className='menu-item'>Drons</NavDropdown.Item>

                    </NavDropdown>

                    <Nav.Link as={NavLink} to='/cart' className="menu">
                        Cart
                        <i className="bi bi-cart-plus-fill"></i>
                        <div className="card-badge badge bg-success">{point.length}</div>

                    </Nav.Link>
                </Nav>

                <Nav>
                    <Form className="d-flex pt-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="h-75 pb-2 rounded-0 shadow-none"
                            aria-label="Search"  
                        />
                        <Button variant="success" className="me-5 h-75 text-white rounded-0 shadow-none"       data-bs-toggle="tooltip" data-bs-placement="top" title="Search Items" style={{ fontSize: "13px", paddingTop: "3px" }}>
                            <i className="bi bi-search"></i>
                        </Button>
                    </Form>

                    <NavDropdown title="My Account" id="collasible-nav-dropdown" className="menu account" menuVariant="dark">

                        <NavDropdown.Item as={NavLink} to='/myAccount/order' className='menu-item'>My Orders</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/myAccount/profile' className='menu-item'>Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={NavLink} to='/myAccount/logout' className='menu-item'>Logout</NavDropdown.Item>

                    </NavDropdown>

                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar;