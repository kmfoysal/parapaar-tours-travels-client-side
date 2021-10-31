import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='text-center py-5'>
            <img src={notFoundImg} alt="img" className='d-block w-75 mx-auto' />
            <Link to='/'>
            <button className='btn btn-lg btn-warning text-white my-8'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;