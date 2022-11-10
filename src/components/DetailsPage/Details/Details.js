import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../title/Title';
import { AuthContext } from '../../Shared/Context/AuthProvider/AuthProvider';

const Details = () => {

    useTitle('Details');

    const details = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    const notify = () => {

        if (!user) {
            toast("Please sign in to review")
        }

    };


    useEffect(() => {
        fetch(`https://pass-comments-server.vercel.app/reviews/${details._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(data);
            })
    }, [details._id])

    const { _id, name, img, price, business_name, description } = details;

    return (
        <div>
            <div className="hero bg-zinc-100 my-20 md:p-20 ml-3 md:ml:3 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
                    <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className='mt-10 text-xl font-bold'>Business Name: {business_name}</p>
                        <p className='text-lg mt-6 font-semibold'>Price: {price}</p>
                        <p className="py-6">{description}</p>
                        {
                            user ?
                                <Link to={`/details/${_id}/addreview`}>
                                    <button className="btn btn-info font-bold">Add a review</button>
                                </Link>
                                :
                                <div>
                                    <Link to='/signin' className='btn btn-info mr-6'>Sign In</Link>
                                    <Link>
                                        <button className="btn btn-info" onClick={notify}>Add a review</button>
                                    </Link>
                                </div>
                        }

                    </div>
                </div>
            </div>
            <div className=' md:mx-40'>
                <h1 className='text-3xl font-bold'>{reviews.length} Recent Reviews of {name}</h1>
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
            <ToastContainer />
        </div>
    );
};

export default Details;