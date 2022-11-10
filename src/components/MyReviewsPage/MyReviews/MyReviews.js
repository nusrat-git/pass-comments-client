import { Link, useLoaderData } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdModeEditOutline } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const myReviews = useLoaderData();
    const [reviews, setReviews] = useState([]);


    const handleDelete = (id) => {
        const decision = window.confirm('Do you want to delete this review?')
        if (decision) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                        toast('deleted successfully');
                    }
                })
        }
    }

    return (
        <div className='md:m-20 md:px-16 my-10'>
            {
                (myReviews.length === 0) ?
                    <div>
                        <h1>No reviews were added</h1>
                        <Link to='/services'>
                            <button className='btn btn-info my-20'>Go to Services</button>
                        </Link>
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th><GoPrimitiveDot></GoPrimitiveDot></th>
                                    <th>Service</th>
                                    <th>Review</th>
                                    <th>Rating</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReviews.map(myReview =>
                                        <tr key={myReview._id}>
                                            <th><GoPrimitiveDot></GoPrimitiveDot></th>
                                            <td>{myReview.service_name}</td>
                                            <td>{myReview.text}</td>
                                            <td>{myReview.rating}</td>
                                            <td><button><MdModeEditOutline></MdModeEditOutline></button></td>
                                            <td><button onClick={() => handleDelete(myReview._id)}><MdDelete></MdDelete></button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th><GoPrimitiveDot></GoPrimitiveDot></th>
                                    <th>Service</th>
                                    <th>Review</th>
                                    <th>Rating</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
            }
            <ToastContainer />
        </div >
    );
};

export default MyReviews;