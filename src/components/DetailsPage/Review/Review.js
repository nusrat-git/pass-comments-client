import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import reviewImg from '../../../images/review.png';
import { AuthContext } from '../../Shared/Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {

    const [review, setReview] = useState([]);
    const [text, setText] = useState('');
    const [rating, setRating] = useState();

    const data = useLoaderData();
    const { _id, name } = data;

    const { user } = useContext(AuthContext);

    const sendReview = event => {
        event.preventDefault();

        const reviewData = {
            reviewer: user?.displayName,
            reviewer_img: user?.photoURL,
            reviewer_email: user?.email,
            service_name: name,
            service_id: _id,
            text: text,
            rating: rating
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                const newReview = [...review, data];
                setReview(newReview);
            })
            .catch(err => console.error(err))

        event.target.reset();

    }

    if (rating < 0) {
        toast('Your rating cannot be a negative number')
    }

    if (rating > 5) {
        toast('You cannot rate more than 5')
    }



    return (
        <div>
            <div className='m-20 flex justify-around'>
                <div className=' -mr-44 shadow-lg h-full p-9 rounded-xl'>
                    <img src={reviewImg} alt="" className='w-96 h-96' />
                    <h1 className='text-2xl font-bold text-zinc-500 mb-9'>Leave a review about a service</h1>
                </div>
                <form className="w-full max-w-lg" onSubmit={sendReview}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                                Your Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" defaultValue={user?.displayName} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Your Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" defaultValue={user?.email} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                                Image Url
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text" defaultValue={user?.photoURL} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-service-name">
                                Rating
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-service-name" type="number" placeholder="Rating" required onChange={(e) => setRating(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                Service Description
                            </label>
                            <textarea className="textarea textarea-bordered w-full" placeholder="Service Description" id='description' required onBlur={(e) => setText(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button className='btn btn-info' type='submit'>Add Your Review</button>

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Review;