import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles'
import { AlertContextProvider } from '@/contexts/AlertContexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AlertContextProvider>
      <Global styles={globalStyles} />
      <App />
    </AlertContextProvider>
  </React.StrictMode>,
)

reportWebVitals()
