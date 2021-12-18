import React from 'react';
import FormSignup from './FormSignup';
import { useState } from 'react';
import FormSuccess from './FormSuccess';


const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
    setIsSubmitted(true);
}
    return (
        <div>
        
            {!isSubmitted ? <FormSignup submitForm=
            {submitForm}/> : <FormSuccess />}
        </div>
    )
}

export default Form
