import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NAV_BASE_URL, NAV_LOGIN_URL } from "../../utils/SharedConts";

const Header = () => {
    const navigate = useNavigate()
    const auth = useAuth();

    const handleLogin = () => {
        if (auth.currentUser) {
            auth.logoutAction() 
            navigate(NAV_BASE_URL)
            return;
        }
        navigate(NAV_LOGIN_URL)
    }


    return (
        <>
            <div>Header</div>
            <button onClick={handleLogin}>{auth.currentUserSession ? 'Sign out' : 'Sign in'}</button>
            {/* Menyknapp som öppnar sidomeny */}
            {/* <- Logotyp */}
            {/* -> Logga in/ut */}

        </>
    )
  
}

export default Header