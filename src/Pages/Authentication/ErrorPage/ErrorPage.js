import React from 'react';

const ErrorPage = ({error}) => {
    return (
        <div>
            <p className='text-red-500 text-center '>{error.message}</p>
        </div>
    );
};

export default ErrorPage;