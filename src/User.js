import React from 'react';
import { useParams } from 'react-router-dom';
export default function User() {
  const params = useParams(); // getting bac values from QueryParam
  console.log(params);
  return (
    <>
      <h3>User </h3>
    </>
  );
}
