import React from 'react';
import { Link } from 'react-router-dom';

const AllService = ({ allService }) => {
    const { _id, name, img, price, business_name, description } = allService;
    // const descriptionChar = description.substring(0, 100) + '...';
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-info text-xs">NEW</div>
                    </h2>
                    <h2>Business Name: {business_name}</h2>
                    <h2>Price: {price}$</h2>
                    <p>{description.substring(0, 100) + '...'}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-3">Bakery</div>
                        <div className="badge badge-outline p-3">Services</div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${_id}`}>
                        <button className='btn btn-info mb-8'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllService;