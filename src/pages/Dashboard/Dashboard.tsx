import { useNavigate } from "react-router-dom";
import UserAdList from "./UserAdList/UserAdList";

const UserDashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => { 
        navigate("/new")
    }
    
    return ( 
        <>
            <div>UserDashboard</div>
            <button onClick={handleClick}>New ad</button>
            <UserAdList />
        </>
     );
}
 
export default UserDashboard;