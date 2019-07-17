import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PATHS } from '../../utils/variables';


const PrivateRoute = ({ component: Component, isLogged, ...rest}) =>  {
    /* const {
        user: {
          isLogged,
        },
    } = useSelector(state => state); */

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
const mapStateToProps = state => {
    return {
      isLogged: state.user.isLogged,
    }
};

export default connect(
    mapStateToProps,
    null
)(PrivateRoute);