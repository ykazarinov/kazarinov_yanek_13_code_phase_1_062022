import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Login = (props) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
    document.title = "Argent Bank - Sign-in Page"
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  // function for submit
  const handleLogin = (formValue) => {
    const { email, password, rememberMeToggle } = formValue;

    if(rememberMeToggle){
      localStorage.setItem("rememberMe", true);
    }
    dispatch(login({ email, password }))
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">

        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group input-wrapper">
                <label htmlFor="email">Username</label>
                <Field name="email" type="text" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group input-wrapper">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="input-remember">
                <Field type="checkbox" id="remember-me" name="rememberMeToggle" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block sign-in-button" 
                >
                  <span>Sign In</span>
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
      </section>
    </main>
  );
};
export default Login;