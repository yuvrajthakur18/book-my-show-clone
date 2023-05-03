import React, { useState, useEffect, useContext } from 'react';
import MovieLayoutHoc from '../layout/Movie.layout';
import { useParams } from 'react-router-dom'; // With the help of this we can get the id of the particular movie.
import axios from 'axios' ;
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay} from "react-icons/fa" ;
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';


const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext); 

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect (() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };

    requestCast();
  }, [id]);

  useEffect (() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };

    requestMovie();
  }, [id]);

  const settingsCast = {

  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };

  return (
    <>
      <MovieHero />

      <div className="my-12 container-uv px-4 lg-ml-20 lg:w-2/3">
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-gray-800 font-bold text-2xl'>
            About the movie
          </h1>
          <p>{movie.overview}</p>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-3'>
            Applicable Offers
          </h2>
          <div className='flex flex-col gap-3 lg:flex-row '>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>
                  Visa Stream Offer
                </h3>
                <p className='text-gray-600'>
                  Get 50% off upto INR 150 on all Rupay Card* on Book My Show Stream.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full'/>
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>
                  Film Pass
                </h3>
                <p className='text-gray-600'>
                  Get 50% off upto INR 150 on all Rupay Card* on Book My Show Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        {/* Cast Slider */}

        <div className='my-8'>
          <hr />
        </div>

        {/* Recommended Movies Slider */}
        <div className='my-8'>
          <PosterSlider 
            config={settings} 
            title='Recommended Movies' 
            posters={recommendedMovies} 
            isDark={false} 
          />
        </div>

        <div className='my-8'>
          <hr />
        </div>

        {/* Similar Movies Slider */}      
        <div className='my-8'>
          <PosterSlider 
            config={settings} 
            title='You might also like' 
            posters={similarMovies} 
            isDark={false} 
          />
        </div>


      </div>
    </>
  )
};

export default MovieLayoutHoc(MoviePage)