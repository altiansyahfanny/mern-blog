const initialState = {
    form: {
        title: '',
        body: '',
        image: '',
    },
    formError: null,
    imagePrev: null,
}

const createBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.formType]: action.formValue
                }
            };
        case 'RESET_FORM_DATA':
            return {
                form: {
                    title: '',
                    body: '',
                    image: '',
                },
                imagePrev: null
            };
        case 'SET_IMAGE_PREV':
            return {
                ...state,
                imagePrev: action.payload
            };
        case 'SET_FORM_ERROR':
            return {
                ...state,
                formError: action.payload
            };
        default:
            return state

    }
}

export default createBlogReducer;