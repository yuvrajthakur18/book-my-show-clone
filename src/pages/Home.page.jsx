import React, { useState } from 'react';

// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

// HOC Layouts
import DefaultLayoutHoc from '../layout/Default.layout' ;

const HomePage = () => {
  const [recommendedMovies , setRecommendedMovies] = useState([]);
  const [premierMovies , setPremierMovies] = useState([]);
  const [onlineStreamEvents , setOnlineStreamEvents] = useState([]);


  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">  
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider 
              title="Recommended Movies"
              subject="List of Recommended Movies"
              posters={recommendedMovies}
              isDark={false}
          />
      </div>

      <div className='bg-premier-800 py-12'>
          <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3"> 
              <div className="hidden md:flex">
                  <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                      alt="rupay" 
                      className="w-full h-full" />
              </div>
              
              <PosterSlider 
              title="Premiers"
              subject="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
              />
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider 
              title="Online Streaming Events"
              subject=""
              posters={onlineStreamEvents}
              isDark={false}
          />
      </div>
    </>
  )
  // Above Used TAILWIND : 
      // mx-auto means margin x-axis auto 
      // px-4 means padding of 4 in x-axis         
      // md:px-12 my-8 means in medium screens padding x = 12 .... my-8 does not apply to medium screens.... my-8 means margin y = 8
                  // ---> this 4 8 12 are not units they are some predefined size sets.
      // text-2xl determines font size
      // font-bold
      // text-gray-800   
      // sm:ml-3  means on small screens margin left of 3         
      // ml-0 my-3   means on any other screen margin left = 0 and margin-y = 3
      // md:flex means on medium or greater then that as we have not specified anything for large screen.
      // w-full h-full    means width and height of full
}

export default DefaultLayoutHoc(HomePage)