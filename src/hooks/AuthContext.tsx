import { createContext, JSX, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext({ 
    user: false, 
    token: "", 
    loginAction: () => {}, 
    logoutAction: () => {} 
});

const AuthProvider = ({ children }: ContextProviderProps) => {
    const [user, setUser] = useState<boolean>(false);
    const [token, setToken] = useState(localStorage.getItem("site") || "");

    const navigate = useNavigate();

    const loginAction = () => {
        try {
            const response = true // Do post to login here

            // const res = await response.json();

            // if (res.data) {
            //   setUser(res.data.user);
            //   setToken(res.token);
            //   localStorage.setItem("site", res.token);
            //   navigate("/dashboard");
            //   return;
            // }

            setUser(response);
            navigate("/dashboard");

        } catch (e) {
            console.error(e)
        }
     }

     const logoutAction = () => {
        setUser(false);
        // setToken("");
        // localStorage.removeItem("site")
        navigate("/")
     }
  
    return (
        <AuthContext.Provider value={{ user, token, loginAction, logoutAction }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}