import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
    const [student, setStudent] = useState([]);

    // useEffect hook to fetch student data from the server when the component mounts
    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then(res => setStudent(res.data))
            .catch(err => console.log(err));
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Function to handle the deletion of a student
    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:5000/student/' + id)
            window.location.reload()
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to={"/create"} className='btn btn-success'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>name</th> 
                            <th>email</th>
                            <th>marks</th>
                            <th>grade</th>
                            <th>city</th> 
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            student.map((data, i) => ( 
                                <tr key={i}>
                                    <td>{data.name}</td> 
                                    <td>{data.email}</td>
                                    <td>{data.marks}</td>
                                    <td>{data.grade}</td>
                                    <td>{data.city}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-warning'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={(e) => handledelete(data.id)}>Delete</button> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student; 
