import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform the POST request to the authentication API
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          // Successful login
          setSuccess('Successfully login!!! Redirecting to your profile...')
          setError('');
          
          return res.json();
        } else {
            setSuccess("");
          // Unsuccessful login, parse the error message
          res.json().then((data) => setError(data.message));
          throw new Error('Invalid credentials');
        }
      })
      .then((user) => {
        // Save the user object to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        setInterval(()=>{
            onLogin(user);
        } , 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='loginContainer'>
    <div className='login'>
        <p>Welcome Back!👋</p>
      <h2>Sign in your account</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button onClick={handleLogin}>CONTINUE</button>
      <a href='#'>forgot password</a>
    </div>
    <p>Already have an account! <a href='#'>click here</a></p>
    </div>
  );
};

export default Login;