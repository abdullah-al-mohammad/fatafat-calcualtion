import React from 'react';
import { useState } from "react"
import { useEffect, useContext } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState(null)
    const [counter, setCounter] = useState(1)
    console.log(data);
    const [startDate, setStartDate] = useState(new Date());

    const incrementCounterBy = (increment) => {
        for (let i = 0; i < increment; i++) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    };

// handle button submit
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        const name = form.name.value;
        const amount = form.amount.value;
        const payment = form.payment.value;
        const expense = form.expense.value;
        const comment = form.comment.value;
        console.log(name, amount, payment, expense, comment);
        // Use counter as a unique ID
        const id = counter;

        const formData = { id, date, name, amount, payment, expense, comment }
        console.log(formData);

        // https://script.google.com/macros/s/AKfycbyID_jRQRdWf3ajBnK1-qSj0uiROtKIXV_m20SPA70AyXv-iqtHcEpvkskqL1DneNTEGA/exec

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
                incrementCounterBy(5);

            })


    }
    return (
        <div className='my-5'>
            <h1 className='text-3xl font-extrabold'><span className='text-orange-500'>Fatafat Rider</span> Calculation</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                                <input type="number" placeholder="Type Your Amount" name='amount' className="input input-bordered"/>
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
                                <input type="number" placeholder="Type Your Expens" name='expense' className="input input-bordered"/>
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
    );
};

export default Home;

// https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108?tabId=Page1