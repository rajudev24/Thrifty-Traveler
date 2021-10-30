import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
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
            <div>
                
            </div>
        </div>
    );
};

export default AddService;