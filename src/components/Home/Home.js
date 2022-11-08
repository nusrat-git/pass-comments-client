import React from 'react';
import img1 from '../../images/chocolate-chip-muffin.jpg';
import img3 from '../../images/chocolate-donuts.jpg';
import img2 from '../../images/colorful-cupcakes.jpg';
import img4 from '../../images/crunchy-bread.jpg';
import img5 from '../../images/fruit-and-cream-cake.jpg';
import img6 from '../../images/iced-coffee.jpg';
import img7 from '../../images/traditional-italian-cappuccino.jpg';
import Banner from '../../images/banner.png';

const Home = () => {
    return (
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
    );
};

export default Home;