import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, error} = useAuth();

    // For redirect expected page 
    // const location = useLocation();
    // const history = useHistory()
    // const redirect_url = location.state?.from || '/home'

    // const handleGoogleLogin = () =>{
    //     signInWithGoogle()
    //     .then(result =>{
    //         history.push(redirect_url)
    //     })
    // }

    return (
        <div>
            <h2>This is Login</h2>

            <div>
            <p className='text-danger'>{error}</p>
           </div>

            <button onClick={signInWithGoogle}>Google Signin</button>
        </div>
    );
};

export default Login;