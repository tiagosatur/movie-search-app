import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    const { location: { state } } = props;

    const [redirect, setRedirect] = useState(false);
    
    function handleLogin() {
        setRedirect(true);

        
    };

    console.log('clicou',redirect);
    
    let { from } = state || { from: { pathname: "/" } };
    
    if(redirect) return <Redirect to={from} />


    return (
        <>
            <p>Você deve logar para ver a página { from.pathname }</p>
            <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default Login;