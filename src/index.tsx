import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals'
import { Global } from '@emotion/react'
import globalStyles from './styles/globalStyles'
import { AlertContextProvider } from '@/contexts/AlertContext'
import { RecoilRoot } from 'recoil'
import AuthGuard from './components/auth/AuthGuard'

import App from './App'
import './index.css'

const client = new QueryClient({
  defaultOptions: {},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <AlertContextProvider>
          <AuthGuard>
            <App />
          </AuthGuard>
        </AlertContextProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

reportWebVitals()
