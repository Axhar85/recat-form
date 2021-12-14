import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = ({
        username = '',
        email = '',
        password = '',
        password2 =''
    });
}