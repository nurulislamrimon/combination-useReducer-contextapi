import React from 'react';
import { actiontypes } from '../useHooks/useReducer/actionTypes';
import { usePosts } from '../useHooks/useReducer/PostProvider';

const PhotoCard = ({ post, type }) => {

    const { dispatch } = usePosts();

    return (
        <div className='border p-1'>
            <p>{post.title}</p>
            {type !== "check" && <button className='btn btn-sm' onClick={() => dispatch({ type: "check", payload: { datas: post } })
            }>Add to check</button>}
            {
                type === "check" && <button className='btn btn-sm btn-outline' onClick={() => dispatch({
                    type: actiontypes.removeCheck,
                    payload: { datas: post }
                })}>Remove from check</button>
            }
        </div >
    );
};

export default PhotoCard;