import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Person from './Greeting.jsx'
import Animals from './List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  <Person />     
  <Animals />         
  </StrictMode>,
)
console.log("HELLO WORLD")
