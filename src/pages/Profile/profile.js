import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { getProfil } from "../../slices/profile";
import { setProfil } from "../../slices/newProfile";

import { rememberMe } from "../../slices/auth";

const Profile = () => {
  const dispatch = useDispatch();
  // const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { entities } = useSelector((state) => state.profile)
  const { message } = useSelector((state) => state.message);

  //Profile edit status
  const [editName, setEditName] = useState(false);

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

  useEffect(() => {
    dispatch(getProfil())
    document.title = "Argent Bank - Profile Page"

    const token = JSON.parse(localStorage.getItem('token'));

    // This is for "Remember me" 

    const rememberMeToggle = localStorage.getItem('rememberMe')
    if(token && rememberMeToggle){
        dispatch(rememberMe())
    }
  }, [dispatch]);

  // Initial values: Current last name and first name
  const initialValues = {
    firstName: entities === null ? '' : entities.body.firstName,
    lastName: entities === null ? '' : entities.body.lastName
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
  });

  //function for submit
  const saveProfil = (formValue) => {
    const { firstName, lastName } = formValue;
    dispatch(setProfil({ firstName, lastName }))
    setEditName(editName => false);
    dispatch(getProfil())
  };
  
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (entities === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <main className="main bg-dark">
      
        {editName === false ?
        <div className="header">
          <h1>Welcome back<br />
            {entities.body.firstName} {entities.body.lastName}!
          </h1>  
          <button className="edit-button" onClick={()=>setEditName(true)}>Edit Name</button>
        </div>
        : 
        <div className="header">
            <h1>Welcome back<br /></h1>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={saveProfil}
            >
              <Form>
                <Field 
                  name="firstName" 
                  type="text" 
                  className='edit-name-input'  
                  placeholder="First Name" 
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="alert alert-danger"
                />
                <Field 
                  name="lastName" 
                  type="text" 
                  className='edit-name-input'  
                  placeholder="Last Name" 
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="alert alert-danger"
                />
                 
                <div>
                  <button 
                    className="edit-button edit-name-button" 
                    onClick={()=>setEditName(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="edit-button edit-name-button"
                  >
                    Save
                  </button>
                </div>
              </Form>
            </Formik>
            {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        </div>
      }

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