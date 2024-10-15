import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  
  // Effect to watch for changes in 'value'
  useEffect(() => {
    // Triggered whenever 'value' changes
    console.log('Value changed:', value);
    // You can call a function or perform an action here based on the new value
  }, [value]); // Dependency array containing the state to watch

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('/api/data'); // Replace with your API
        setData(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once after the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
