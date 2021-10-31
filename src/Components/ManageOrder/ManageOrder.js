import React from 'react';

const ManageOrder = (props) => {
    const {tripCountry, Name, _id} = props.order
    //Delete Order
    const handeleDeleteOrder = id =>{
        fetch(`https://damp-bastion-85274.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Are you sure want to delete the Orders?')
            }
        })
        
    }

    return (
        <div className='text-center p-3'>
            
            <h4>Order person Name: {Name}</h4> 
            <h5>Order Package Name: {tripCountry} </h5>
            <button onClick={()=> handeleDeleteOrder(_id)}>Delete</button>
        </div>
    );
};

export default ManageOrder;