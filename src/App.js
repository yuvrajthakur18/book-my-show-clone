import './App.css';

// Routing 
import { Routes, Route } from "react-router-dom";

// React slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />   
      <Route path='/plays' element={<PlayPage />}  />
    </Routes>
  );
            // :id acts as a parameter here .....you can actually get the particular id movie by this 
}

export default App;
