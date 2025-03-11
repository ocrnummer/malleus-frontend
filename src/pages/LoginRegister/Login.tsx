import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NAV_DASHBOARD_URL, NAV_LOGIN_REGISTER_URL } from "../../utils/SharedConts";

const Login = () => {
    const navigate = useNavigate()
    const auth = useAuth();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string};
            password: { value: string};
        };

       signInUser(target.email.value, target.password.value);
    }

    const signInUser = async (email: string, password: string) => {
        const res = await auth.loginAction(email, password)
        if (!res.success) {
            console.log(res.message) // TODO CHANGE TO GROWL OR OTHER POPUP
            return;
        }
        navigate(NAV_DASHBOARD_URL);
    }

    const navigateRegister = () => {
        navigate(NAV_LOGIN_REGISTER_URL);
    }

    return ( 
        <>
            <div>Login</div>
            <button onClick={navigateRegister}>Register</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Signup</button>
            </form>
        </>
     );
}
 
export default Login;