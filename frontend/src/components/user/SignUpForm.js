import React, { useState } from 'react';

const SignUpForm = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userDob, setUserDob] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === password2) {
      fetch( '/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, userDob: userDob })
      })
        .then(response => {
          if(response.status === 201) {
            console.log("yay!")
            navigate('/login')
          } else {
            navigate('/signup')
          }
        })
    } else {
      window.alert("Passwords do not match!");
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleUserDobChange = (event) => {
    setUserDob(event.target.value)
  }

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value)
  }


    return (
      <form onSubmit={handleSubmit}>
          <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
          <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
          <input placeholder="Confirm Password" id="confirm-password" type='password' value={ password2 } onChange={handlePassword2Change} />
          <input placeholder="First Name" id="first-name" type='text' value={ firstName } onChange={handleFirstNameChange} />
          <input placeholder="Last Name" id="last-name" type='text' value={ lastName } onChange={handleLastNameChange} />
          <input placeholder="D.O.B." id="user-dob" type='date' value={ userDob } onChange={handleUserDobChange} />
          <input id='submit' type="submit" value="Submit" />
      </form>
    );
}

export default SignUpForm;
