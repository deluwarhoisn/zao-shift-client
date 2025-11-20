import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import UseAxiosSecure from '../../../../hooks/UseAxiosSecure';

const Payment = () => {

  const { parcelId } = useParams();
  const axiosSecure = UseAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    }
  });

  if (isLoading) {
    return <span className='loading loading-infinity loading-xl'></span>;
  }

  return (
    <div>
      <h2>Please Pay: {parcel?.parcelName}</h2>

      <button className='btn btn-primary text-black'>
        Pay
      </button>
    </div>
  );
};

export default Payment;
