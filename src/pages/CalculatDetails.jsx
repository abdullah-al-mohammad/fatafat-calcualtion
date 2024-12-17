// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { useState, useContext } from "react";
// import Swal from 'sweetalert2';
// import { AuthContext } from '../provider/AuthProvider';
// import { data } from 'autoprefixer';

// const CalculatDetails = () => {
//     const { user } = useContext(AuthContext)
//     const loadData = useLoaderData()
//     const [allData, setData] = useState(loadData)


//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             // console.log(result);

//             if (result.isConfirmed) {
//                 // Proceed with deletion if confirmed
//                 fetch(`http://localhost:5000/calculate/id?=${id}`, {
//                     method: "DELETE"
//                 })
//                     .then(res => res.json())
//                     .then(() => {

//                         const updatedData = allData.filter(data => (data?.id !== id)
//                         );
//                         setData(updatedData); // Update the state to remove deleted item
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success"
//                         });
//                     })
//                     .catch(error => {
//                         console.error("Error deleting data:", error);
//                         Swal.fire({
//                             title: "Error!",
//                             text: "Something went wrong while deleting.",
//                             icon: "error"
//                         });
//                     });
//             }
//         });
//     };


//     return (
//         <div className='container mx-auto'>
//             <h2 className='mb-3 font-extrabold text-center'>Hisab Details</h2>
//             <div className="overflow-x-auto text-center border">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             {allData.length > 0 &&
//                                 allData[0].slice(1).map((header, index) => (
//                                     <th key={index} className="border px-4 py-2">
//                                         {header}
//                                     </th>
//                                 ))}
//                         </tr>
//                     </thead>
//                     <tbody className='border'>
//                         {/* row 1 */}
//                         <tbody>
//                             {allData.slice(1).map((row, index) => (
//                                 <tr key={index} className="bg-base-200 border">
//                                     {row.slice(1).map((cell, cellIndex) => (
//                                         <td key={cellIndex} className='border'>{cell}</td>
//                                     ))}
//                                     <td className='border'>
//                                         <button
//                                             onClick={() => handleDelete(data?.id)} // Assuming row[0] is the ID
//                                             className='border btn btn-accent'
//                                         >
//                                             X
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>

//                     </tbody>
//                 </table>
//             </div>
//             <Link to='/'><button className='btn btn-primary float-start my-5'>Back</button></Link>
//         </div>
//     );
// };

// export default CalculatDetails;





// import React, { useState, useContext } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";

// const CalculatDetails = () => {
//     const { user } = useContext(AuthContext);
//     const loadData = useLoaderData(); // Loaded data from the loader
//     const [allData, setData] = useState(loadData);
//     console.log(allData);


//     // Delete handler
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/calculate/${id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => res.json())
//                     .then(() => {
//                         const updatedData = allData.filter((data) => data.id !== id);
//                         setData(updatedData); // Update the state to remove the deleted item
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success",
//                         });
//                     })
//                     .catch((error) => {
//                         console.error("Error deleting data:", error);
//                         Swal.fire({
//                             title: "Error!",
//                             text: "Something went wrong while deleting.",
//                             icon: "error",
//                         });
//                     });
//             }
//         });
//     };

//     return (
//         <div className="container mx-auto">
//             <h2 className="mb-3 font-extrabold text-center">Hisab Details</h2>
//             <div className="overflow-x-auto text-center border">
//                 <table className="table-auto border-collapse border border-gray-400 mx-auto">
//                     {/* Table Head */}
//                     <thead>
//                         <tr>
//                             <th className="border px-4 py-2">Time</th>
//                             <th className="border px-4 py-2">Date</th>
//                             <th className="border px-4 py-2">Name</th>
//                             <th className="border px-4 py-2">Amount</th>
//                             <th className="border px-4 py-2">Payment</th>
//                             <th className="border px-4 py-2">Expense</th>
//                             <th className="border px-4 py-2">Comment</th>
//                             <th className="border px-4 py-2">Actions</th>
//                         </tr>
//                     </thead>

//                     {/* Table Body */}
//                     <tbody>
//                         {allData.map((row) => (
//                             <tr key={row.id} className="bg-base-200 border">
//                                 <td className="border px-4 py-2">{row.time}</td>
//                                 <td className="border px-4 py-2">{row.date}</td>
//                                 <td className="border px-4 py-2">{row.name}</td>
//                                 <td className="border px-4 py-2">{row.amount}</td>
//                                 <td className="border px-4 py-2">{row.payment}</td>
//                                 <td className="border px-4 py-2">{row.expense}</td>
//                                 <td className="border px-4 py-2">{row.comment}</td>
//                                 <td className="border px-4 py-2">
//                                     <button
//                                         onClick={() => handleDelete(row.id)}
//                                         className="bg-red-500 text-white px-3 py-1 rounded"
//                                     >
//                                         X
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <Link to="/">
//                 <button className="btn btn-primary float-start my-5">Back</button>
//             </Link>
//         </div>
//     );
// };

// export default CalculatDetails;













// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const CalculatDetails = () => {
//     const loadData = useLoaderData(); // Data from the loader
//     const headers = loadData[0].slice(1); // Extract headers excluding "id"
//     console.log(headers);

//     const rows = loadData.slice(1); // Exclude the header row

//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/calculate/id?=${id}`, {
//                     method: "DELETE",
//                 })
//                     .then((res) => res.json())
//                     .then(() => {
//                         const updatedRows = rows.filter((row) => row[0] !== id); // Remove the row with matching ID
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your file has been deleted.",
//                             icon: "success",
//                         });
//                     })
//                     .catch((error) => {
//                         console.error("Error deleting data:", error);
//                         Swal.fire({
//                             title: "Error!",
//                             text: "Something went wrong while deleting.",
//                             icon: "error",
//                         });
//                     });
//             }
//         });
//     };

//     return (
//         <div className="container mx-auto">
//             <h2 className="mb-3 font-extrabold text-center">Hisab Details</h2>
//             <div className="overflow-x-auto text-center border">
//                 {rows.length > 0 ? (
//                     <table className="table-auto border-collapse border border-gray-400 mx-auto">
//                         {/* Table Head */}
//                         <thead>
//                             <tr>
//                                 {headers.map((header, index) => (
//                                     <th key={index} className="border px-4 py-2">
//                                         {header}
//                                     </th>
//                                 ))}
//                                 {/* <th className="border px-4 py-2">Actions</th> */}
//                             </tr>
//                         </thead>

//                         {/* Table Body */}
//                         <tbody>
//                             {rows.map((row, rowIndex) => (
//                                 <tr key={rowIndex} className="bg-base-200 border">
//                                     {row.slice(1).map((cell, cellIndex) => (
//                                         <td key={cellIndex} className="border px-4 py-2">
//                                             {cell}
//                                         </td>
//                                     ))}
//                                     <td className="border px-4 py-2">
//                                         <button
//                                             onClick={() => handleDelete(row[0])} // row[0] is the ID
//                                             className="bg-red-500 text-white px-3 py-1 rounded"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p className="text-center">No data available to display.</p>
//                 )}
//             </div>

//             <Link to="/">
//                 <button className="btn btn-primary float-start my-5">Back</button>
//             </Link>
//         </div>
//     );
// };

// export default CalculatDetails;







import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CalculatDetails = () => {
    const loadData = useLoaderData(); // Data from the loader
    const headers = loadData[0].slice(1); // Extract headers excluding "id"
    const [allData, setAllData] = useState(loadData.slice(1)); // Exclude headers and set rows as state

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Make a DELETE request to the server
                fetch(`http://localhost:5000/calculate/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        // Filter the deleted row from the state
                        const updatedData = allData.filter((row) => row[0] !== id); // row[0] is the id
                        setAllData(updatedData); // Update the state with filtered data

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    })
                    .catch((error) => {
                        console.error("Error deleting data:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong while deleting.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="container mx-auto">
            <h2 className="mb-3 font-extrabold text-center">Hisab Details</h2>
            <div className="overflow-x-auto text-center border">
                {allData.length > 0 ? (
                    <table className="table-auto border-collapse border border-gray-400 mx-auto">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} className="border px-4 py-2">
                                        {header}
                                    </th>
                                ))}
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {allData.map((row, rowIndex) => (
                                <tr key={rowIndex} className="bg-base-200 border">
                                    {row.slice(1).map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border px-4 py-2">
                                            {cell}
                                        </td>
                                    ))}
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() => handleDelete(row[0])} // row[0] is the ID
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">No data available to display.</p>
                )}
            </div>

            <Link to="/">
                <button className="btn btn-primary float-start my-5">Back</button>
            </Link>
        </div>
    );
};

export default CalculatDetails;


