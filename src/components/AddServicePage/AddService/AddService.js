import React, { useState } from 'react';

const AddService = () => {

    const [business, setBusiness] = useState('');
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [serviceData, setServiceData] = useState([]);


    const sendService = (event) => {

        event.preventDefault();
        
        const serviceDatas = {
            name: service,
            img: image,
            price: price,
            description: description,
            business_name: business
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDatas)
        })
            .then(res => res.json())
            .then(data => {
                const newService = [...serviceData, data];
                setServiceData(newService);
            })
            .catch(err => console.error(err))

        event.target.reset();
        
    }


    return (
        <div className='m-12'>
            <h1 className='font-bold text-4xl mb-9'>Add A Service</h1>
            <form className="w-full max-w-lg mx-auto" onSubmit={sendService}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-business_name">
                            Business Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-business-name" type="text" placeholder="Business Name" required onChange={(e) => setBusiness(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-service-name">
                            Service Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-service-name" type="text" placeholder="Service Name" required onChange={(e) => setService(e.target.value)} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-service-price">
                            Service Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-service-price" type="text" placeholder="Service Price" required onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                            Image
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="file" />
                    </div>
                </div>
                <div className="divider">OR</div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
                            Image Url
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-image" type="text" placeholder="Your image url" required onChange={(e) => setImage(e.target.value)} />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Service Description
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Service Description" id='description' required onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div>
                    <button type='submit' className='btn btn-info text-white'>Add Service</button>
                </div>

            </form>
        </div>
    );
};

export default AddService;