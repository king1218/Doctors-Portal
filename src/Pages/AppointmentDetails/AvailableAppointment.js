import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services,setservices] = useState([]);
    const [treatment,setTreatment]=useState(null);
    const formattedDate = format(date,'PP');
const {data: services,isLoading,refetch} = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res=>res.json())
    
)
if(isLoading){
    return <Loading></Loading>
}
    // useEffect(()=>
    // {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setservices(data));
    // },[formattedDate])
    return (
        <div>
            
             <div>
                <h1 className='text-secondary text-center  mt-20 text-2xl'>Available Services on {format(date, 'PP')}</h1>
                <h2 className='text-xl text-center mt-5'>Please select a service</h2>
             </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-20'>
                {
                    services?.map(service=><Service
                   key={service._id} 
                   service={service}
                   setTreatment={setTreatment}
                   refetch={refetch}
                    >

                    </Service>)
                }
             </div>

             {treatment && <BookingModal 
             treatment={treatment}
             setTreatment={setTreatment} 
             refetch={refetch} 
             date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;