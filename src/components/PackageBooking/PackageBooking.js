import React, { useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import usePackages from '../../hooks/usePackages';
import './PackageBooking.css';

const PackageBooking = () => {
    const {user} = useAuth();
    const [packages] = usePackages();
    const {packageId} = useParams();

    const packageBookingDetails = packages?.find(singlePackage => singlePackage.id === Number(packageId))

    const nameRef = useRef();
    const emailRef = useRef();
    const personRef = useRef();
    const packageRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();

    const handleBooking = (event)=>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const person = personRef.current.value;
        const packages = packageRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const date = dateRef.current.value;

        const newBooking = {name, email, person, packages, address, phone, date}

        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully Submitted');
                event.target.reset()
            }
        })
        event.preventDefault();
    }

    return (
        <div>
            <img src={packageBookingDetails?.imgUrl} className='img-fluid' alt="img" style={{height:'350px', width:'100%', objectFit:'cover'}} />
            <h2 className='my-4 text-center'>{packageBookingDetails?.name} Packge For Per Person Only ${packageBookingDetails?.price}</h2>

            <div className='container py-4'>
                <form className="booking-form shadow-lg row g-3" onSubmit={handleBooking}>
                    <h3 className='mb-4 text-center'>Please Fillup The Booking Form</h3>
                    <div className="col-md-6">
                        <input type="text" ref={nameRef} className="form-control form-control-lg" value={user.displayName}/>
                    </div>
                    <div className="col-md-6">
                        <input type="email" ref={emailRef} className="form-control form-control-lg" value={user.email}/>
                    </div>
                    <div className="col-md-6">
                        <input type='number' ref={personRef}  className="form-control form-control-lg" placeholder='Please enter number of person' required/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" ref={packageRef} className="form-control form-control-lg" value={packageBookingDetails?.name}/>
                    </div>
                    <div className="col-12">
                        <input type="text" ref={addressRef} className="form-control form-control-lg" placeholder="Please enter your address"/>
                    </div>
                    <div className="col-md-6">
                        <input type="tel" ref={phoneRef} className="form-control form-control-lg" placeholder="Please enter your phone number" required/>
                    </div>
                    <div className="col-md-6">
                        <input type="date" ref={dateRef} className="form-control form-control-lg" required />
                    </div>
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-lg btn-warning w-100">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PackageBooking;