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

  const handleSubmit = async () => {};

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
