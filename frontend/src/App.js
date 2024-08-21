import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Student from './Student'
import CreateStudent from './CreateStudent'
import Updatestudent from './Updatestudent'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path='/update/:id' element={<Updatestudent />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App