import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/authProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPage';
import ServiceBookletPage from './pages/serviceBookletPage/serviceBookletPage';
import AuthRequired from './auth/authRequired';
import ServiceBookletEntryForm from './pages/serviceBookletPage/components/serviceBookletEntryForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ChamferingPage from './pages/chamferingPage/chamferingPage';
import GantryRequired from './auth/gantryRequired';
import AdminOrForemanRequired from './auth/adminRequire';
import ActiveUsersPage from './pages/adminOrForemanPages/activeUserPage/activeUsersPage';
import PostetOnWorkplaceUsersList from './pages/adminOrForemanPages/activeUserPage/subPages/postedOnWorkplaceusersListPage/postetOnWorkplaceUsersList';
import ActiveUsersList from './pages/adminOrForemanPages/activeUserPage/subPages/activeUsersListPage/activeUsersList';
import ChamferingReportsPage from './pages/adminOrForemanPages/chamferingReportsPage/ChamferingReportsPage';
import { InfoPage } from './pages/infoPage/infoPage';
import HomePage from './pages/homePage/homePage';
import RegisterUser from './pages/adminOrForemanPages/registerUser/registerUser';
import NoLoginRequire from './auth/noLoginRequire';
import NormalUserRequired from './auth/normalUserRequired';
import DndBoard from './pages/adminOrForemanPages/shiftScheduleCreatepage/DndBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <NoLoginRequire />, children: [{ path: 'login', element: <LoginPage /> }] },
      { path: 'home', element: <HomePage /> },
      {
        //auth router
        element: <AuthRequired />,
        children: [
          {
            element: <NormalUserRequired />,
            children: [
              {
                path: 'serviceBooklet',
                element: <ServiceBookletPage />,
                children: [{ path: 'serviceBookletEntry/:type', element: <ServiceBookletEntryForm /> }],
              },
              {
                path: 'schedule',
                element: <DndBoard />,
              },
            ],
          },
          { path: 'info', element: <InfoPage /> },
          //routes only for gantry
          { element: <GantryRequired />, children: [{ path: 'chamfering', element: <ChamferingPage /> }] },
          //routes only for foreman and admin
          {
            element: <AdminOrForemanRequired />,
            children: [
              {
                path: 'activeUsers',
                element: <ActiveUsersPage />,
                children: [
                  {
                    path: 'posted',
                    element: <PostetOnWorkplaceUsersList />,
                  },
                  { path: 'active', element: <ActiveUsersList /> },
                ],
              },
              { path: 'chamferingRaports', element: <ChamferingReportsPage /> },
              { path: 'registeruser', element: <RegisterUser /> },
              { path: 'createShiftSchedule', element: <DndBoard /> },
            ],
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </AuthProvider>
  // </React.StrictMode>
);
reportWebVitals();
