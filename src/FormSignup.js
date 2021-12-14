import React from 'react'

const FormSignup = () => {
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
                        placeholder='Enter your name'/>
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
                        placeholder='Enter your email'/>
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
                        placeholder='Enter your password'/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' 
                    className='form-lable'>
                        Password2
                    </label>
                    <input
                        id='password2'
                        type='password2' 
                        name='password2' 
                        className='form-input' 
                        placeholder='Enter your password2'/>
                </div>
            </form>
        </div>
    )
}

export default FormSignup
