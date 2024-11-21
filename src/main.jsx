import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource-variable/oswald';
import '@fontsource/roboto';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)