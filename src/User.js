import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function User() {
  const params = useParams(); // getting bac values from QueryParam
  console.log(params);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h3>User </h3>
      {location.state ?<> Name:{location.state.name}<br /> 
      Age:{location.state.age} <br /></>
      :<></>}
      UserId:{params.userId} <br/>
      CourseId:{params.courseId}<br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </>
  );
}
