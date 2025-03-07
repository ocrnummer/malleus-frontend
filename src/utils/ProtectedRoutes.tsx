import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
    const auth = useAuth();

    return auth.user ? <Outlet /> : <Navigate to="/" />;
}
 
export default ProtectedRoutes;