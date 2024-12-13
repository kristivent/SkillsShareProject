import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import SearchPage from './pages/SearchPage.tsx';
import Results from './pages/Results.tsx';
import LoginPage from './pages/LoginPage.tsx';
import CreateAccount from './pages/CreateAccount.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }, 
      {
        path: '/CreateAccount',
        element: <CreateAccount />
      },
      {
        path: '/create-account',
        element: <HomePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/results',
        element: <Results />
      },
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
    
