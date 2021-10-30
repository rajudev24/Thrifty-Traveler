import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Signin.css'

const Signin = () => {
    const {signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/';

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then( result =>{
            const user = result.user;
            history.push(redirect)
    
        })
    }
    return (
        <div className='signin-page'>
            <div className='login-form'>
            <h4 className='text'>Please Login using Google</h4>
            <button onClick={handleGoogleLogin} className='google-btn '> <span><i class="fab fa-google"></i></span> Google</button>
            </div>
        </div>
    );
};

export default Signin;