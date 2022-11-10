import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUpImg from '../../../images/signup.png'
import { AuthContext } from '../../Shared/Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [users, setUsers] = useState([]);

    const fullName = `${firstName} ${lastName}`;

    const {
        createUser,
        userSignInGoogle,
        setUser,
        setLoading,
        updateUserProfile
    } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const userData = {
        name: fullName,
        email: email,
        image: image
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                handleUserProfile(fullName, image);
                sendUser(userData);
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const sendUser = (userData) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                const newUsers = [...users, data];
                setUsers(newUsers);
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSignIn = (event) => {
        event.preventDefault();

        userSignInGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                handleUserProfile(fullName, image); 
                sendUser(userData);
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleUserProfile = (name, image) => {
        const profile = {
            displayName: name,
            photoURL: image
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }


    return (
        <div className='md:flex my-20 justify-center gap-10'>
            <div>
                <img src={signUpImg} alt="" />
            </div>
            <form className="w-full max-w-lg" onSubmit={handleSignUp}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="janedoe@email.com" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div><div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image2">
                            Image Url
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image2" type="text" placeholder="Image Url" required onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className="divider">OR</div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                            Image File
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="file" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)} required />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <button className="btn btn-info hover:bg-gray-400 border-none" type="submit">
                        Sign up
                    </button>
                    <div className="divider">OR</div>
                    <div>
                        <button className='btn btn-info hover:bg-gray-400 border-none' onClick={handleGoogleSignIn}>Sign Up With Google</button>
                    </div>
                    <div>Don't have an account? <Link className="inline-block align-baseline font-bold text-sm text-sky-500 hover:text-blue-600 underline mt-6" to='/signin'>
                        Sign In
                    </Link></div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;