import React, { useState } from 'react';

const Login = () => {
  const [userName, setUser] = useState('');
  const [password, setPass] = useState('');
  const [profile, setProfile] = useState(false);

  const onsubmit = (e) => {
    setProfile(true);
    e.preventDefault();
  };
  return (
    <div className="form">
      <form onSubmit={onsubmit}>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
        />
        <div></div>
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <div></div>
        <button>Submit</button>
      </form>

      {profile && `'Welcome' ${userName}`}
    </div>
  );
};

export default Login;
