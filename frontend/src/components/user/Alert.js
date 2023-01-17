const Alert = (props) => {

  if(props.password !== props.password2) {
    return <h1>Passwords do not match</h1>
  }
}

export default Alert;