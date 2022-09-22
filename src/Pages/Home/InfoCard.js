import React from 'react';

const InfoCard = ({img,bg,title,description}) => {
    return (
        <div className={`card lg:card-side   text-white shadow-xl ${bg} xl:p-4`}>
  <figure><img src={img} alt="Album" className='p-4'/></figure>
  <div className="card-body">
    <h2 className="card-title text-center">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
    );
};

export default InfoCard;