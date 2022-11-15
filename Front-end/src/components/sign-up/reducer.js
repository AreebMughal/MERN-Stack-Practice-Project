const updateState = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { ...state, value: action.value };
    }
    return { value: '', inputRef: null };
}

export const firstNameReducer = (state, action) => {
    // if (action.type === 'USER_INPUT') {
    //     return { ...state, value: action.value };
    // }
    // return { value: '', inputRef: null };
    return updateState(state, action)
}

export const lastNameReducer = (state, action) => {
    return updateState(state, action)
}

export const emailReducer = (state, action) => {
    return updateState(state, action)
}

export const passwordReducer = (state, action) => {
    return updateState(state, action)
}

export const userTypeReducer = (state, action) => {
    return updateState(state, action)
}