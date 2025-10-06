import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Appointments } from './pages/appointments'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path= "/" element = {<Home />} />
        <Route path= "/appointments" element = {<Appointments />} />
      </Routes>

    </div>
  )
}

export default App


//right now appointments page is the actual sign up for appointments
//make a page to where they can actually book appointments
//have users be able to book appointments based on company

//flow:
//company wants to have a appoinment online service
//they sign up (implement payment later)
//they get their own appointments page
//users can go to an appointments page, pick the company then make the appointment
