import React from 'react';
import { useContext, useState, useRef } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { signUpUser, passWordResetEmail } = useContext(AuthContext)
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState();
    const hasUpperCase = /[A-Z]/;
    const emailRef = useRef(null)
    console.log(emailRef);


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        // const fom = new FormData(e.currentTarget)
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.accepted.checked;
        console.log(name, email, password);

        // reset error and success
        setError('')
        setSuccess('')


        if (password.length < 6) {
            setError('password must be 6 charecter')
            return
        }
        else if (!hasUpperCase.test(password)) {
            setError('Password must contain at least one uppercase letter.')
            return
        }
        else if (!accepted) {
            setError('Please Accept Our turms and conditions.')
            return
        }
        signUpUser(email, password, accepted)
            .then(result => {
                const user = result.user
                console.log(user);
                setSuccess('Account Created Successfully 😎')
                form.reset()

                updateProfile(user, {
                    displayName: name,
                    photoURL: user.photoURL
                })
                    .then(() => {
                        console.log('update profile');

                    })

            })
            .catch(error => {
                console.error("Error during sign-up:", error);

            })
    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value
        if (!email) {
            alert("Please Provide an email")
            return
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('please provide valid email')
            return
        }
        console.log(email);
        // send valodation email
        passWordResetEmail(email)
            .then(() => {
                alert('please check your email')

            }).catch(error => {
                console.error(error);

            })

    }
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Calculation is the process of determining a numerical result by performing mathematical operations like addition, subtraction, multiplication, or division. Calculations are foundational in many fields, including engineering, finance, science, and everyday life
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" ref={emailRef} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    name='password'
                                    className="input input-bordered w-full" required />
                                <span className='absolute top-4 right-3' onClick={() => setShowPassword(!showPasssword)}>
                                    {
                                        showPassword ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                                <label className="label">
                                    <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" name="accepted" id="" />
                            <label className='ml-2' htmlFor='terms'>Accept Our <a href="">terms And Conditions</a></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                        <div>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                            {
                                success && <p className='text-green-600'>{success}</p>
                            }
                        </div>
                    </form>
                    <p>Already have an account please? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;