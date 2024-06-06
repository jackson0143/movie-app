import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = import.meta.env.VITE_GOOGLE_ID

ReactDOM.createRoot(document.getElementById('root')!).render(

  <GoogleOAuthProvider clientId={clientId}>
  <React.StrictMode>

    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
