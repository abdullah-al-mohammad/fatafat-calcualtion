import React, { useState, useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CalculatDetails = () => {
    const { currentUser } = useContext(AuthContext); // Get the current user
    const loadData = useLoaderData(); // Data from the loader
    const headers = loadData[0].slice(1); // Extract headers excluding "id"
    const [allData, setAllData] = useState(loadData.slice(1)); // Exclude headers and set rows as state
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        if (currentUser?.email) {
            // Fetch user-specific data
            fetch(`http://localhost:5000/calculate?email=${currentUser.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setAllData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [currentUser?.email]);

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


