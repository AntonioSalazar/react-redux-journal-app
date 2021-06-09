import types from "../types/types"


export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const unSetError = () => {
    return {
        type: types.uiUnSetError
    }
}