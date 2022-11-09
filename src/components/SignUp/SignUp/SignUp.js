import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import signUpImg from '../../../images/signup.png'
import { AuthContext } from '../../Shared/Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const {
        createUser,
        getEmail,
        getPassword,
        email,
        password,
        userSignInGoogle,
        setUser
    } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();

    const handleSignUp = event => {
        event.preventDefault();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                <Navigate to='/'></Navigate>
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
                setUser(user);
                console.log(user);
                <Navigate to='/'></Navigate>
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }


    return (
        <div className='flex my-20 justify-center gap-10'>
            <div>
                <img src={signUpImg} alt="" />
            </div>
            <form className="w-full max-w-lg" onSubmit={handleSignUp}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="janedoe@email.com" onChange={getEmail} required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                            Image File
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="file" required />
                    </div>
                </div>
                <div className="divider">OR</div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image2">
                            Image Url
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image2" type="text" placeholder="Image Url" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" onChange={getPassword} required />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <Link to='/'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign up
                        </button>
                    </Link>
                    <div className="divider">OR</div>
                    <div>
                        <button className='btn bg-blue-500 text-white font-bold border-none' onClick={handleGoogleSignIn}>Sign Up With Google</button>
                    </div>
                    <div>Don't have an account? <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600 underline mt-6" to='/signin'>
                        Sign In
                    </Link></div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;