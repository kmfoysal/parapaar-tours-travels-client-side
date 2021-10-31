import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInWithGoogle, error} = useAuth();

    // For redirect expected page 
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
    }

    const google = <FontAwesomeIcon icon={faGoogle} />


    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>

           <div className='login-area shadow-lg'>
            <h3 className='mb-4'>Please Login With Google</h3>
            <button onClick={handleGoogleLogin} className='btn btn-lg btn-danger'><span>{google}</span> Google Login</button>
            <p className='text-danger'>{error}</p>
           </div>
        </div>
    );
};

export default Login;