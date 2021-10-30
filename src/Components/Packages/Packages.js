import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(()=>{
        fetch('https://damp-bastion-85274.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPackages(data))
    },[])
    
    return (
        <div>
            <h2 className='packages-title'>Our Package</h2>
            <div className='packages'>
            {
                packages.map(packag => <Package 
                    key = {packag._id}
                    package ={packag}
                    ></Package>)
            }
            </div>
        </div>
    );
};

export default Packages;