import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';



const Testimonial = () => {
    const reviews = [
        {
           _id:1,
           name:"Jhon Hoky",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: people1,
           location:'USA'
        },
        {
           _id:2,
           name:"Winson Herry",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: people3,
           location:'India'
        },
        {
           _id:3,
           name:"Roman Rings",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: people2,
           location:'Bangladesh'
        }
    ]
    return (
        <section className='my-32'>
            <div className='flex justify-between items-center xl:px-12'>
                <div className=''><h4 className="text-primary text-xl font-bold">Testimonials</h4>
                <h1 className='md:text-3xl text-xl '>What Our Patients Says</h1></div>
                <div><img src={quote} className='lg:w-48 w-24' alt="" /></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                {
                    reviews.map(review=><Reviews
                    key={review._id}
                    review={review}
                    >

                    </Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;