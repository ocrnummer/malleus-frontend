import { createContext, JSX, useContext, useState } from 'react'
import { Models } from 'appwrite';
import { SESSION_COOKIE_KEY } from '../utils/SharedConts';
import user from '../services/UserService';

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

type ActionReturn = {
    success: boolean, 
    message: string | null
}

type CurrentUserContextType = {
    currentUserSession: Models.Session | null;
    currentUser: Models.User<Models.Preferences> | null;
    registerAction: (email: string, password: string) => Promise<ActionReturn>;
    loginAction: (email: string, password: string) => Promise<ActionReturn>;
    logoutAction: () => void;
}

const AuthContext = createContext<CurrentUserContextType>(null!);

const AuthProvider = ({ children }: ContextProviderProps) => {
    const [currentUserSession, setCurrentUserSession] = useState<Models.Session | null>(null);
    const [currentUser, setCurrentUser] = useState<Models.User<Models.Preferences> | null>(null);
    
    const registerAction = async (email: string, password: string) => {
        try {
            const userCreationResponse = await user.create(email, password);
            if (!userCreationResponse) {
                return { success: false, message: "Error creating user."};
            }
            return await loginAction(email, password);

            // Skicka email?
            // vänta på bekräftelse.
        } catch (e) {
            console.error(e)
            return { success: false, message: "Error creating new user."};
        }
    }

    const loginAction = async (email: string, password: string) => {
        try {
            const response = await user.createEmailPasswordSession(email, password)
            if (!response) {
                return { success: false, message: "Error creating session."};
            }
            setCurrentUserSession(response);
            const sessionUser = await user.get();
            if (!sessionUser) {
                return { success: false, message: "Error getting current session user."};
            }
            setCurrentUser(sessionUser);
            localStorage.setItem(SESSION_COOKIE_KEY, response.$id);
            return { success: true, message: null};
        } catch (e) {
            console.error(e)
            return { success: false, message: "Error creating session."};
        }
     }

    const logoutAction = async () => {
        try {
            await user.deleteSession()
            localStorage.removeItem(SESSION_COOKIE_KEY);
            setCurrentUserSession(null);
            setCurrentUser(null);
            return { success: true, message: null};
        } catch (e) {
            console.error(e)
            return { success: false, message: "Error deleting session."};
        }
    }
  
    return (
        <AuthContext.Provider value={{ currentUserSession, currentUser, registerAction, loginAction, logoutAction }}>
            { children }
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}