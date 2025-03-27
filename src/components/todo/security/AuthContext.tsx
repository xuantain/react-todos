import { useState, useContext, createContext } from 'react';
import { executeJwtAuthenticationService, executeBasicAuthenticationService } from '../api/AuthenticationApiService';
import { apiClient } from '../api/ApiClient';

// 1 create context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); // this creates a new hook useAuth

// 2 Put some state in the context
// Share the created context with other components

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  async function login(username, password) {
    try {
      const baToken = 'Basic ' + window.btoa(username + ':' + password);
      const response = await executeBasicAuthenticationService(baToken);
      // const response = await executeJwtAuthenticationService(username, password)

      if (response.status == 200) {
        // const jwtToken = 'Bearer ' + response.data.token

        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log('Use interceptors > to Set general configs for every requests');
          config.headers.Authorization = baToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  const valueToBeShared = { username, isAuthenticated, token, login, logout };

  return <AuthContext.Provider value={valueToBeShared}>{children}</AuthContext.Provider>;
}
