import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import userService from "../../services/user.service";
import { getProfil } from "../../slices/profile";



const Profile = () => {
  const dispatch = useDispatch()

  const { user: currentUser } = useSelector((state) => state.auth);
  // const currentProfile = useSelector((state) => state.profile)
  const { entities, loading } = useSelector((state) => state.profile)

  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(getProfil())
  }, []);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  // console.log(currentUser)
  // console.log('entities', entities)
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{entities.body.firstName} {entities.body.lastName}</strong> Profile
        </h3>
      </header>
       <p>
        <strong>Token:</strong> {currentUser.body.token}
      </p>
     

    </div>
  );
};
export default Profile;