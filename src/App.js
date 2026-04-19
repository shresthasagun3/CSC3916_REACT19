import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import Authentication from './components/authentication';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <HashRouter>
        <MovieHeader />
        <Routes>
          <Route path="/" element={token ? <MovieList /> : <Navigate to="/signin" />} />
          <Route path="/movielist" element={token ? <MovieList /> : <Navigate to="/signin" />} />
          <Route path="/movie/:movieId" element={token ? <Movie /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<Authentication />} />
          <Route path="/signup" element={<Authentication />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;