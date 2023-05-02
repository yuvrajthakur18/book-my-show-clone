import React from 'react'

// Importing icons from React-icons ----> Box icons
import { SiBookmyshow } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { BsFillEnvelopeFill, BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsPinterest, BsLinkedin} from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className='footer-container py-4 h-auto bg-zinc-700 text-gray-300 '>
      <div className='section-one flex items-center justify-center gap-80'>
        <div className='flex gap-4'>
          <div className='text-white'>
            <SiBookmyshow />
          </div>
          <div className='font-bold text-white'>
            List Your Show
          </div>
          <div className='text-white'>
            Got a show,event,activity,or a great experience? 
            Partner with us & get listed on BookMyShow
          </div>
        </div>
        <div className=''>
          <button className='bg-red-500 p-2 rounded-md text-white'>
            Contact Today!
          </button>
        </div>
      </div>

      <div className='section-two bg-zinc-600 my-4 h-32 flex justify-center gap-28 items-center'>
          <div className='text-7xl text-gray-300'>
            <div className='ml-9'>
              <RiCustomerService2Line />
            </div>
            <h3 className='text-sm'>24/7 CUSTOMER CARE</h3>
          </div>
          <div className='text-7xl text-gray-300'>
            <div className='ml-20'>
              <GiTicket />
            </div>
            <h3 className='text-sm'>RESEND BOOKING CONFIRMATION</h3>
          </div>
          <div className='text-7xl text-gray-300'>
            <div className='ml-16'>
              <BsFillEnvelopeFill />
            </div>
            <h3 className='text-sm'>SUBSCRIBE TO THE NEWSLETTER</h3>
          </div>
      </div>

      <div className='section-three flex justify-center p-6'>
        <img 
          src='https://in.bmscdn.com/webin/common/icons/logo.svg'
          alt='book my show logo'
        />
      </div>

      <div className='section-four flex justify-center gap-4 text-2xl text-gray-500'>
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsYoutube />
        <BsPinterest />
        <BsLinkedin />
      </div>

      <div className='section-five flex justify-center text-sm text-gray-400 pt-4'>
        <p class>Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      </div>
      <div className='section-five pl-28 pr-28 flex justify-center text-sm text-gray-400 text-center'>
        <p>The images and content used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended for study purpose. Unauthorized use is prohibited and punishable by law  </p>
      </div>


    </div>
  )
}

export default Footer