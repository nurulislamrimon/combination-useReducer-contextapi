import React from 'react';
import { usePhotos } from '../useHooks/PhotosFetchGlobaly';
import PhotoCard from './PhotoCard';

const Album2 = () => {
    const posts = usePhotos();
    const filteredAlbum = posts?.filter(post => post.userId === 2)
    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {filteredAlbum?.map(post => <PhotoCard key={post?.id} post={post}></PhotoCard>)}
        </div>
    );
};

export default Album2;