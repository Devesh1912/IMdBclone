
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Header from "./components/header/Header"
import Home from './pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './pages/movieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<h2> {<Movie/>}</h2>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h2> error page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
