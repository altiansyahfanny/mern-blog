const initialState = {
    formRegister: {
        name: '',
        password: '',
        email: '',
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                formRegister: {
                    ...state.formRegister,
                    [action.formType]: action.formValue
                }
            };
        case 'RESET_FORM_AUTH':
            return {
                form: {
                    name: '',
                    password: '',
                    emial: '',
                },
            };
        default:
            return state

    }
}

export default authReducer;