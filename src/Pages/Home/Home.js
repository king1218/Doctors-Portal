import React from 'react';
import Appointment from '../Appointment/Appointment';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
      <div>
        <div className='px-4 lg:px-12'>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
        </div>
        <Appointment></Appointment>
        <div className='px-4 lg:px-12'>
        <Testimonial></Testimonial>
        </div>
        <ContactUs></ContactUs>
        <div className='px-4 lg:px-12'>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;