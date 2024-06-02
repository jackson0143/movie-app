import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <GoogleOAuthProvider clientId='401700831864-u9ihgbbo5tpmb4u7jpm1dbkbvbsg41tl.apps.googleusercontent.com'>
  <React.StrictMode>

    <AuthContextProvider>
    <App />
    </AuthContextProvider>
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
