import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './button.css'
// import App from '@/App'
import NavigationBar  from './objects/navbar.tsx'


createRoot(document.getElementById('render')!).render(
  <StrictMode>
      <NavigationBar />
  </StrictMode>,
)
