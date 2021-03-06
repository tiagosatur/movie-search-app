import React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form'
import { rem } from '../../../style';

import { Button, Input } from '../..';

const LoginForm = props => {
    const { onSubmit } = props
    const { register, handleSubmit, errors } = useForm();
    
    return(
        <div>
            <StyledForm onSubmit={handleSubmit(onSubmit)} className='login-form'>
                <Input 
                    name="username" 
                    id='login-input-username'
                    placeholder='Username'
                    register={register({required: true})}
                    errors={errors}
                />
                <Input 
                    type='password' 
                    name='password' 
                    id='login-input-password'
                    register={register({required: true})} 
                    placeholder='Password'
                    errors={errors}
                />
                <Button type='submit' id='login-form-btn' solid>Login</Button>
                

            </StyledForm>
        </div>
    )
}

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   width: 80%;
   margin: 0 auto;
   @media(min-width: ${rem(768)}) {
      width: 30%;
   }
`;

export default LoginForm;