import { useState, useContext, createContext, ReactNode } from 'react';
import { executeBasicAuthenticationService } from '../api/AuthenticationApiService';
import { apiClient } from '../api/ApiClient';

interface AuthContextType {
  username: string;
  token: string;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  username: '',
  isAuthenticated: false,
  token: '',
  login: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [token, setToken] = useState<string>('');

  async function login(username: string, password: string): Promise<boolean> {
    try {
      const baToken = 'Basic ' + window.btoa(username + ':' + password);
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status === 200) {
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
    setUsername('');
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ username, isAuthenticated, token, login, logout }}>{children}</AuthContext.Provider>
  );
}
