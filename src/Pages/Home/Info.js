import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'


const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12 xl:container mx-auto'>
            <InfoCard img={clock} bg='bg-gradient-to-r from-secondary to-primary' title='Opening Hours' description='10am to 6pm' ></InfoCard>
            <InfoCard img={phone} bg='bg-accent' title='Contact us now' description='+8801580394350' ></InfoCard>
            <InfoCard img={marker} bg='bg-gradient-to-r from-secondary to-primary' title='Visit our location' description='Mohammodpur,Dhaka'></InfoCard>
        </div>
    );
};

export default Info;