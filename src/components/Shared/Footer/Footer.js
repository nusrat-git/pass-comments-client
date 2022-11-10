import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../logo.png';

const Footer = () => {
    return (
        <div className='ml-6 md:ml-0'>
            <footer className="footer md:p-20 p-5 bg-base-200 text-base-content">
                <div>
                    <img src={Logo} alt='' className='w-36' />
                    <p>PASS COMMENTS<br />Providing genuine feedbacks</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;