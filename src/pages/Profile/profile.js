import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { getProfil } from "../../slices/profile";
import { setProfil } from "../../slices/newProfile";

import userService from "../../services/user.service";




const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { entities, loading } = useSelector((state) => state.profile)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message);
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil())
    document.title = "Argent Bank - Profile Page"
  }, [dispatch]);


  const initialValues = {
    firstName: "",
    lastName: ""
    // firstName: entities.body.firstName ? entities != null : '',
    // lastName: entities.body.lastName ? entities != null : ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
  });

  const saveProfil = (formValue) => {
    const { firstName, lastName } = formValue;
    // setLoading(true);
    
    dispatch(setProfil({ firstName, lastName }))
    // setEditName(false)
    setEditName(editName => false);
    dispatch(getProfil())
         
     
  };
  

  if (!currentUser) {
    return <Navigate to="/sign-in" />;
  }
  // console.log(currentUser)
    // console.log('entities', entities)
  // console.log(content.body)

  if (entities === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <main className="main bg-dark">
      
        {editName === false ?
        <div className="header">
          <h1>Welcome back<br />
            {entities.body.firstName} 
            {entities.body.lastName}!
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
                
                  <div className="form-group input-wrapper">
                    <label htmlFor="firstName">First Name</label>
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
                  </div>
                  <div className="form-group input-wrapper">
                    <label htmlFor="lastName">Last Name</label>
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
                  </div>
                  <div className="form-group">
                    <button className="edit-button" onClick={()=>setEditName(false)}>Cancel</button>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="edit-button">Save</button>
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