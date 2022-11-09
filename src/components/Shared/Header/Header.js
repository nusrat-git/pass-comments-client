import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../logo.png';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Header = () => {

  const {

    user,
    userSignOut

  } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {

      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }

  return (
    <div className='m-3'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost" to='/home'>
            <div className='flex items-center gap-4'>
              <img src={Logo} alt='' className=' w-12' />
              <p className=' font-bold text-2xl'>Pass Comments</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className='text-lg font-semibold'><Link to='/home'>Home</Link></li>
            <li className='text-lg font-semibold'><Link to='/services'>Services</Link></li>
            <li className='text-lg font-semibold'>
              {
                user?.uid ?
                  <span className=' gap-8'>
                    <Link to='/myreviews'>My Reviews</Link>
                    <Link>About</Link>
                  </span>
                  :
                  <Link to='/reviews'>Reviews</Link>
              }
            </li>
            <li className='text-lg font-semibold'>
              {
                user?.uid ?
                  <Link to='/addservice'>Add Service</Link>
                  :
                  <Link>About</Link>
              }
            </li>
            <li className='text-lg font-semibold'><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
            {
              user?.uid ?

                <div className='flex items-center justify-center gap-6'>
                  <div>
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} alt='' />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link className="btn bg-sky-500 border-none font-bold">
                      <button onClick={handleSignOut}>Sign Out</button>
                    </Link>
                  </div>

                </div>


                :
                <Link className="btn bg-sky-500 border-none font-bold" to='/signin'>Sign In</Link>

            }
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;