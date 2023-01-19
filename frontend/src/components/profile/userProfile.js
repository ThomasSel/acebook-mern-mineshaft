import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

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
      <div className="bg-grey-lighter h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="font-lobster text-blue-500 text-center text-3xl mb-12">
            About
          </h2>
          <p className="text-center"> Acebook builds technologies that help people connect, find communities and grow businesses.</p>
          <p className="text-center"> We believe real change starts with conversation. Here, your voice matters. </p>
          <p className="text-center"> Come as you are and together we’ll do what’s right (not what’s easy) to serve the public conversation. </p>
       </form>
       </div>
      </div>
    </>
  );
};

export default UserProfile;
