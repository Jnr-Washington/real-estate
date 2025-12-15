import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from '@/App'
import NavigationBar  from './Client/navbar'


createRoot(document.getElementById('render')!).render(
  <StrictMode>
      <NavigationBar />
  </StrictMode>,
)
