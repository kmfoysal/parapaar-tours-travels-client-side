import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user, loading} = useAuth()
    
    if (loading){
        return(
            <div class="text-center">
                <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        ) 
    }

    return (
        <div>
            <Route
                {...rest}
                render={({location})=> user.email ? 
                children:
                <Redirect
                to={{
                    pathname: '/login',
                    state:{from:location}
                }}>
                </Redirect>}>
                    
            </Route>
        </div>
    );
};

export default PrivateRoute;