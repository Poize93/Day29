import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
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

          <Route path="/aboutus" element={<AboutUs />}>
            <Route path="" element={<AboutUsIndex />} />
            <Route path="history" element={<History />} />
            <Route path="branches" element={<Branches />} />
          </Route>
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
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button> &nbsp;&nbsp;
      <button
        onClick={() =>
          navigate('/User/4/course/10?acvsf&df', {
            state: { name: 'XXX', age: 10 },
          })
        }
      >
        UserComponent
      </button>
    </>
  );
}

function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
      <h3>AboutUs </h3>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
      <br />
      <button onClick={() => navigate('/aboutus/history')}>History</button>
      &nbsp;
      <button onClick={() => navigate('/aboutus/branches')}>Branches</button>
      <br />
      <Outlet />
    </>
  );
}

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Contact Us </h3>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </>
  );
}
function History() {
  return (
    <>
      <h3>History</h3>
    </>
  );
}

function Branches() {
  return (
    <>
      <h3>Branches</h3>
    </>
  );
}

function AboutUsIndex() {
  return (
    <>
      <h3>AboutUs Home Page</h3>
    </>
  );
}
