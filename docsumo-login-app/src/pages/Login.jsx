import React, { useState } from 'react';
import './Login.css';
import { ReactComponent as CompanyLogo } from '../images/icon.jsx';

const Login = () => {
    
    const [workEmail, setWorkEmail] = useState('');
    const [password, setPassword] = useState('');
    const logoProps = {
        width: '36px',
        height: '36px',
        color: '#4d61fc'
    };

    return (
        <>
            <div className='container'>
                <div className='content'>
                    <div className='header'>
                        <h1>Login to Docsumo</h1>
                        <div>
                            <CompanyLogo {...logoProps}/>
                        </div>
                    </div>
                    <form className='login-form'>
                        <button>Login</button>
                    </form>
                    <div className='footer'>
                        <label>Don't have an account?</label>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;