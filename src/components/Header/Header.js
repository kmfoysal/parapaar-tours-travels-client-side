import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth()

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <NavLink to='/'>
                <Navbar.Brand href="#home">Parapaar Tours & Travels</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav items-center ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link mr-2" aria-current="page" to="/contact">Contact</NavLink>
                    </li>

                    {user.email ? 
                       <li className="d-flex items-center">
                           <img src={user.photoURL} alt="img"  className='mr-2'/>
                       <p className=" mr-2 text-success font-semibold">{user.displayName}</p>
                       <button onClick={logOut} className='py-2 px-3'>Logout</button>
                       </li>
                       :
                       <li className="nav-item">
                        <NavLink className="" to="/login"><button className='py-2 px-3'>Login/Signup</button></NavLink>
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