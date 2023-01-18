import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const UserProfile = ({ navigate }) => {
  
  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  
  return (
    <>
    <NavBar logout={logout} />
    <h1>
      profile page
    </h1>
    </>
  )
}

export default UserProfile;