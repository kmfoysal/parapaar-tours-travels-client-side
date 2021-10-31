import React from 'react';
import usePackages from '../../../hooks/usePackages';
import Package from '../../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages] = usePackages();
    return (
        <div className ='container py-5'>
            <h2 className='text-center text-uppercase mb-5'>Our Popular Packages</h2>
            {(packages.length !== 0)? <div className='packages'>
                {
                    packages.map(singlePackage => <Package key={singlePackage.id} singlePackage ={singlePackage}></Package>)
                }
            </div>
            :
            'Loading'
            }
        </div>
    );
};

export default Packages;