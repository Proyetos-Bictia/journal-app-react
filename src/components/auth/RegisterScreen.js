import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { setErrorAction, RemoveErrorAction } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.ui);

    const { msgError } = state

    // console.log(msgError);

    const [formValues, handleInputChange] = useForm({
        name: 'Maira',
        email: 'alejadabo-26@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setErrorAction('name is required'));
            console.log('name is required');
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction('not valid email'));
            console.log('not valid email');
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setErrorAction('Password should be at least six characters and match each other'));
            console.log('Password should be at least six characters and match each other');
            return false
        }
        dispatch(RemoveErrorAction());
        return true;
    }

    const handleSetUi = () => {
        if(msgError) {
            dispatch(RemoveErrorAction());
        }
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form
                onSubmit={handleRegister}
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
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
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
                <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <Link
                    to="/auth/login"
                    className="link"
                    onClick={handleSetUi}
                >
                    Alredy registered?
            </Link>
            </form>
        </>
    )
}
