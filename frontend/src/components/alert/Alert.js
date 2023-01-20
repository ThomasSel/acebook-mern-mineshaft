const Alert = (props) => {

  if(props.render) {

    if(props.password !== props.password2) {
      return <h1 data-cy="alert-passwords" class="text-red-500 text-left text-0.5xl">passwords do not match</h1>
    } else if("password" in props && props.password.length < 6) {
      return <h1 data-cy="alert-password" class="text-red-500 text-left text-0.5xl" >must enter valid password</h1>
    }

    if (props.age < 14){
      return <h1 data-cy="alert-dob" class="text-red-500 text-left text-0.5xl" >user must be over 14<br />years of age to sign up  </h1>
    } 

    if("firstName" in props && props.firstName.trim().length === 0){
      return <h1 data-cy="alert-firstname" class="text-red-500 text-left text-0.5xl">must enter a first name</h1>
    }

    if("lastName" in props && props.lastName.trim().length === 0){
      return <h1 data-cy="alert-lastname" class="text-red-500 text-left text-0.5xl">must enter a last name</h1>
    }

    if("email" in props && props.email.trim().length === 0){
      return <h1 data-cy="alert-no-email" class="text-red-500 text-left text-0.5xl">must enter an email</h1>
    } else if("email" in props && !props.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return <h1 data-cy="alert-email" class="text-red-500 text-left text-0.5xl">must enter a valid email</h1>
    }
  }

  if(props.renderAlert) {
    return <h1 data-cy="alert-login" class="text-red-500 text-left text-0.5xl">incorrect user details</h1>
  }
}


export default Alert;