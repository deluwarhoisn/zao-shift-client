
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleSendParcel = data =>{

    }

    return (
        <div>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* dociment */}
                <div></div>
                {/* name weight */}
                <div>

                </div>
                {/* tow column */}
                <div>
                    {/* info */}
                    <div>

                    </div>
                    {/* reciver */}
                   
                </div>
                <button></button>
            </form>
        </div>
    );
};

export default SendParcel;