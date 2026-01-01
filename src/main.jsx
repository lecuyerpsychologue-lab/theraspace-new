import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize default user if none exists
if (!localStorage.getItem('theraspace_user')) {
  localStorage.setItem('theraspace_user', JSON.stringify({
    pseudo: 'Utilisateur',
    createdAt: new Date().toISOString(),
  }));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
