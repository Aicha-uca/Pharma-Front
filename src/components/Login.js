import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyCredentials = () => {
    // Perform your validation logic here
    // Return true if the credentials are valid, false otherwise
    // You can use any validation library or custom validation logic

    // Example: Check if the email is valid and the password meets certain criteria
    if (email === 'aicha@gmail.com' && password === '12345678') {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isValidPassword = password.length >= 8;

      return isValidEmail && isValidPassword;
    }

    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify the credentials
    const isValidCredentials = verifyCredentials();

    if (isValidCredentials) {
      // Credentials are valid, perform the login logic
      console.log('Login successful');
      // Redirect to the home page
      navigate('/Pharmacie'); // Replace '/home' with your desired home page route
    } else {
      // Credentials are invalid, display an error message or take appropriate action
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
