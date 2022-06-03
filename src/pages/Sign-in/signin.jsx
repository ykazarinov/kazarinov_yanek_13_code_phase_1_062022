import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default function Signin(){

    useEffect(() => {
        document.title = "Argent Bank - Sign-in Page"
     }, []);

    return  <main className="main bg-dark">
    <section className="sign-in-content">
     
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label
          ><input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label
          ><input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <Link to="./user.html" className="sign-in-button">Sign In</Link> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        <button className="sign-in-button">Sign In</button>
        {/* <!--  --> */}
      </form>
    </section>
  </main>
}