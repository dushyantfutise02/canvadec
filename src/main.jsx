import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Why from './components/Why.jsx'
import HowItStarted from './components/HowItStarted.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  <Why />
  // </StrictMode>,
)
