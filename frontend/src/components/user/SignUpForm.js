import React, { useState } from "react";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userDob, setUserDob] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const age = calculateAge(userDob);

    if (password === password2 && age >= 14) {
      fetch("/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          userDob: userDob,
        }),
      }).then((response) => {
        if (response.status === 201) {
          console.log("yay!");
          navigate("/login");
        } else {
          navigate("/signup");
        }
      });
    } else {
      if (password !== password2) {
        window.alert("Passwords do not match!");
      } else {
        window.alert("User must be 14 years of age or older!");
      }
    }
  };

  const calculateAge = (userDob) => {
    const dateNow = new Date(Date.now());
    const dob = new Date(userDob);
    const ms = dateNow.getTime() - dob.getTime();
    const dif = new Date(ms);
    return Math.abs(dif.getUTCFullYear() - 1970);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUserDobChange = (event) => {
    setUserDob(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="font-lobster text-blue-500 text-center text-7xl">
          acebook
        </h1>
      </div>
      <div className="bg-grey-lighter h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
          <form className="bg-white shadow-md rounded px-32 pt-24 pb-32 mb-1" onSubmit={handleSubmit}>
            <input
              placeholder="First Name"
              id="first-name"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <input
              placeholder="Last Name"
              id="last-name"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <input
              placeholder="D.O.B."
              id="user-dob"
              type="date"
              value={userDob}
              onChange={handleUserDobChange}
            />
            <input
              placeholder="Email"
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              placeholder="Confirm Password"
              id="confirm-password"
              type="password"
              value={password2}
              onChange={handlePassword2Change}
            />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
