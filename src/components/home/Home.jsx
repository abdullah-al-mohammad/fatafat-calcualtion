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
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
// import DateTimePicker from 'react-datetime-picker';

const Home = () => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState(new Date());
    // const [dateTime, setDateTime] = useState(new Date());

    const CustomTimeInput = ({ date, value, onChange }) => (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={(e) => e.target?.focus()}
          style={{ border: "solid 1px pink", backgroundColor: 'white' }}
        />
      );

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
                <h1 className='text-3xl font-extrabold text-black'><span className='text-orange-500'>Fatafat Rider</span> Calculation</h1>
                <div className="min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card w-full max-w-sm shrink-0 md:shadow-2xl shadow-none">
                            <form onSubmit={handleSubmit} className="card-body px-0 md:px-8">
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Select Date</span>
                                    </label>
                                    <TimePicker onChange={onChange} value={value} className="class1 class2" id='time-picker'/>
                                    {/* <DateTimePicker onChange={setDateTime} value={dateTime} /> */}
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Select Date</span>
                                    </label>
                                    <DatePicker className='input input-bordered w-full' name='date' selected={startDate}  showTimeInput customTimeInput={<CustomTimeInput/>}/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Marchent Name</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs" name='name' required>
                                        <option value='' disabled selected hidden>Select Restaurant</option>
                                        <option>Fif Restaurant</option>
                                        <option>Burgrganj</option>
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
                                        <span className="label-text">Payment Method</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs" name='payment' required>
                                        <option value='' disabled selected hidden>Payment Method💲</option>
                                        <option>Cash</option>
                                        <option>Bkas</option>
                                        <option>Nagad</option>
                                        <option>Rocket</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expense</span>
                                    </label>
                                    <input type="number" placeholder="Type Your Expense" name='expense' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <textarea className="textarea textarea-primary" name='comment' placeholder="Type Your Comment"></textarea>
                                </div>
                                <div className="mt-6 flex flex-col lg:flex-row justify-between">
                                    <button className="btn btn-success mb-4 lg:mb-0">Submit</button>
                                    <Link to='/calculate' className="btn btn-error">Details</Link>
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