import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://globetrotter-challenge-backend-production.up.railway.app/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)