import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const SignUP = () => {
    const { createUser, updateUser, signInGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate()

    const handleSignup = data => {
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user create successfully')
                handleUserUpdate(data.name)
            })
            .catch(err => {
                setSignupError(err.message)
                console.error(err)
            })
    }

    const handleUserUpdate = (name) => {
        const profile = { displayName: name }
        updateUser(profile)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    };

    const handleGoogleSingUP = () => {
        signInGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 borderd'>
                <h2 className="text-4xl font-semibold text-center ">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: 'name is Required' })} placeholder="Your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: 'email is required' })} placeholder="Your Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password must be 6 charecters long' },
                            // pattern: { value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'password must be strong' }
                        })} placeholder="Your Password" className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-accent w-full' value='SignUp' />
                </form>
                {
                    signupError && <p className='text-red-500'>{signupError}</p>
                }
                <p>Allready have an account <Link to='/login' className='text-secondary'>Please Login</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSingUP} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUP;