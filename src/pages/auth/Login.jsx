import React from 'react';
import "./login.css";
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
    const navigate = useNavigate();
    const [error, setError] = React.useState('');

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        }).catch((error) => {
            setError(error.message);
        });
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2 className='login-title'>Sign In to Continue</h2>
                <button className='google-login-button' onClick={signInWithGoogle}>
                    <img src="/google-icon.png" alt="Google Icon" className="google-icon"/> Continue with Google
                </button>
                {error && <p className='login-error'>{error}</p>}
            </div>
        </div>
    );
}

export default Login;
