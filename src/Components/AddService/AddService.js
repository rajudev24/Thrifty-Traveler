import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const [service, setService] = useState();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        setService(data)
        axios.post('https://damp-bastion-85274.herokuapp.com/services', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Successfully added the service')
                    reset();
                }
            }) 
    };
    return (
        <div>
            <h3 className='service-title'>Please Add a Service</h3>
            <form className='add-service' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder='Country name' />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("prcie")} placeholder='Price' />
                <input {...register("img")} placeholder='Image URL' />
                <input type="submit" />
            </form>
            <div >
                {
                    service?.name?
                   <div className=' new-service'>
                        <img src={service?.img} alt="" />
                    <h3>{service?.name} </h3>
                    <p>{service?.description} </p>
                    <h3>${service?.prcie} </h3> 
                   </div>: ''
                }
            </div>
        </div>
    );
};

export default AddService;