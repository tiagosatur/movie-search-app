import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { colorPallete, rem } from '../../style';
import { useActions } from '../../utils/hooks';
import Form from './Form/Form'


const Login = (props) => {
    const { location: { state }, history } = props;
    const { loginUserAction } = useActions();
    const {
        user: {
          isLogged,
          pending,
          error,
        },
    } = useSelector(state => state);

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(redirect) {
            setRedirect(true)
        }
    }, isLogged)
    

    const onSubmit = data => { 
        loginUserAction(data);
        history.push('/dashboard');
    }
    
    let { from } = state || { from: { pathname: "/" } };
    
    if(redirect) return <Redirect to={from} />


    return (
        <>
            <StyledLoginMessage>
                Você deve logar para ver a página 
                <strong> { from.pathname } </strong>
                </StyledLoginMessage>
            <Form onSubmit={onSubmit} />
        </>
    );
}

const StyledLoginMessage = styled.p`
   display: flex;
   justify-content: center;
   margin: ${rem(50)} 0;
`;

export default Login;