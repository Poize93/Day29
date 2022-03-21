import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import User from './User';

export default function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Dashboard</Link> &nbsp;
        <Link to="/Contactus">Contact US</Link>&nbsp;
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
  const navigate = useNavigate();
  return (
    <>
      <h3>DashBoard </h3>
      <button onClick={()=>navigate(-1)}>GoBack</button> &nbsp;
      <button onClick={()=>navigate(1)}>Go Forward</button>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <h3>AboutUs </h3>
      <button onClick={()=>navigate(-1)}>GoBack</button> &nbsp;
      <button onClick={()=>navigate(1)}>Go Forward</button>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h3>Contact Us </h3>
      <button onClick={()=>navigate(-1)}>GoBack</button> &nbsp;
      <button onClick={()=>navigate(1)}>Go Forward</button>
    </>
  );
}
