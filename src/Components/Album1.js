import React from 'react';
import { usePosts } from '../useHooks/useReducer/PostProvider';
// import { usePhotos } from '../useHooks/PhotosFetchGlobaly';
import PhotoCard from './PhotoCard';

const Album1 = () => {
    // const posts = usePhotos();

    const { state } = usePosts();
    const filteredAlbum = state.posts?.filter(post => post.userId === 1)
    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {filteredAlbum?.map(post => <PhotoCard key={post?.id} post={post}></PhotoCard>)}
        </div>
    );
};

export default Album1;