import React from 'react'
import FormSignup from './FormSignup'
import { useState } from 'react'


const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
    setIsSubmitted(true);
}
    return (
        <div>
            <FormSignup />
            {!isSubmitted ? <FormSignup submitForm=
            {submitForm}/> : <FormSuccess />}
        </div>
    )
}

export default Form
