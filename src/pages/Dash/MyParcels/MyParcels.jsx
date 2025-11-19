import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../hooks/UseAuth';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';

const MyParcels = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: parcel = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h1>All of my parcels: {parcel.length} </h1>
        </div>
    );
};

export default MyParcels;