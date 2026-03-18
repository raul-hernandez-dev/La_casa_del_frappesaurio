import React from 'react';
import ReactDOM from 'react-dom/client';
//import { RouterProvider } from 'react-router-dom';
//import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './config/i18n/i18n';
import './styles/globals.css';
//import { router } from './routes/routes';
import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);