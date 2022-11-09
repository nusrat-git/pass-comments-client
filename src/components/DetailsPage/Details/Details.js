import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {

    const details = useLoaderData();
    const [reviews, setReviews] = useState([]);

    console.log(details);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${details._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
    }, [details._id])

    const { name, img, price, business_name } = details

    return (
        <div>
            <div className="hero bg-zinc-100 my-20 p-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className='mt-10 text-xl font-bold'>Business Name: {business_name}</p>
                        <p className='text-lg mt-6 font-semibold'>Price: {price}</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/details/review'>
                            <button className="btn btn-info text-white font-bold">Add a review</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>Reviews of {name}</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-20'>
                    {
                        reviews.map(review =>
                            <div key={review._id}>
                                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <img src={review.reviewer_img} alt="" className=' w-3/12' />
                                            <h1>{review.reviewer}</h1>
                                        </div>
                                        <div className='flex items-center justify-between'>

                                        </div>
                                        <p>{review.text}</p>
                                        <div className='flex items-center justify-between'>

                                            <div className="card-actions justify-start my-4">
                                                <div className="badge badge-outline p-3">Rating: {review.rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;