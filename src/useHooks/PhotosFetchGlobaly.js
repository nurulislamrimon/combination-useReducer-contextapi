// import React, { createContext, useContext, useEffect, useState } from 'react';


// const PHOTOS_CONTEXT = createContext();
// const PhotosFetchGlobaly = ({ children }) => {
//     const [data, setData] = useState([]);
//     // fetching datas
//     useEffect(() => {
//         // fetch("https://jsonplaceholder.typicode.com/posts")
//         fetch("posts.json")
//             .then(res => res.json()).then(datas => setData(datas))
//     }, []);
//     return (
//         <PHOTOS_CONTEXT.Provider value={data}>
//             {children}
//         </PHOTOS_CONTEXT.Provider>
//     );
// };
// export const usePhotos = () => {
//     const data = useContext(PHOTOS_CONTEXT)
//     return data;
// }

// export default PhotosFetchGlobaly;