import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import AboutText from "./aboutText";

const UserProfile = ({ navigate }) => {
  const [token] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
    } else {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <NavBar logout={logout} />
      <AboutText />
    </>
  );
};

export default UserProfile;
