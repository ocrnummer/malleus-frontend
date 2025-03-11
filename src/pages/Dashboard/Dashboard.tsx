import { useNavigate } from "react-router-dom";
import UserAdList from "./UserAdList/UserAdList";
import { NAV_NEW_URL } from "../../utils/SharedConts";

const UserDashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => { 
        navigate(NAV_NEW_URL)
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