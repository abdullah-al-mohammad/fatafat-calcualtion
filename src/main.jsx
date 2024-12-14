import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import SignUp from './components/signUp/SignUp.jsx';
import CalculatDetails from './pages/CalculatDetails.jsx';
import PrivateRouter from './components/router/PrivateRouter.jsx';
import Contact from './pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/details',
        element: <PrivateRouter><CalculatDetails></CalculatDetails></PrivateRouter>,
        loader: () => fetch('http://localhost:5000/calculate')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
