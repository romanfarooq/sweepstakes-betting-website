import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import './index.css'

// const clientId = import.meta.env.VITE_CLIENT_ID;
// const domain = import.meta.env.VITE_AUTH_DOMAIN;


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>
)
