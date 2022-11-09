import { createBrowserRouter } from 'react-router-dom';
import AddService from '../../components/AddServicePage/AddService/AddService';
import Blogs from '../../components/BlogPage/Blogs/Blogs';
import Details from '../../components/DetailsPage/Details/Details';
import Reviews from '../../components/DetailsPage/Reviews/Reviews';
import Error from '../../components/ErrorPage/Error/Error';
import Home from '../../components/HomePage/Home/Home';
import Services from '../../components/ServicesPage/Services/Services';
import SignIn from '../../components/SignInPage/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp/SignUp';
import Main from '../../layout/Main';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/home')
            },
            {
                path: 'home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/home')
            },
            {
                path: 'services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'reviews',
                element: <Reviews></Reviews>
            },
            {
                path: 'addservice',
                element: <AddService></AddService>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])