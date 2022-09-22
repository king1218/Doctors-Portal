import React from 'react';

const Banner = () => {
    return (
      <div className="hero  my-10 lg:my-32 ">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img src='https://i.ibb.co/N2w4gcQ/chair.png' alt='banner' className="lg:flex-1 md:max-w-sm xl:max-w-lg  rounded-lg shadow-2xl" />
        <div className='lg:flex-1'>
          <h1 className="md:text-5xl text-3xl font-bold">Your New Smile Starts Here! </h1>
          <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none ">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;