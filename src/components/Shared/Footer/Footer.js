import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../logo.png';

const Footer = () => {
    return (
        <div className='ml-6 md:ml-0'>
            <footer className="md:p-20 p-5 bg-base-200 text-base-content">
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <img src={Logo} alt='' className='w-36' />
                        <p>PASS COMMENTS<br />Providing genuine feedbacks</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div className='flex flex-col'>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>
                    <div className='flex flex-col'>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <p className='m-4 md:m-0'>Copyright © 2022 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;