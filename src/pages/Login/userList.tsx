// src/components/UserProfile.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../store/store_aSlice';
import { RootState } from '../../store/store';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // Define custom headers and use the GET method to fetch data
    const headers = {
      'Custom-Header': 'CustomValue',
      'Content-Type': 'application/json',
    };
    
    dispatch(fetchUserData({ 
      method: 'GET', 
      url: '/users/me', // Adjust the URL as needed
      headers,
    }));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
