import './App.css';
import axios from 'axios';

// Routing 
import { Routes, Route } from "react-router-dom";

// React slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

// Some axios shortcuts or abbreviations that we will use for shortening the code.

axios.defaults.baseURL = "https://api.themoviedb.org/3" ;  // starting url 
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY; // url after ? mark 

// We created a .env file and make this variable named REACT_APP_API_KEY there and 
// stored our api key there so that when we push our code then our api key is not pushed 
// on git and then it will be safe. Bcoz .env file is not pushed on github.

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
