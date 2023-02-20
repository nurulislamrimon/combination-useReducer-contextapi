import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actiontypes } from './actionTypes';
import { initialState, productReducer } from './PostReducer';

const POST_CONTEXT = createContext();
const PostProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);
    useEffect(() => {
        dispatch({ type: actiontypes.loading })
        fetch("/posts.json")
            .then(res => res.json())
            .then(datas => dispatch({
                type: actiontypes.posts,
                payload: { datas: datas }
            })).catch(() => dispatch({ type: actiontypes.error }))
    }, [])

    return (
        <POST_CONTEXT.Provider value={{ state, dispatch }}>
            {children}
        </POST_CONTEXT.Provider>
    );
};

export default PostProvider;

export const usePosts = () => {
    const posts = useContext(POST_CONTEXT);
    return posts;
}