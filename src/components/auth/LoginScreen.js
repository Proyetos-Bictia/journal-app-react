import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { setErrorAction, RemoveErrorAction } from '../../actions/ui';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.ui)
    const { msgError, loading } = state
    const [formValues, handleInputChange] = useForm({
        email: 'alejadabo-26@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setErrorAction('not valid email'));
            console.log('not valid email');
            return false;
        } else if (password.length < 5) {
            dispatch(setErrorAction('Password should be at least six characters'));
            console.log('Password should be at least six characters and match each other');
            return false
        }
        dispatch(RemoveErrorAction());
        return true;
    }

    const handleSetUi = () => {
        if (msgError) {
            dispatch(RemoveErrorAction());
        }
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn"
            >
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                    disabled={loading}
                >
                    Login
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to="/auth/register"
                    className="link"
                    onClick={handleSetUi}
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
