import React, { useState } from 'react';
import { NextArrow } from './Arrows.Component';
import { PrevArrow } from './Arrows.Component';

// Hero Carousel Slider from react slick 
import HeroSlider from "react-slick"

const HeroCarousel = () => {
  
    const [images, setimages] = useState (
      [
        {
          "adult": false,
          "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
          "genre_ids": [
            16,
            12,
            10751,
            14,
            35
          ],
          "id": 502356,
          "original_language": "en",
          "original_title": "The Super Mario Bros. Movie",
          "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
          "popularity": 9065.306,
          "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
          "release_date": "2023-04-05",
          "title": "The Super Mario Bros. Movie",
          "video": false,
          "vote_average": 7.5,
          "vote_count": 631
        },
        {
          "adult": false,
          "backdrop_path": "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
          "genre_ids": [
            18,
            28
          ],
          "id": 677179,
          "original_language": "en",
          "original_title": "Creed III",
          "overview": "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damien Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damien — a fighter who has nothing to lose.",
          "popularity": 5253.149,
          "poster_path": "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
          "release_date": "2023-03-01",
          "title": "Creed III",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 924
        },
        {
          "adult": false,
          "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
          "genre_ids": [
            878,
            12,
            28
          ],
          "id": 76600,
          "original_language": "en",
          "original_title": "Avatar: The Way of Water",
          "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
          "popularity": 4810.649,
          "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
          "release_date": "2022-12-14",
          "title": "Avatar: The Way of Water",
          "video": false,
          "vote_average": 7.7,
          "vote_count": 6947
        },
        {
          "adult": false,
          "backdrop_path": "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg",
          "genre_ids": [
            35,
            9648,
            28
          ],
          "id": 638974,
          "original_language": "en",
          "original_title": "Murder Mystery 2",
          "overview": "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding.",
          "popularity": 3571.437,
          "poster_path": "/wdffZv8gIiWy6xr4t7hWBWtUwpl.jpg",
          "release_date": "2023-03-28",
          "title": "Murder Mystery 2",
          "video": false,
          "vote_average": 6.5,
          "vote_count": 616
        },
        {
          "adult": false,
          "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
          "genre_ids": [
            53,
            35,
            80
          ],
          "id": 804150,
          "original_language": "en",
          "original_title": "Cocaine Bear",
          "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
          "popularity": 1550.773,
          "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
          "release_date": "2023-02-22",
          "title": "Cocaine Bear",
          "video": false,
          "vote_average": 6.5,
          "vote_count": 729
        },
        {
          "adult": false,
          "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
          "genre_ids": [
            878,
            12,
            53,
            28
          ],
          "id": 700391,
          "original_language": "en",
          "original_title": "65",
          "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
          "popularity": 1918.606,
          "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
          "release_date": "2023-03-02",
          "title": "65",
          "video": false,
          "vote_average": 6.3,
          "vote_count": 424
        },
        {
          "adult": false,
          "backdrop_path": "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
          "genre_ids": [
            16,
            10751,
            14,
            12,
            35
          ],
          "id": 315162,
          "original_language": "en",
          "original_title": "Puss in Boots: The Last Wish",
          "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
          "popularity": 1878.108,
          "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
          "release_date": "2022-12-07",
          "title": "Puss in Boots: The Last Wish",
          "video": false,
          "vote_average": 8.3,
          "vote_count": 5144
        },
      ]);

    const settingsLG = {
      arrows: true,
      slidesToShow: 1,    // It determines number of slides to show.
      infinite: true,    // It will keep changing slides in loop.
      slideToScroll: 1,   // It determines number of slides to scroll at once.
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      autoplay: true,
      speed: 800,      // How fast transition happens
      autoplaySpeed: 2000,    // How long slide stays on the screen before changing.
      cssEase: "linear",      // animation transition property -- as per my knowledge
    };

    const settings = {
      arrows: true,
      slidesToShow: 1,
      infinite: true, 
      speed: 100,
      slideToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    return (
        <>
            <div className='lg:hidden'> 
                <HeroSlider { ...settings }>
                    {
                        images.map ((images, index) => (
                            <div className='w-full h-56 md:h-80 py-3' key={index}>
                                <img
                                    src = {`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                    alt = "Hero Banner"
                                    className='w-full h-full rounded-md object-cover'
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            
            <div className='hidden lg:block'>
            <HeroSlider { ...settingsLG }>
                    {
                        images.map ((images, index) => (
                            <div className='w-full h-[30rem] px-2 py-3' key={index}>
                                <img
                                    src = {`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                    alt = "Hero Banner"
                                    className='w-full h-full rounded-md object-cover'
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    )

    // lg:hidden    means for large screens hidden.
    // hidden lg:block    it means for smaller and medium screens it will be hidden but for large screens it will be display of block
}

export default HeroCarousel