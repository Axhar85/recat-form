import React from 'react'

const FormSignup = () => {
    return (
        <div className='form-content-right '>
            <form className='form'>
                <h2>
                    Account create by filling informaion below
                </h2>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-lable'>
                        <input type='text' name='username' className='form-input'>
                            
                        </input>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default FormSignup
