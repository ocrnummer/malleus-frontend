import { useAuth } from "../../hooks/AuthContext";

const Header = () => {
    const auth = useAuth();

    const handleLogin = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !auth.user ? auth.loginAction() : auth.logoutAction()
    }


    return (
        <>
            <div>Header</div>
            <button onClick={handleLogin}>{auth.user ? 'Sign out' : 'Sign in'}</button>
            {/* Menyknapp som öppnar sidomeny */}
            {/* <- Logotyp */}
            {/* -> Logga in/ut */}

        </>
    )
  
}

export default Header