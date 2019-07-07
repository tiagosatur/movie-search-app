import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form'
import { Input } from '../../Input';

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => { 
        console.log('FORM SUBMITTED', data) 
    }
    
    console.log('errors',errors);

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type="text" 
                    name="username" 
                    ref={register({required: true})}
                    errorMessage={errors.username && errors.username.message}
                    isInvalid={errors.username ? true : false }
                    placeholder='Username'
                    
                />
                <Input 
                    type='password' 
                    name='password' 
                    ref={register({required: true})} 
                    placeholder='Password'
                    errors={errors}
                />
                <button type="submit" name="exampleRequired" />Login</button>

            </form>
        </div>
    )
}

export default Form;