import React from 'react'
import { useLocation } from 'react-router-dom';

const ServiceCard = (props) => {
    const location = useLocation();
    const { title, subtitle, desc, remarks} = props;
    return (
        <>
            <div className="card-holder p-4 rounded-md overflow-hidden col-span-1">
                <div className="card-head flex items-start justify-center flex-col">

                    <div className="card-title flex items-center justify-between w-full ">
                        <h3 className="text-md font-medium">{title}</h3>
                    <span className="rounded-md bg-gray-500 py-1 px-2 text-sm font-normal">
                       {remarks}
                    </span>
                    </div>
                        <h5 className='text-sm font-normal text-gray-400'>{subtitle}</h5>
                </div>
                <div className="card-desc py-1">
                    <p>{location?.pathname ==='/' ? (desc?.length >= 100 ? desc?.substring(0,100) + '...': desc) :  desc}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
