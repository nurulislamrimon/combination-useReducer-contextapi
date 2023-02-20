import React from 'react';
import { usePhotos } from '../useHooks/PhotosFetchGlobaly';
import { usePosts } from '../useHooks/useReducer/PostProvider';
import PhotoCard from './PhotoCard';

const Album4 = () => {
    // const posts = usePhotos();
    const { state } = usePosts();

    const filteredAlbum = state.posts?.filter(post => post.userId === 4)
    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {filteredAlbum?.map(post => <PhotoCard key={post?.id} post={post}></PhotoCard>)}
        </div>
    );
};

export default Album4;