
import { Navigate, useRoutes } from 'react-router-dom';
import  HomePage  from './Pages/HomePage';
import DashboardLayout from './Layout/UserDashboard';
export default function Router() {

    const routes = useRoutes([
        {
            path: '/', 
            element:<DashboardLayout />,
            children:[
                { path: '/', element: <HomePage /> },
            ]
        },
        
        {
            path: '*',
            element: <Navigate to="/"  />
        }
    ]);

    return routes;
}