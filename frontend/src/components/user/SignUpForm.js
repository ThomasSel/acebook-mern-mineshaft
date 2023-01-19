import React, { useState } from "react";
import Alert from '../alert/Alert';

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userDob, setUserDob] = useState("");
  const [renderAlert, setRenderAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRenderAlert(true);

    const age = calculateAge(userDob);

    if (password.length >= 6 && password === password2 && age >= 14 && firstName.trim().length !== 0 && lastName.trim().length !== 0) {
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
          navigate("/login");
        } else {
          navigate("/signup");
        }
      });
    };
  };

  const calculateAge = (userDob) => {
    const dateNow = new Date(Date.now());
    const dob = new Date(userDob);
    const ms = dateNow.getTime() - dob.getTime();
    const dif = new Date(ms);
    return Math.abs(dif.getUTCFullYear() - 1970);
  }

  const handleChange = (setFunction) => {
   return (event) => {
      setFunction(event.target.value);
      setRenderAlert(false);
    };
  }

  return (
    <>
      <div>
        <h1 className="font-lobster text-blue-500 text-center text-7xl">
          acebook
        </h1>
      </div>
      <div className="bg-grey-lighter h-screen font-sans">
        <div className="container mx-auto mt-20 flex justify-center items-center">
          <form className="bg-white shadow-md rounded px-32 pt-14 pb-14 mb-1" onSubmit={handleSubmit}>
            <h2 className="font-lobster text-blue-500 text-center text-3xl mb-14">
              Sign up 
            </h2>
            <div className="mb-4">
              <input
                placeholder="First Name"
                id="first-name"
                type="text"
                value={firstName}
                onChange={handleChange(setFirstName)}
              />
              <Alert firstName={firstName} render={renderAlert} />
            </div>
            <div className="mb-4">
              <input
                placeholder="Last Name"
                id="last-name"
                type="text"
                value={lastName}
                onChange={handleChange(setLastName)}
              />
              <Alert lastName={lastName} render={renderAlert} />
            </div>
            <div className="mb-4">
              <input
                placeholder="D.O.B."
                id="user-dob"
                type="date"
                value={userDob}
                onChange={handleChange(setUserDob)}
              />
              <Alert userDob={userDob} render={renderAlert} />
            </div>
            <div className="mb-4">
              <input
                placeholder="Email"
                id="email"
                type="text"
                value={email}
                onChange={handleChange(setEmail)}
              />
              <Alert email={email} render={renderAlert} />
            </div>
            <div className="mb-4">
              <input
                placeholder="Password"
                id="password"
                type="password"
                value={password}
                onChange={handleChange(setPassword)}
              />
              <Alert render={renderAlert} />
            </div>
            <div class="mb-4">
              <input
                placeholder="Confirm Password"
                id="confirm-password"
                type="password"
                value={password2}
                onChange={handleChange(setPassword2)}
              />
              <Alert password = {password} password2={password2} render={renderAlert} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                role="submit-button"
                id="submit"
                type="submit"
                value="Submit"
              />
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/login"
                id="login-link"
                data-cy="login-link"
              >
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
