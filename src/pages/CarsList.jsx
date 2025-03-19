import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../features/Users/UserSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { userInfo, isLoading, errorMessage } = useSelector((state) => state.user); 

  useEffect(() => {
    dispatch(fetchUserDetails()); 
    console.log(userInfo );
    
  }, [dispatch]);

  if (isLoading) return <p>Loading user details...</p>;

  // Check if errorMessage is an object and render its details
  if (errorMessage) {
    const error = typeof errorMessage === 'object' && errorMessage.detail 
      ? errorMessage.detail 
      : errorMessage;
    
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userInfo ? (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <p>First Name: {userInfo.first_name}</p>
          <p>Last Name: {userInfo.last_name}</p>
          <p>Is Staff: { userInfo.role}</p>
        </div>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  );
};

export default UserProfile;
