import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import User from './User';

export default function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Dashboard</Link> &nbsp;
        <Link to="/Contactus">ContactUS</Link>&nbsp;
        <Link to="/User/4/course/10?acvsf&df">User</Link>&nbsp;
        <Link to="/aboutus">About Us</Link> &nbsp;

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/user/:userId/course/:courseId"
            element={<User />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Dashboard() {
  return <h3>DashBoard </h3>;
}

function AboutUs() {
  return <h3>AboutUs </h3>;
}

function ContactUs() {
  return <h3>ContactUs </h3>;
}
