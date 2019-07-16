import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import styled from 'styled-components';
import { rem } from '../../style';
import { useActions } from '../../utils/hooks';
import { loginUser } from '../../redux'
import { LoginForm } from '../../components/Form'
import { LoadingSpinner } from '../../components';


const Login = (props) => {
    const { 
        location: { state }, 
        history,
        isLogged,
        pending,
        error,
        loginUserAction,
    } = props;

    /*const { loginUserAction } = useActions();

     const {
        user: {
          isLogged,
          pending,
          error,
        },
    } = useSelector(state => state); */

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(redirect) setRedirect(true)
        
    }, isLogged)
    

    const onSubmit = data => { 
        loginUserAction(data);
        history.push('/dashboard');
    }
    
    let { from } = state || { from: { pathname: "/" } };
    
    if(redirect) return <Redirect to={from} />

    if(error) return <h3>Bad crendentials</h3>

    if(pending) return <LoadingSpinner />

    return (
        <>
            <StyledLoginMessage>
                You should be logged to access the page 
                <strong> { from.pathname } </strong>
            </StyledLoginMessage>

            <LoginForm onSubmit={onSubmit} />
        </>
    );
}

const StyledLoginMessage = styled.p`
   display: flex;
   justify-content: center;
   margin: ${rem(50)} 0;
`;

const mapStateToProps = state => {
    return {
        isLogged: state.user.isLogged,
        pending: state.user.pending,
        error: state.user.error,
    }
};
  
const mapDispatchToProps = dispatch => ({
    loginUserAction: data => dispatch(loginUser(data))
})

  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));