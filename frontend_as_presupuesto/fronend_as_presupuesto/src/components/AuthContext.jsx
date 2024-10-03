// AuthContext.jsx
import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for authentication
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Optionally, check if the user is already authenticated when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async(e, email, password) => {
    // Login Logic
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/api/auth/login/', {
        email,
        password,
      });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
    setIsAuthenticated(true);
    navigate('/dashboard'); // Redirect to dashboard after login
    }
    catch(error){
      console.error('Login failed', error);
    }
  };

  const logout = () => {
    // Your logout logic (e.g., remove a token from localStorage)
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token')
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login after logout
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};