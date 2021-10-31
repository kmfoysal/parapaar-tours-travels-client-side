import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const {id, name, price, imgUrl, description} = props.singlePackage;
    return (
        <div className='container'>
            <div className="card mb-3 shadow-lg">
                <div className="row g-0">
                    <div className="col-xl-6 col-lg-5 col-md-4">
                    <img src={imgUrl} className="img-fluid rounded-start" alt="img" style={{height:'100%'}}/>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h6 className="card-title mb-3">Package Start From ${price}</h6>
                        <Link to={`/packageBooking/${id}`}>
                        <button className='btn btn-warning w-100'>Book Now</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;