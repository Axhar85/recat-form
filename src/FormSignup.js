import React from 'react'
import useForm from './useForm'

const FormSignup = () => {
    const {handleChange , values} = useForm();
    return (
        <div className='form-content-right '>
            <form className='form'>
                <h2>
                    Account create by filling informaion below
                </h2>
                <div className='form-inputs'>
                    <label htmlFor='username' 
                    className='form-lable'>
                        User Name
                    </label>
                    <input
                        id='User Name'
                        type='text' 
                        name='username' 
                        className='form-input' 
                        placeholder='Enter your name'
                        value={values.username}
                        onChange={handleChange}/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' 
                    className='form-lable'>
                        e-mail
                    </label>
                    <input
                        id='e-mail'
                        type='email' 
                        name='email' 
                        className='form-input' 
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' 
                    className='form-lable'>
                        Password
                    </label>
                    <input
                        id='password'
                        type='password' 
                        name='password' 
                        className='form-input' 
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' 
                    className='form-lable'>
                        Password2
                    </label>
                    <input
                        id='password2'
                        type='password' 
                        name='password2' 
                        className='form-input' 
                        placeholder='Enter your password2'
                        value={values.password2}
                        onChange={handleChange}/>
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign-up
                </button>
                <span className='form-input-login'>
                    Already have an accoubt? Login
                    <a href='#'>here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
