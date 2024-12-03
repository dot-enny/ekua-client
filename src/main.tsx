import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { AuthLayout } from './layouts/Auth';
import { Verify } from './pages/auth/Verify';
// import { SignIn } from './pages/SignIn.tsx'
// import { SignUp } from './pages/SignUp.tsx'
// import { AuthLayout } from './layouts/Auth.tsx'
// import { Notification } from './components/notification/Notification.tsx'
// import { ProtectedRoute } from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn />, },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'verify', element: <Verify /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
