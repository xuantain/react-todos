import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {
  const [username, setUsername] = useState('todo');
  const [password, setPassword] = useState('');

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const authContext = useAuth();

  async function handleSubmit() {
    const isAuthenticated = await authContext.login(username, password);

    if (isAuthenticated) {
      setShowError(false);
      navigate(`welcome/${username}`);
    } else {
      setShowError(true);
    }
  }

  return (
    <div className="Login container">
      <h1>Time to login</h1>
      <div className="LoginForm mt-3">
        {showError && (
          <div className="errorMessage mb-3 alert alert-warning">
            Authenticated Failed. Please check your credentials.
          </div>
        )}
        <div className="form-group d-flex justify-content-center mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group d-flex justify-content-center">
          <label htmlFor="password" className="col-sm-2 col-form-label text-left">
            Password
          </label>
          <div className="col-sm-2">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-success m-5" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
