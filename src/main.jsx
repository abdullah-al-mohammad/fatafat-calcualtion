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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/calculate',
        element: <PrivateRouter><CalculatDetails></CalculatDetails></PrivateRouter>,
        loader: () => fetch('https://api.sheetbest.com/sheets/298772df-1e5d-4741-b56d-73e9efabd108')
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
