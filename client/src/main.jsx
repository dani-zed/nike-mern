import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>

 
)
