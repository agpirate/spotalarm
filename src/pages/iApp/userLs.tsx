// UserSearch.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`/users/search?query=${searchTerm}`);
        setUsers(response.data); // Assuming response.data is an array of users
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchUsers();
    } else {
      setUsers([]); // Clear users when searchTerm is empty
    }
  }, [searchTerm]); // Effect runs whenever searchTerm changes

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for users..."
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
