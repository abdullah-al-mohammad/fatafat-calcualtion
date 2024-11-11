import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useState, useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const CalculatDetails = () => {
    const {user} = useContext(AuthContext)
    const userId = user?.id
    const loadData = useLoaderData()
    console.log(loadData);
    const userIdData = loadData.filter(userData => userData.userId === userId)
    const [datas, setData] = useState(userIdData)
    // const [users, setUsers] = useState(userIdData)

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
                fetch(`https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108/id/${id}`, {
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
            <h2 className='mb-3 font-extrabold'>Hisab Details</h2>
            <div className="overflow-x-auto text-center border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-orange-500 font-bold font-mono'>Date</th>
                            <th className='text-orange-500 font-bold font-mono'>Name</th>
                            <th className='text-orange-500 font-bold font-mono'>Amount</th>
                            <th className='text-orange-500 font-bold font-mono'>Payment</th>
                            <th className='text-orange-500 font-bold font-mono'>Expens</th>
                            <th className='text-orange-500 font-bold font-mono'>Comment</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {/* row 1 */}
                        {
                            datas.map(data => <tr key={data.id} className="bg-base-200 border">
                                <th>{}</th>
                                <td className='border'>{data.date}</td>
                                <td className='border'>{data.name}</td>
                                <td className='border'>{data.amount}</td>
                                <td className='border'>{data.payment}</td>
                                <td className='border'>{data.expense}</td>
                                <td className='border'>{data.comment}</td>
                                <button onClick={() => handleDelete(data.id)} className='border btn btn-accent'>X</button>
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