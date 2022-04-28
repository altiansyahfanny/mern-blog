import * as api from '../api';

export const setFormRegister = (formType, formValue) => {
    return { type: 'REGISTER', formType, formValue }
}


export const register = (form) => async (dispatch) => {

    try {
        const respons = await api.register(form)
        console.log('Register Success : ', respons)
        dispatch({ type: 'RESET_FORM_AUTH' })
    } catch (error) {
        console.log(error)
    }
}

export const login = (form) => async (dispatch) => {

    try {
        const respons = await api.login(form)
        console.log('Login Success : ', respons.data.data.token)
        dispatch({ type: 'RESET_FORM_AUTH' })

        window.localStorage.setItem('token', respons.data.data.token)
        window.location.href = '/'

    } catch (error) {
        console.log(error)
    }
}