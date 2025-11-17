import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile  } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();

    console.log('in register', location)

    const handelRegistration = (data) => {

        console.log('after register', data.Photo[0]);
        const profileImg = data.Photo[0];

        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const formData = new FormData();
                formData.append('image', profileImg);
                const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_Api}`
                axios.post(image_API_URL, formData)
                .then( res =>{
                    console.log('after image upload', res.data.data.url)

                    const userProfile = {
                        displayName : data.name,
                        PhotoURL : res.data.data.url
                    }
                    updateUserProfile (userProfile)
                    .then(() =>{
                        console.log('user profile updated done ')
                        navigate(location.state || '/');
                    })
                    .catch(error => console.log(error))
                })

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl'>
            <h3 className='text-3xl text-center'>Welcome to zac shift</h3>
            <p className='text-center'>Please Register</p>
            <form className='card-body' onSubmit={handleSubmit(handelRegistration)}>
                <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text"{...register('name', { required: true })} className="input" placeholder="Your Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
                    {/* Photo*/}
                    <label className="label">Photo</label>

                    <input type="file"{...register('Photo', { required: true })} className="file-input" placeholder="Your Photo" />
                    {errors.Photo?.type === 'required' && <p className='text-red-500'>Photo is required</p>}

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email"{...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password"{...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 characters or longer</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500'>Must Have password with at least one upperCase, at least one lowerCase, at least one number, and at least one spacial chart   </p>}


                    <button className="btn btn-neutral mt-4">Register</button>
                    <p>Already have an account.<Link state={location.state} className='text-red-600 underline' to="/login"> Login</Link></p>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;