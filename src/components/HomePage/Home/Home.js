import React, { useEffect, useState } from 'react';
import img1 from '../../../images/chocolate-chip-muffin.jpg';
import img2 from '../../../images/colorful-cupcakes.jpg';
import img3 from '../../../images/chocolate-donuts.jpg';
import img4 from '../../../images/crunchy-bread.jpg';
import img5 from '../../../images/fruit-and-cream-cake.jpg';
import img6 from '../../../images/iced-coffee.jpg';
import img7 from '../../../images/traditional-italian-cappuccino.jpg';
import Banner from '../../../images/banner.png';
import { Link, useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import useTitle from '../../../title/Title';


const Home = () => {
    useTitle('Home')

    const services = useLoaderData();
    const [homeReviews, setHomeReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home/reviews')
            .then(res => res.json())
            .then(data => setHomeReviews(data));
    }, [])

    return (
        <div>
            <div className='md:flex items-center justify-center my-20 md:gap-20 gap-10 ml-5 md:ml-o'>
                <div className="carousel carousel-center md:max-w-md space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                        <img src={img1} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img6} className="rounded-box" alt='' />
                    </div>
                    <div className="carousel-item">
                        <img src={img7} className="rounded-box" alt='' />
                    </div>
                </div>
                <div>
                    <img src={Banner} alt="" />
                    <p className='text-3xl font-extrabold my-2'>Pass comments on your recent experience.</p>
                    <p className='text-lg font-semibold my-4'>Share your opinion about our services with others. <br />
                        Feel free to judge. Your judgement will help us improve.. <br />
                        Slide to explore more of our services. <br /></p>
                </div>
            </div>
            <div className='grid md:grid-cols-3 md:p-8 md:m-28'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            <div>
                <Link to='/services'>
                    <button className="btn btn-info my-16 md:my-0">Load More</button>
                </Link>
            </div>
            <div className='md:w-3/4 rounded-lg md:m-44 bg-info md:p-10 p-3 ml-6 '>
                <h1 className='text-5xl font-semibold my-7'>Register</h1>
                <p className='text-lg font-semibold my-5'>Get help from us to reach your service to customers <br />
                    and get genuine feedback on your services</p>
                <form className='mx-auto w-full p-3'>
                    <div className='md:flex justify-center gap-3'>
                        <div className='my-4'>
                            <input type="text" placeholder='Your Name' className=' rounded-2xl p-4 w-full' />
                        </div>
                        <div className='my-4'>
                            <input type="email" placeholder='Your Email' className=' rounded-2xl p-4 w-full' />
                        </div>
                    </div>
                    <div className='md:flex justify-center gap-3'>
                        <div className='my-4'>
                            <input type="text" placeholder='Service' className=' rounded-2xl p-4 w-full' />
                        </div>
                        <div className='my-4'>
                            <input type="text" placeholder='Business' className=' rounded-2xl p-4 w-full'/>
                        </div>
                    </div>
                    <div className='my-4'>
                        <input type="text" placeholder='Website' className=' rounded-2xl p-4 md:w-96 w-full' />
                    </div>
                    <textarea name="" id="" cols="30" placeholder='Description' className='rounded-2xl p-4 md:w-96 w-full'></textarea>
                    <div>
                        <button type="submit" className='btn my-5 bg-slate-500 border-none'>Send Us</button>
                    </div>
                </form>
            </div>
            <div className=' md:mx-40 '>
                <h1 className='text-3xl font-bold my-10'>Some of our recent reviews</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 md:my-20'>
                    {
                        homeReviews.map(homeReview =>
                            <div key={homeReview._id}>
                                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <img src={homeReview.reviewer_img} alt="" className=' w-3/12' />
                                            <h1>{homeReview.reviewer}</h1>
                                        </div>
                                        <div className='flex items-center justify-between'>

                                        </div>
                                        <p>{homeReview.text}</p>
                                        <div className='flex items-center justify-between'>

                                            <div className="card-actions justify-start my-4">
                                                <div className="badge badge-outline p-3">Rating: {homeReview.rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div>
                    <Link to='/services'>
                        <button className='btn btn-info mb-20'>See more</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;