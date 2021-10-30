import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className='navbar-bg' variant="dark" collapseOnSelect expand="lg">
            <Container className='header'>
                <img src="https://i.ibb.co/QF9FFFj/pngaaa-com-416090.png" alt="" />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end menu-list">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    {
                        !user.email ? <Nav.Link as={Link} to="/signin"><button className='button'>SignIn</button></Nav.Link> : <div className= 'hidden-menu'>
                            <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/manageorders">Manage Orders</Nav.Link>
                            <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                            <span className='user-name'>{user.displayName}</span>
                            <Nav.Link ><button onClick={logOut} className='button'>Logout</button></Nav.Link>
                        </div>
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;