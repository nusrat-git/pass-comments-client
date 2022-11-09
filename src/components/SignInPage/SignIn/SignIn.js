import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInImg from '../../../images/signin.png'
import { AuthContext } from '../../Shared/Context/AuthProvider/AuthProvider';

const SignIn = () => {

    const {
        getEmail,
        getPassword,
        email,
        password,
        userSignIn,
        userSignInGoogle,
        setUser
    } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                navigate('/');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }

    const handleGoogleSignIn = (event) => {
        event.preventDefault();

        userSignInGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }


    return (
        <div className='m-20 flex gap-40 justify-center items-center'>

            <div>
                <img src={SignInImg} alt="" />
            </div>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" onChange={getEmail} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={getPassword} required />
                    </div>
                    <div className='mt-4'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <div className="divider">OR</div>
                        <div>
                            <button className='btn bg-blue-500 text-white font-bold border-none' onClick={handleGoogleSignIn}>Sign In With Google</button>
                        </div>
                        <div>Already have an account? <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600 underline mt-6" to='/signup'>
                            Sign Up
                        </Link></div>

                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default SignIn;