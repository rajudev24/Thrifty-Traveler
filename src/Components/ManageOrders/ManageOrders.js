import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://damp-bastion-85274.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    // const handleActiveButton = (id) =>{
    //     const url = `http://localhost:5000/orders/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers : {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify('Approved')
    //     })
    //     .then()
    //     // .then(res => res.json())
    //     // .then(data =>{
    //     //     console.log(data)
    //     // })
    // }

    const handeleDeleteOrder = id => {
        fetch(`https://damp-bastion-85274.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure want to delete the Orders?')
                }
            })

    }

    return (
        <div>
            <div className='manage-order'>

            </div>

            <h4 className='text-center mt-5'> Total Order Items {orders.length}</h4>
            {
                orders.map(order => <div className='text-center p-3' key={order._id} >
                    <h4>Order person Name: {order.Name}</h4>
                    <h5>Order Package Name: {order.tripCountry} </h5>
                    <p>Order Status: {order.status} </p>
                    {/* <button className='me-3' onClick={()=>handleActiveButton(order._id)} >Active Order</button> */}
                    <button onClick={() => handeleDeleteOrder(order._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;