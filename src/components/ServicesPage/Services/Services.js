import { useLoaderData } from 'react-router-dom';
import AllService from '../AllService/AllService';

const Services = () => {

    const allServices = useLoaderData();

    console.log(allServices.length);

    return (
        <div className=' md:m-28 mb-20'>
            <h1 className='text-4xl font-semibold my-10'>{allServices.length} Services Available</h1>
            {
                allServices.length ===0 ?
                    <div>
                        <p className="btn bg-white border-none loading text-black my-10"></p>
                    </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 md:p-8 gap-10'>
                        {
                            allServices.map(allService => <AllService allService={allService} key={allService._id}></AllService>)
                        }
                    </div>
            }
        </div>
    );
};

export default Services;