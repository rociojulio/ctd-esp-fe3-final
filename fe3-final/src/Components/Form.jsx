import React, { useState } from "react";

// import "./form.css";

const Form = ({ setMessage, setErrorMessage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handelSubmit(e) {
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

  function handelName(e) {
    const nameValue = e.target.value;
    setName(nameValue);
  }

  function validateName(name) {
    if (name.trim() === "") {
      return "The name should not be empty";
    } else if (name.length <= 5) {
      return "The name should have at least 5 characters";
    }
  }

  function handelEmail(e) {
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
    <div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <div>
          <label htmlFor="formControlName">
            Full Name
          </label>
          <input
            onChange={handelName}
            type="text"
            value={name}
            id="formControlName"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="formControlEmail">
            Email
          </label>
          <input
            onChange={handelEmail}
            type="email"
            value={email}
            id="formControlEmail"
            placeholder="Email"
          />
        </div>
        <input value={"Send"} type="submit"></input>
        {error && <span className="error">*{error}</span>}
      </form>
    </div>
  );
};

export default Form;