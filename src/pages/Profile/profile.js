import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  console.log(currentUser)
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.user}</strong> Profile
        </h3>
      </header>
       <p>
        <strong>Token:</strong> {currentUser.body.token}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>

    </div>
  );
};
export default Profile;