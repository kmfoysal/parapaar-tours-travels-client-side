import React from 'react';
import discoverImg from '../../../images/discover.jpg';
import './SimpleSections.css';

const SimpleSection = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6 discover">
                    <h2>DISCOVER UNLIMITED BEAUTY</h2>
                    <h5>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.</h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip sunt in culpa qui officia deserunt mollit laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip sunt in culpa qui officia deserunt mollit laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip sunt in culpa qui officia deserunt mollit laborum. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-6">
                    <img src={discoverImg} alt="img" className='img-fluid'/>
                </div>
            </div>
        </div>
    );
};

export default SimpleSection;