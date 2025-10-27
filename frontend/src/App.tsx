import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import { CreateAccount } from "./pages/CreatAccount";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/dashboard";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

//right now appointments page is the actual sign up for appointments
//make a page to where they can actually book appointments
//have users be able to book appointments based on company

//flow:
//company wants to have a appoinment online service
//they sign up (implement payment later)
//they get their own appointments page
//users can go to an appointments page, pick the company then make the appointment
