import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const details = useLoaderData();
    const { name, img, price, business_name } = details

    return (
        <div className='m-20'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <p>Business Name: {business_name}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info text-white font-bold">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;