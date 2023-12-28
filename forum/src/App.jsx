import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import MainPage from './MainPage'
import Home from './pages/Home'
import CurrentTheme from './pages/CurrentTheme'
import News from './pages/News'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/reg" />
  },
  {
    path: '/theme/:id',
    element: <Navigate to="/reg" />
  },
  {
    path: '/news',
    element: <Navigate to="/reg" />
  },
  {
    path: '/profile',
    element: <Navigate to="/reg" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/theme/:id',
    element: <CurrentTheme />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: 'admin',
    element: <>admin</>
  }
])

function App() {
  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);


  return (
    token ? role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouter} /> :
    <RouterProvider router={router} />
  )
}

export default App
