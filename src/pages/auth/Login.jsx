// src/Login.js
import React, { useState } from 'react';
import "./login.css";
import { auth, provider } from '../../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login({ setIsAuth }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        }).catch((error) => {
            setError(error.message);
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <p>Sign In to Continue</p>
                <button className='google-login' onClick={signInWithGoogle}>
                     <img src="/google-icon" alt=""/>Continue with Google</button>
                <p>or</p>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className='error'>Incorrect credentials!</p>}
                    <button type="submit" className='login-button'>Login with Email</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
