import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Styles
import './index.css'
import './assets/styles/navbar.css'

import App from './App.tsx'
 import HomePage from './pages/HomePage.tsx';
 import ErrorPage from './pages/ErrorPage.tsx';
// import SearchPage from './pages/SearchPage.tsx';
// import Results from './pages/Results.jsx';
 import LoginPage from './pages/LoginPage.js';
import CreateAccount from './pages/CreateAccount.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
     errorElement: <ErrorPage />,
    children: [
      {
        index: true,
         element: <HomePage />
      }, 
      {
        path: '/CreateAccount',
        element: <CreateAccount />
      },
      {
        path: '/Search',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
    //   {
    //     path: '/results',
    //     element: <Results />
    //   },
     ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
    
