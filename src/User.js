import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


export default function User() {
  const params = useParams(); // getting bac values from QueryParam
  console.log(params);
  const navigate = useNavigate();
  return (
    <>
      <h3>User </h3>
      <button onClick={()=>navigate(-1)}>GoBack</button> &nbsp;
      <button onClick={()=>navigate(1)}>Go Forward</button>
    </>
  );
}
