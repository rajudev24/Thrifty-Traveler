import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Order.css'
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const Order = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [services, setServices] = useState([])
    const history = useHistory();

    useEffect(() => {
        fetch('https://damp-bastion-85274.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const findService = services.find(service => service?._id === id);
    // const tripName = findService?.name;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://damp-bastion-85274.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Successfully Completed');
                    reset();
                    history.push('/orders');
                }
                console.log(res)
            })


    };



    return (
        <div>
            <img src="" alt="" />
            <div className='order-section'>
                <div className='service-details'>
                    <img src={findService?.img} alt="" />
                    <h4>{findService?.name} </h4>
                    <p>{findService?.description} </p>
                    <h2>${findService?.prcie} </h2>
                </div>
                <div className='user-section' >
                    <form className='user-details' onSubmit={handleSubmit(onSubmit)}>   
                        
                        <input defaultValue={user.displayName} {...register("Name")} />
                        <input defaultValue={user.email} {...register("email")} />
                        <input {...register("address")} placeholder='address' />
                        <input {...register("city")} placeholder='city' />
                        <input {...register("state")} placeholder='state' />
                        <input {...register("country")} placeholder='Country' />
                        <input type="number" {...register("number")} placeholder='Phone number' />

                        <button>Order Now</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Order;