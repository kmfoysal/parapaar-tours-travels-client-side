import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth()

    return (
        <div>
            <Navbar bg="warning" expand="lg">
                <Container>
                <NavLink className='text-decoration-none' to='/'>
                <Navbar.Brand href="#home" className='text-uppercase'>Parapaar Tours & Travels</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav items-center ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link me-2" aria-current="page" to="/home">Home</NavLink>
                    </li>

                    {user.email ? 
                       <div className="private-link">
                            <li className="nav-item">
                            <NavLink className="nav-link me-2" aria-current="page" to="/myBookings">My Bookings</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link me-2" aria-current="page" to="/manageAllBookings">Manage All Bookings</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link me-2" aria-current="page" to="/addPackage">Add Package</NavLink>
                            </li>
                            <li className="d-flex items-center">
                                <img src={user.photoURL} alt="img"  className='rounded-circle me-2' style={{height:'40px', width:'40px'}}/>
                                <p className="mb-0 me-2 text-success font-semibold">{user.displayName}</p>
                                <button onClick={logOut} className='btn btn-danger'>Logout</button>
                            </li>
                       </div>
                       :
                       <li className="nav-item">
                        <NavLink className="" to="/login"><button className='btn btn-warning'>Login</button></NavLink>
                       </li>
                    }              
                </ul>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;