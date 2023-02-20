import React from 'react';
import { usePosts } from '../useHooks/useReducer/PostProvider';
import PhotoCard from './PhotoCard';

const Check = () => {
    const { state } = usePosts();

    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {state?.check?.map(post => <PhotoCard type="check" key={post?.id} post={post}></PhotoCard>)}
        </div>
    );
};

export default Check;