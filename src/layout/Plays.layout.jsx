import React from 'react';
import Navbar from '../components/Navbar/Navbar.Component';
import Footer from '../components/Footer/FooterPlays.Component';

const PlaysLayoutHoc =
    (Component) => 
    ({ ...props}) => {
      return (
        <div>
          <Navbar />
          <Component {...props}/>
          <Footer />
        </div>
      );
    };

export default PlaysLayoutHoc