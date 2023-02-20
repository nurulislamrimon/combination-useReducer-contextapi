import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Album1 from './Components/Album1';
import Album2 from './Components/Album2';
import Album3 from './Components/Album3';
import Album4 from './Components/Album4';
import Album5 from './Components/Album5';
import Check from './Components/Check';
import Home from './Components/Home';
// import PhotosFetchGlobaly from './useHooks/PhotosFetchGlobaly';
import PostProvider from './useHooks/useReducer/PostProvider';

function App() {

  return (
    <div className="App">
      <header className='grid  m-5 gap-5 grid-cols-3'>
        <Link to="/" className="btn">Home</Link>
        <Link to="/album1" className="btn">Album - 1</Link>
        <Link to="/album2" className="btn">Album - 2</Link>
        <Link to="/album3" className="btn">Album - 3</Link>
        <Link to="/album4" className="btn">Album - 4</Link>
        <Link to="/album5" className="btn">Album - 5</Link>
        <Link to="/check" className="btn">Check</Link>
      </header>
      <PostProvider>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/album1" element={<Album1 />} />
          <Route path="/album2" element={<Album2 />} />
          <Route path="/album3" element={<Album3 />} />
          <Route path="/album4" element={<Album4 />} />
          <Route path="/album5" element={<Album5 />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </PostProvider>
    </div>
  );
}

export default App;
