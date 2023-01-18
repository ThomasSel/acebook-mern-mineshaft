const Alert = (props) => {

  if(props.password !== props.password2) {
    return <h1 data-cy="alert" class="text-red-500 text-left text-0.5xl">passwords do not match</h1>
  } 

  const age = calculateAge(props.userDob);

  if (age < 14){
    return <h1 class="text-red-500 text-left text-0.5xl" > user must be over 14<br />years of age to sign up  </h1>
  }
}

const calculateAge = (userDob) => {
  const dateNow = new Date(Date.now());
  const dob = new Date(userDob);
  const ms = dateNow.getTime() - dob.getTime();
  const dif = new Date(ms);
  return Math.abs(dif.getUTCFullYear() - 1970);
}

export default Alert;