import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Debounce delay
  const DEBOUNCE_DELAY = 300;
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        fetchUsers(searchTerm);
      } else {
        setUsers([]); // Clear users when searchTerm is empty
      }
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler); // Cleanup to avoid setting state on unmounted component
    };
  }, [searchTerm]); // Effect runs whenever searchTerm changes

  const fetchUsers = async (term: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`/users/search?query=${term}`);
      setUsers(response.data);
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

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
