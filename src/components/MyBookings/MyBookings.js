import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth()
    const [myBookings, setMyBookings] = useState([])

    useEffect(()=>{
        fetch('https://grim-labyrinth-64998.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data=>setMyBookings(data))
     },[]);

     const handleMyBookings = id =>{
        const proceed = window.confirm('Are you sure want to delete ?')
        if(proceed){
            const url = `https://grim-labyrinth-64998.herokuapp.com/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Successfully Deleted')
                const remainingBookings = myBookings.filter(myBooking => myBooking._id !== id);
                setMyBookings(remainingBookings);
            }
        })
        }
    }

    return (
        <div className='container py-5'>
            <h2 className='text-center mb-5'>My Bookings Table</h2>
            
            <div className='overflow-auto'>
            <table className="table table-bordered text-center w-100">
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
                 myBookings.filter(booking=>booking.email === user.email).map(myBooking =><tr key={myBooking._id}>
                    <td>{myBooking.name}</td>
                    <td>{myBooking.email}</td>
                    <td>{myBooking.phone}</td>
                    <td>{myBooking.address}</td>
                    <td>{myBooking.packages}</td>
                    <td>{myBooking.person}</td>
                    <td>{myBooking.date}</td>
                    <td><button className='btn btn-danger' onClick={()=>handleMyBookings(myBooking._id)}>Delete</button></td>
                  </tr>)
                  }

                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyBookings;