import axios from 'axios';

const login = async (username: string, password: string) => {
  const response = await axios.post('/api/login', { username, password });
  return response.data;
};

const authService = {
  login,
};

export default authService;
