import { actiontypes } from '../useReducer/actionTypes'


export const initialState = {
    loading: false,
    posts: [],
    error: false,
    check: []
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case actiontypes.loading:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actiontypes.posts:
            return {
                ...state,
                loading: false,
                posts: action.payload.datas,
                error: false
            }
        case actiontypes.error:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actiontypes.check:
            return {
                ...state,
                loading: false,
                error: false,
                check: [...state.check, action.payload.datas]
            }
        default:
            return state;
    }
}