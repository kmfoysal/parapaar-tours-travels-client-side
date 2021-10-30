import React from 'react';
import { useParams } from 'react-router';
import usePackages from '../../hooks/usePackages';

const PackageBooking = () => {

    const [packages] = usePackages();
    const {packageId} = useParams();

    const packageBookingDetails = packages?.find(singlePackage => singlePackage.id === Number(packageId))
    return (
        <div>
            <h2>Booking</h2>
            <h2>{packageBookingDetails?.name}</h2>
        </div>
    );
};

export default PackageBooking;