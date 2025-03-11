import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { NAV_BASE_URL } from './SharedConts';

const ProtectedRoutes = () => {
    const auth = useAuth();

    return auth.currentUser ? <Outlet /> : <Navigate to={NAV_BASE_URL} />;
}
 
export default ProtectedRoutes;