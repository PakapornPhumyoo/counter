import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appcourse from './Appcourse.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <Appcourse />
  </StrictMode>,
)
