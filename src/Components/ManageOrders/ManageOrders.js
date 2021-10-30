import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://damp-bastion-85274.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))

    },[])

    return (
        <div>
            <div className='manage-order'>
                
            </div>
            
            <h4 className='text-center mt-5'> Total Order Items {orders.length}</h4>
            {
                orders.map(order => <ManageOrder
                key = {order._id}
                order ={order}
                ></ManageOrder>)
            }
        </div>
    );
};

export default ManageOrders;