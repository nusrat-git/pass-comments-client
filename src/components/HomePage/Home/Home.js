import React from 'react';
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


const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <div className='flex items-center justify-center my-20 gap-20'>
                <div className="carousel carousel-center max-w-md space-x-4 bg-neutral rounded-box">
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
            <div className='grid grid-cols-3 md:p-8'>
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            <div>
                <Link to='/services'>
                    <button className="btn btn-info my-10">Load More</button>
                </Link>
            </div>
            <div className='w-3/4 mx-auto rounded-lg m-10 bg-info p-10'>
                <h1 className='text-5xl font-semibold my-7'>Register</h1>
                <p className='text-lg font-semibold my-5'>Get help from us to reach your service to customers <br />
                    and get genuine feedback on your services</p>
                <form className='mx-auto'>
                    <div className='flex justify-center gap-3'>
                        <div className='my-4'>
                            <input type="text" placeholder='Your Name' className=' rounded-2xl p-4 w-full' />
                        </div>
                        <div className='my-4'>
                            <input type="email" placeholder='Your Email' className=' rounded-2xl p-4 w-full' />
                        </div>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <div className='my-4'>
                            <input type="text" placeholder='Service' className=' rounded-2xl p-4' />
                        </div>
                        <div className='my-4'>
                            <input type="text" placeholder='Business' className=' rounded-2xl p-4' />
                        </div>
                    </div>
                    <div className='my-4'>
                        <input type="text" placeholder='Website' className=' rounded-2xl p-4 w-96' />
                    </div>
                    <textarea name="" id="" cols="30" placeholder='Description' className='rounded-2xl p-4 w-96'></textarea>
                    <div>
                        <button type="submit" className='btn my-5 bg-slate-500 border-none'>Send Us</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Home;