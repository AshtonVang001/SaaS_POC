import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [inputCompany, getCompany] = useState("");
  const [inputEmail, getEmail] = useState("");
  const [inputPassword, getPassoword] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: inputCompany,
        email: inputEmail,
        password: inputPassword,
      }),
    });

    const data = await res.json();
    console.log("Response from backend", data);
  };

  return (
    <div>
      <input
        placeholder="Company Name"
        type="text"
        value={inputCompany}
        onChange={(e) => getCompany(e.target.value)}
      ></input>
      <input
        placeholder="Email"
        type="text"
        value={inputEmail}
        onChange={(e) => getEmail(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        type="text"
        value={inputPassword}
        onChange={(e) => getPassoword(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleBack}>back</button>
    </div>
  );
};
