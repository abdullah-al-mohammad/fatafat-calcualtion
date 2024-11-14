import React from 'react';
import { useContext, useState, useRef } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signInUser, passWordResetEmail } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate()
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            // signUpUser(email, password)
            .then(result => {
                // console.log(signInUser);
                console.log("User signed in:", result.user);
                navigate('/')
                form.reset()

            })
            .catch(error => {
                console.error("Error during sign-in:", error);

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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Calculation is the process of determining a numerical result by performing mathematical operations like addition, subtraction, multiplication, or division. Calculations are foundational in many fields, including engineering, finance, science, and everyday life
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" ref={emailRef} name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'> 
                                <input
                                    type={showPassword ? 'text': 'password'}
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered w-full" required />
                                    <span className='absolute top-4 right-3' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </span>
                            </div>
                            <span>
                            </span>
                            <label className="label">
                                <a onClick={handlePasswordReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Don't have an account please? <Link className='text-blue-600 font-bold' to='/signUp'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;