import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NAV_DASHBOARD_URL, NAV_LOGIN_URL } from "../../utils/SharedConts";

const Register = () => {
    const navigate = useNavigate()
    const auth = useAuth();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        // Do check for email if it exists
        // DO checks for password

        const target = e.target as typeof e.target & {
            email: { value: string};
            password1: { value: string};
        };

        registerNewUser(target.email.value, target.password1.value);
    }

    const registerNewUser = async (email: string, password: string) => {
        const res = await auth.registerAction(email, password)
        if (!res.success) {
            console.log(res.message) // TODO CHANGE TO GROWL OR OTHER POPUP
            return;
        }
        navigate(NAV_DASHBOARD_URL);
    }

    const navigateLogin = () => {
        navigate(NAV_LOGIN_URL);
    }

    return (
        <>
            <div>Register</div>
            <button onClick={navigateLogin}>Already a user?</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password1" placeholder="Password" />
                <input type="password" name="password2" placeholder="Repeat Password" />
                <button>Signup</button>
            </form>
        </>
     );
}

export default Register;