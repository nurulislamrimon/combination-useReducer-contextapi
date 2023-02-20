import React from 'react';
import { usePosts } from '../useHooks/useReducer/PostProvider';
// import { usePhotos } from '../useHooks/PhotosFetchGlobaly';
import PhotoCard from './PhotoCard';

const Home = () => {
    // const {posts} = usePhotos();
    const { state } = usePosts();

    if (state.loading) {
        return (
            <div className='flex justify-center items-center'>
                <h2>Loading....</h2>
                <p>Please wait</p>
            </div>
        )
    } else if (state.error) {
        return (
            <div className='flex justify-center items-center'>
                Something went wrong!!
            </div>
        )
    }


    return (
        <div className='grid grid-cols-3 gap-3 m-3'>
            {state?.posts?.map(post => <PhotoCard key={post?.id} post={post}></PhotoCard>)}
        </div>
    );
};

export default Home;