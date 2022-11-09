import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../../../images/404error.png';

const Error = () => {
    return (
        <div className='my-20'>
            <img src={Error404} alt="" className='mx-auto' />
            <Link to='/'>
                <button className='btn bg-blue-400 border-none'>Go Back</button>
            </Link>
        </div>
    );
};

export default Error;