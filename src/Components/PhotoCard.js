import React from 'react';
import { usePosts } from '../useHooks/useReducer/PostProvider';

const PhotoCard = ({ post }) => {
    const { dispatch } = usePosts();

    return (
        <div className='border p-1'>
            <p>{post.title}</p>
            <button className='btn btn-sm' onClick={() => dispatch({ type: "check", payload: { datas: post } })
            }>Add to check</button>
        </div >
    );
};

export default PhotoCard;