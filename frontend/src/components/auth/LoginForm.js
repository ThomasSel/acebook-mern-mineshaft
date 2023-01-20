import React, { useState } from "react";
import NavBar from "./NavBar";
import Alert from '../alert/Alert';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [renderAlert, setRenderAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status !== 201) {
      setRenderAlert(true);
      console.log("oop");
      navigate("/login");
    } else {
      console.log("yay");
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      navigate("/posts");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <NavBar />

      <div className="bg-grey-lighter h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
          <form
            className="bg-white shadow-md rounded px-32 pt-15 pb-32 mb-1"
            onSubmit={handleSubmit}
          >
            <h2 className="font-lobster text-blue-500 text-center text-3xl mb-12">
              Login
            </h2>
            <div className="mb-4">
              <input
                className="w-60 px-2 py-2"
                placeholder="Email"
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-60 px-2 py-2"
                placeholder="Password"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              < Alert renderAlert={renderAlert} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <input
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                role="submit-button"
                id="submit"
                type="submit"
                value="Submit"
              />
              <a
                className="center font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/signup"
                id="signup-link"
                data-cy="signup-link"
              >
                Signup here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
