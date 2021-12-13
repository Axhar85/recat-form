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
                    <label htmlFor='e-mail' 
                    className='form-lable'>
                        e-mail
                    </label>
                    <input
                        id='e-mail'
                        type='text' 
                        name='username' 
                        className='form-input' 
                        placeholder='Enter your name'/>
                </div>
            </form>
        </div>
    )
}

export default FormSignup
