import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './button.css'
import App from '@/App'



createRoot(document.getElementById('render')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
