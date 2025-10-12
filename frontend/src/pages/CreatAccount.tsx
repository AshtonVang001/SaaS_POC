import { useState } from "react";

export const CreateAccount = () => {
  const [inputCompany, getCompany] = useState("");
  const [inputEmail, getEmail] = useState("");
  const [inputPassword, getPassowrd] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyInput: inputCompany,
        emailIput: inputEmail,
        passwordInput: inputPassword,
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
        onChange={(e) => getPassowrd(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
