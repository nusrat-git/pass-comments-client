import { useLoaderData } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';

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
                        alert('deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div className='m-20 px-16'>
            {
                (myReviews.length === 0) ?
                    <div>
                        <h1>No reviews were added</h1>
                        <button className='btn btn-info my-20'>Go to Services</button>
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
                                    <th>Date</th>
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
                                            <td>{myReview.created}</td>
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
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
            }

        </div >
    );
};

export default MyReviews;