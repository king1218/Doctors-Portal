import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import cavity from '../../assets/images/cavity.png';
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    const services= [
        {
            _id:1,
            name:'Fluoride Treatment',
            img:fluoride,
            description:'Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities.'
            
        },
        {
            _id:2,
            name:'Cavity Filling',
            img:cavity,
            description:`Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection.`
            
        },
        {
            _id:3,
            name:'Teeth Whitening',
            img:whitening,
            description:`Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.`
            
        },
    ];
    return (

        <div>
            <div className='text-center my-32 '>
                <h4 className='text-primary text-2xl font-semibold'>OUR SERVICES</h4>
                <h1 className='text-4xl'>Services We Provide</h1>
                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 xl:container mx-auto'>
           
           {
            services.map(service=><Service
            key={service._id}
            service={service}></Service>)
           }
            </div>
       <div>
            <div className="hero mt-24">
            <div className="hero-content flex-col lg:flex-row gap-20 p-0">
            <img src={treatment} alt='Dental care' className="object-cover md:max-w-sm rounded-lg shadow-2xl" />
            <div className='p-3'>
            <h1 className="md:text-5xl text-3xl font-bold">Exceptional Dental Care,</h1>
            <h1 className="md:text-5xl text-3xl font-bold"> on Your Terms</h1>
            <p className="py-6">PIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none">Get Started</button>
      </div>
  </div>
</div>
            </div>
        </div>

    );
};

export default Services;