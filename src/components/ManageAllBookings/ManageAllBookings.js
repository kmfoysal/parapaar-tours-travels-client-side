import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css';

const ManageAllBookings = () => {
    const [manageBookings, setManageBookings] = useState([])

    useEffect(()=>{
        fetch('https://grim-labyrinth-64998.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data=>setManageBookings(data))
     },[]);

     const handleManageBookings = id =>{
        const proceed = window.confirm('Are you sure want to delete ?')
        if(proceed){
            const url = `https://grim-labyrinth-64998.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted')
                const remainingBookings = manageBookings.filter(manageBooking => manageBooking._id !== id);
                setManageBookings(remainingBookings);
            }
        })
        }
    }

    return (
        <div className='container text-center py-5'>
            <div className='row'>
                <div className="col-12">
                <h2 className='mb-4'>Manage All Bookings</h2>
            <h5 className='mb-3'>Available Booking Data : {manageBookings.length}</h5>

                <div className='overflow-auto'>
                <table className="table table-bordered w-100">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Package</th>
                    <th scope="col">Total Person</th>
                    <th scope="col">Travel Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                 manageBookings.map(booking =><tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.phone}</td>
                    <td>{booking.address}</td>
                    <td>{booking.packages}</td>
                    <td>{booking.person}</td>
                    <td>{booking.date}</td>
                    <td><button className='btn btn-danger' onClick={()=>handleManageBookings(booking._id)}>Delete</button></td>
                  </tr>)
                  }

                </tbody>
                </table>
                </div>
                </div>
            </div>
           
        </div>
    );
};

export default ManageAllBookings;