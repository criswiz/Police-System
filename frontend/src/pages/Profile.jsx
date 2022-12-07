import '../index.css';
import { useSelector } from 'react-redux';
import React from 'react';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className='heading'>
        <img src="https://omanfm1071.com/wp-content/uploads/2022/03/1-ghana-police-service.jpg" width="300px" height="200px" alt=''/>
        <p>Welcome Officer {user && user.name}</p>
        <h1>Complaints Filed</h1>
      </section>
  );
}

export default Profile;
