import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Services from '../../components/Services/Services';
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
                path:'services',
                element: <Services></Services>,
                loader: ()=> fetch('http://localhost:5000/services')
            }
        ]
    }
])