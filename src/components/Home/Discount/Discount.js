import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <div className='discount my-5'>
            <div className="row">
                <div className="col-12">
                    <h4>EXCLUSIVE OFFER</h4>
                    <h2>GET 30% OFF YOUR FIRST TRIP</h2>
                    <hr />
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button className='btn btn-lg btn-outline-light px-5 py-3'>VIEW PACKAGES</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;