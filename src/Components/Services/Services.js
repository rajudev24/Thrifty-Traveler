import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch(`https://damp-bastion-85274.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div> 
            <div className='packages-hero'>
               
            </div>
            <h2 className='text-center mt-5'>Pick & Go your Destination</h2>
            <div className='packages'>
                {
                    services.map(service => <Service
                    key ={service._id}
                    service ={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;