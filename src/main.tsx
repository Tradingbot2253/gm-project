import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Components/Home'
import Signup from './assets/signup'
import Footer from './Components/footer'
import NavigationBar from './Components/NavigationBar'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
)
