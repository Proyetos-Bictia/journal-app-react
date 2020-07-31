import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { startLoading, finishLoading } from './ui';
import { noteLogout } from './notes';

export const startLoginEmailPassword = (email, password) => {

    return async (dispatch) => {
        dispatch(startLoading())
        try {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            const { uid, displayName } = user
            dispatch(login(uid, displayName));
            dispatch(finishLoading())
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
            Swal.fire('Error', error.message, 'error');
        }
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(error => {
                console.log(error);
                Swal.fire('Error', error.message, 'error');
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
        dispatch(noteLogout())
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}