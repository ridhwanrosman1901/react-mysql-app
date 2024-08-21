import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
     
    function handlesubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/create", { name, email, marks, grade, city })
            .then(res => {
                console.log(res);
                navigate("/");
            }).catch(err => console.log(err));
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handlesubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-3'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input
                            type='text'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Marks</label>
                        <input
                            type='text'
                            className='form-control'
                            value={marks}
                            onChange={(e) => setMarks(e.target.value)} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label>Grade</label>
                        <input
                            type='text'
                            className='form-control'
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label>City</label>
                        <input
                            type='text'
                            className='form-control'
                            value={city}
                            onChange={(e) => setCity(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateStudent;