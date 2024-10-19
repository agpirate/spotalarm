import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('/api/users'); // Your API endpoint
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Fetch once on mount

  // Memoize the filtered users based on search term
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]); // Recalculate when users or searchTerm changes

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
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
