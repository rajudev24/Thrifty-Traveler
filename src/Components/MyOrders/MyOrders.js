import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const [orders, setOrders] = useState([])


    const { user } = useAuth();
    useEffect(() => {
        fetch('https://damp-bastion-85274.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    //Cancel Order
    const handeleCancelOrder = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Are you sure want to delete the Orders?')
            }
        })
        
    }
    const orderList = orders.filter(order => order.email === user.email)
    console.log(orderList)
    return (
        <div>
            <div className='order-hero'>
            </div>
            {
                orderList.map(orderItem =>
                 <div className='orders-items' key = {orderItem._id}>
                    
                    {/* <h2>{orderItem._id}</h2> */}
                    <h2 className='mt-5 text-center'>Your Orderd Name - {orderItem.Name} </h2> 
                    <button className='cancel-btn' onClick={()=> handeleCancelOrder(orderItem._id)}>Cancel Order</button>
                </div> )
            }
            
            
        </div>
    );
};

export default MyOrders;