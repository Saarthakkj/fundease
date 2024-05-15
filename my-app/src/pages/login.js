import React from 'react';
import '../styles/App.css';  // Ensure the path is correct based on your project structure

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>  {/* This now comes before the form */}
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="App-button">Login</button>
        </form>
      </header>
    </div>
  );
}

export default Login;
