import { useLoaderData } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';

const MyReviews = () => {
    const myReviews = useLoaderData();

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
                                </tr>
                            </tfoot>
                        </table>
                    </div>
            }

        </div >
    );
};

export default MyReviews;