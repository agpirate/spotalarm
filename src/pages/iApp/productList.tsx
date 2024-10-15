// src/components/UserSearch.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../store/userSlice';
import { RootState } from '../store/store';

const UserSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useSelector((state: RootState) => state.user);

  const handleSearch = () => {
    // Dispatch the searchUsers action with the search term
    dispatch(searchUsers(searchTerm));
  };

  // Use useMemo to filter users based on the search term
  const filteredUsers = useMemo(() => { //reactive values depend on searchTerm
    return data.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]); // Recompute only when users or searchTerm changes


  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for users..."
      />
      <button onClick={handleSearch} disabled={loading}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {Array.isArray(data) ? (
            data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserSearch;
