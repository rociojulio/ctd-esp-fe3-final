import React, { useState } from "react";
import "../styles/form.css";


const Form = ({ setMessage, setErrorMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const isNameNotValid = validateName(name);
    const isEmailNotValid = validateEmail(email);
    if (isNameNotValid || isEmailNotValid) {
      setError(isNameNotValid || isEmailNotValid);
      setErrorMessage("Por favor verifique su información nuevamente");
    } else {
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      setError(undefined);
      setName("");
      setEmail("");
    }
  }

  function handleName(e) {
    const nameValue = e.target.value;
    setName(nameValue);
  }

  function validateName(name) {
    if (name.trim() === "") {
      return "The name should not be empty";
    } else if (!/^\w{5}$/.test(name.trim())) {
      return "The name should have at least 5 characters";
    }
  }

  function handleEmail(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }

  function validateEmail(email) {
    if (email.trim() === "") {
      return "The email should not be empty";
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
      return "The email is not valid";
    } else {
      return undefined;
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        
          <label htmlFor="formControlName">
            Full Name
          </label>
          <input
            onChange={handleName}
            type="text"
            value={name}
            id="formControlName"
            placeholder="Full name"
          />

        
          <label htmlFor="formControlEmail">
            Email
          </label>
          <input
            onChange={handleEmail}
            type="email"
            value={email}
            id="formControlEmail"
            placeholder="Email"
          />
  
        <input className="send-button" value={"Send"} type="submit"></input>
        {error && <span className="error">*{error}</span>}
      </form>
    </div>
  );
};

export default Form;