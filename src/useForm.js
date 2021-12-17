import { useState, useEffect } from "react";
import validateInfo from "./validateInfo";

const useForm = validateInfo => {
    const [values, setValues] = useState({
        username : '',
        email : '',
        password : '',
        password2 :''
    });

    const [errors, setErrors] = useState({});

    const [isSubmit, setIsSubmit] = ({false})

    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values,[name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmit(true);
    }
    return { handleChange, values, handleSubmit, errors };
}

export default useForm;