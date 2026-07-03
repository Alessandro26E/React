import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([

  {
    path: '/cadastro',
    element: <Cadastro/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/home',
    element: <Home/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
