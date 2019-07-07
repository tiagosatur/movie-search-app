import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PATHS } from '../../utils/variables';
import fakeAuth from '../../utils/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) =>  {
    return (
        <Route
            {...rest}
            render={
                props => {
                    return fakeAuth.isAuthenticated
                        ? <Component {...props} {...fakeAuth} />
                        : <Redirect 
                            to={{ 
                                pathname: PATHS.LOGIN.PATH, 
                                state: { from: props.location }
                            }}
                        /> 
                }
            }
        />
    );
}

export default PrivateRoute;