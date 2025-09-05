import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contextprovider from './components/Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextprovider>
    <App />
    </Contextprovider>
  </StrictMode>,
)
