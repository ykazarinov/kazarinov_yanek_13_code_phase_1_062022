import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home';
import Signin from './pages/Sign-in/signin';
import Error404 from './pages/Error/error404'
import reportWebVitals from './reportWebVitals';
import './assets/css/main.css';

import Header from './components/Header/header'
import Footer from './components/Footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Header />
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/sign-in" element={<Signin />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
