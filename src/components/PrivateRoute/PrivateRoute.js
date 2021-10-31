import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user, loading} = useAuth()
    
    if (loading){
        return(
            <Spinner animation="grow" variant="warning" />
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