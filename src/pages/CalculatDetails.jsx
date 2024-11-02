import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from "react";
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'

const CalculatDetails = () => {
    const loadData = useLoaderData()
    console.log(loadData);
    const [datas, setData] = useState(loadData)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            
            if (result.isConfirmed) {
                // Proceed with deletion if confirmed
                fetch(`https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        const updatedData = datas.filter(data => data.id !== id);
                        setData(updatedData); // Update the state to remove deleted item
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.error("Error deleting data:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error"
                        });
                    });
            }
        });
    };


    return (
        <div>
            <h2>Hisab Details</h2>
            <div className="overflow-x-auto text-center border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Payment</th>
                            <th>Expens</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {/* row 1 */}
                        {
                            datas.map(data => <tr key={data.id} className="bg-base-200 border">
                                <th>{data.id}</th>
                                <td className='border'>{data.date}</td>
                                <td className='border'>{data.name}</td>
                                <td className='border'>{data.amount}</td>
                                <td className='border'>{data.payment}</td>
                                <td className='border'>{data.expense}</td>
                                <td onClick={() => handleDelete(data.id)} className='border btn btn-accent'>X</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <Link to='/'><button className='btn btn-primary float-start my-5'>Back</button></Link>
        </div>
    );
};

export default CalculatDetails;