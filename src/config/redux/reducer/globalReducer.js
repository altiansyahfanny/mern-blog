const initialState = {
    erorrs: [],
    loading: false,
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERRORS':
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state

    }
}

export default globalReducer;