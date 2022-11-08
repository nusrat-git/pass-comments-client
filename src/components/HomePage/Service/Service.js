import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, img, price, business_name } = service;

    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h2>Business Name: {business_name}</h2>
                    <h2>Price: {price}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-3">Bakery</div>
                        <div className="badge badge-outline p-3">Products</div>
                    </div>
                </div>
                <div>
                    <Link>
                        <button className='btn btn-info mb-8'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;