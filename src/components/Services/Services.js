import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllService from '../AllService/AllService';

const Services = () => {

    const allServices = useLoaderData();

    return (
        <div className='grid grid-cols-3 md:p-8 gap-10'>
            {
                allServices.map(allService => <AllService allService={allService}></AllService>)
            }
        </div>
    );
};

export default Services;