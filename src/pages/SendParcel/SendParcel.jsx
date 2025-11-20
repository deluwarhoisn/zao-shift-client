import { useForm, useWatch, Watch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';
import UseAuth from '../../hooks/UseAuth';

const SendParcel = () => {
    const { register,
        handleSubmit,
        control,
        //  formState: { errors } 
    } = useForm()
    const { user } = UseAuth();

    const axiosSecure = UseAxiosSecure();

    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const region = [...new Set(regionsDuplicate)];
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })

    const districtsByRegion = region => {
        const regionsDistricts = serviceCenters.filter(c => c.region === region);
        const District = regionsDistricts.map(d => d.District);
        return District;
    }

    console.log(region);

    const handleSendParcel = data => {
        console.log(data);
        const isDocument = data.parcelType === 'document'
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);
        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;

        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }
        console.log('cost', cost);
        data.cost = cost;


        Swal.fire({
            title: "Agree With the Cost?",
            text: `You Will be charged !${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,I agree"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post('/parcels', data).then(res => {
                    console.log('after saving parcel', res.data);
                })

                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>

            <form className='mt-12 p-4 text-black' onSubmit={handleSubmit(handleSendParcel)}>

                {/* parcel type */}
                <div>
                    <label className="label mr-4">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="document"
                            className="radio"
                            defaultChecked
                        />
                        Document
                    </label>

                    <label className="label">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="non-document"
                            className="radio"
                        />
                        Non-Document
                    </label>
                </div>

                {/* name + weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                    <fieldset className="fieldset">
                        <label className="label">Parcel Name</label>
                        <input
                            type="text"
                            {...register('ParcelName')}
                            className="input w-full"
                            placeholder="Enter parcel name"
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (Kg)</label>
                        <input
                            type="number"
                            {...register('ParcelWeight')}
                            className="input w-full"
                            placeholder="Enter weight in Kg"
                        />
                    </fieldset>
                </div>

                {/* sender + receiver */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                    {/* Sender */}
                    <fieldset className="fieldset">
                        <h4 className='text-2xl font-semibold'>Sender Info</h4>

                        <label className="label">Sender Name</label>
                        <input
                            type="text"
                            {...register('SenderName')}
                            defaultValue={user?.displayName}
                            className="input w-full"
                            placeholder="Full name of sender"
                        />

                        <label className="label">Sender Email</label>
                        <input
                            type="email"
                            {...register('SenderEmail')}
                            defaultValue={user?.email}
                            className="input w-full"
                            placeholder="Sender email address"
                        />
                        {/* sender region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Region</legend>
                            <select {...register('senderRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {region.map((r, i) => <option key={i} value={r}>{r}</option>)}


                            </select>
                        </fieldset>

                        {/* sender disticts */}

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Districts</legend>
                            <select {...register('senderDistricts')} defaultValue="Pick a districts" className="select">
                                <option disabled={true}>Pick a districts</option>
                                {districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)}


                            </select>
                        </fieldset>
                        <label className="label mt-4">Sender Address</label>
                        <input
                            type="text"
                            {...register('SenderAddress')}
                            className="input w-full"
                            placeholder="Street address"
                        />

                        <label className="label mt-4">Sender District</label>
                        <input
                            type="text"
                            {...register('SenderDistrict')}
                            className="input w-full"
                            placeholder="District name"
                        />
                    </fieldset>

                    {/* Receiver */}
                    <fieldset className="fieldset">
                        <h4 className='text-2xl font-semibold'>Receiver Info</h4>

                        <label className="label">Receiver Name</label>
                        <input
                            type="text"
                            {...register('ReceiverName')}
                            className="input w-full"
                            placeholder="Full name of receiver"
                        />

                        <label className="label">Receiver Email</label>
                        <input
                            type="email"
                            {...register('ReceiverEmail')}
                            className="input w-full"
                            placeholder="Receiver email address"
                        />

                        <label className="label mt-4">Receiver Address</label>
                        <input
                            type="text"
                            {...register('ReceiverAddress')}
                            className="input w-full"
                            placeholder="Street address"
                        />


                        {/* Receiver region */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Region</legend>
                            <select {...register('ReceiverRegion')} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {region.map((r, i) => <option key={i} value={r}>{r}</option>)}


                            </select>
                        </fieldset>
                        {/* Receiver disticts */}

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Districts</legend>
                            <select {...register('ReceiverDistricts')} defaultValue="Pick a districts" className="select">
                                <option disabled={true}>Pick a districts</option>
                                {
                                    districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)
                                }


                            </select>
                        </fieldset>

                    </fieldset>

                </div>

                <input
                    type="submit"
                    className='btn btn-primary text-black mt-6'
                    value="Send Parcel"
                />
            </form>
        </div>
    );
};

export default SendParcel;
