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
