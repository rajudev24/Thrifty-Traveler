import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const { _id, name, img, description, prcie, } = props.package;

    return (
        <div className='package'>
            <img src={img} alt="" />

            <h4 className='pt-3'>{name}</h4>
            <p>{description} </p>
            <div className='d-flex justify-content-between p-3'>
                <h3>${prcie} </h3>
                <Link to={`/order/${_id}`}>
                    <button className='book-btn'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Package;