import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getProfil } from "../../slices/profile";
import userService from "../../services/user.service";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { entities, loading } = useSelector((state) => state.profile)
  const { isLoggedIn } = useSelector((state) => state.auth)

  const [content, setContent] = useState("");

  const moneyData = [
    {
      title: 'Argent Bank Checking (x8349)',
      money: '$2,082.79',
      balanceType: 'Available Balance'
    },
    {
      title: 'Argent Bank Savings (x6712)',
      money: '$10,928.42',
      balanceType: 'Available Balance'
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      money: '$184.30',
      balanceType: 'Current Balance'
    }
  ]

  const dispatch = useDispatch();
 
   
      //  dispatch(getProfil())



  useEffect(() => {
    dispatch(getProfil())
  }, []);
  

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }
  // console.log(currentUser)
    console.log('entities', entities)
  // console.log(content.body)

  if (entities === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{entities.body.firstName} {entities.body.lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {moneyData.map((myCount, index)=> (
         <section key={index} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{myCount.title}</h3>
            <p className="account-amount">{myCount.money}</p>
            <p className="account-amount-description">{myCount.balanceType}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
     
     
    </main>
  );
      
};
export default Profile;