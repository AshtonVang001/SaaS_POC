import { useState } from "react"

export const  Appointments = () => {
    const [inputCompany, getCompany] = useState("");
    const [inputEmail, getEmail] = useState("");
    const [inputPassword, getPassowrd] = useState("");






    return (
        <div>
        <div>appointments</div>
        <input placeholder="Company Name" type="text"></input>
        <input placeholder="Email" type="text"></input>
        <input placeholder="Password" type="text"></input>
        <button>Submit</button>
        </div>
    )
}

//GET is sending data from the backend to the frontend
//POST is sending data from the frontend to the backend