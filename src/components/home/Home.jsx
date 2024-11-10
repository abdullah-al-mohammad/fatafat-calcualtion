import React from 'react';
import { useState } from "react"
import { useContext } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { v4 as uuidv4 } from 'uuid';
import '../home/home.css'
import Header from '../header/Header';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState(null)
    console.log(data);
    const [startDate, setStartDate] = useState(new Date());

    // handle button submit
    const handleSubmit = e => {

        if (user) {
            // handleSubmit(e)
            e.preventDefault()
            const id = uuidv4()
            const form = e.target;
            const date = form.date.value;
            const name = form.name.value;
            const amount = form.amount.value;
            const payment = form.payment.value;
            const expense = form.expense.value;
            const comment = form.comment.value;
            console.log(name, amount, payment, expense, comment, date);
            const formData = { id, date, name, amount, payment, expense, comment }
            console.log(formData);
            fetch('https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data)
                    setCounter((counter) => counter + 1);

                })
        }
        else {
            alert("please create an account")
        }

    }
    return (
        <div className='bgImage py-3'>
            <Header></Header>
            <div>
                <h1 className='text-3xl font-extrabold'><span className='text-orange-500'>Fatafat Rider</span> Calculation</h1>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Select Date</span>
                                    </label>
                                    <DatePicker className='input input-bordered' name='date' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marchent Name</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs" name='name'>
                                        <option disabled selected>Fatafat Hyper Merket</option>
                                        <option>Fif Restaurent</option>
                                        <option>Burgerganj</option>
                                        <option>Heshel Cafe</option>
                                        <option>Gaang</option>
                                        <option>Paar</option>
                                        <option>Down Town</option>
                                        <option>Chileghuri</option>
                                        <option>T.F.C</option>
                                        <option>Cafe Highway</option>
                                        <option>Fisher Village</option>
                                        <option>Seven Days</option>
                                        <option>A.F.C</option>
                                        <option>Raj Hotel</option>
                                        <option>Fatafat Custom</option>
                                        <option>Behati</option>
                                        <option>Haji Nanna</option>
                                        <option>Dhaka Biriyani</option>
                                        <option>Ar Rohman</option>
                                        <option>Isha Kachchi</option>
                                        <option>Fisher</option>
                                        <option>Cafe Blast</option>
                                        <option>Delowar Chotpoti</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="number" placeholder="Type Your Amount" name='amount' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Payment Methode</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs" name='payment'>
                                        <option disabled selected>Payment Methode💲</option>
                                        <option>Cash</option>
                                        <option>Bekash</option>
                                        <option>Nogod</option>
                                        <option>Rocket</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expense</span>
                                    </label>
                                    <input type="number" placeholder="Type Your Expens" name='expense' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" name='comment' placeholder="Type Your Comment"></textarea>
                                </div>
                                <div className="mt-6 md:flex justify-between">
                                    <button className="btn btn-success">Submit</button>
                                    <Link to='/calculate'><button className="btn btn-error">Details</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

// https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108?tabId=Page1