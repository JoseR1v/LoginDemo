import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { AuthProvider } from './context/authContext'
import FormsFirebase  from "./FormsFirebase"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <h1 style={{fontSize: '4em', marginBlockStart: 0}} >Demo</h1>
        <FormsFirebase />
      </AuthProvider>
  </React.StrictMode>,
)
