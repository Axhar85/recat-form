export default function validateInfo (values) {
    let errors = {};

    if(!values.username.trim()){
        errors.username = 'Username required';
    }

    if(!values.email){
        errors.email = 'email required';
    } else if (!/^[A-Za-z]+/.test(values.name.trim())){
        errors.email = 'Email address is invalid';
    }

    if(!values.password){
        errors.password = 'Password required';
    }   else if(values.password.length > 6){ 
        errors.password = 'Password need to be 6 letters or more';
    }

    if(!values.password2){
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password){
        errors.password2 = 'Password do not match'
    }
}