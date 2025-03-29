import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './TodoApp.css';

import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodoComponents from './ListTodoComponents';
import TodoComponent from './TodoComponent';
import ErrorComponent from './ErrorComponent.jsx';
import WelcomeComponent from './WelcomeComponent';
import AuthProvider, { useAuth } from './security/AuthContext.js';
import { ReactNode } from 'react';

// {/* Create a wrap component to Protect Routes */}
function AuthenticatedRoute({ children }: { children: ReactNode }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          {/* Define the general component for the layout */}
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  {/* Protect Routes */}
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            {/* Define the routes with params */}
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  {/* Protect Routes */}
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  {/* Protect Routes */}
                  <ListTodoComponents />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  {/* Protect Routes */}
                  <TodoComponent />
                </AuthenticatedRoute>
              }
            />
            {/* Define all the undefined routes */}
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
          {/* Define the general component for the layout */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
