import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PATHS } from '../../utils/variables';


const PrivateRoute = ({ component: Component, ...rest }) =>  {
    const {
        user: {
          isLogged,
        },
    } = useSelector(state => state);

    return (
        <Route
            {...rest}
            render={
                props => {
                    return isLogged
                        ? <Component {...props} />
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