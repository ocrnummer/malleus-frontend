import { Dispatch, SetStateAction } from 'react';
import db from '../../../../appwrite/databases';
import { useNavigate } from 'react-router-dom';
import { IAd } from '../../../../types';

interface UserAdListItemProps {
    setAds: Dispatch<SetStateAction<IAd[]>>;
    adData: IAd
}

const UserAdListItem: React.FC<UserAdListItemProps> = ({setAds, adData}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/ad/" + adData.$id)
    }
    
    const handleDelete = async () => {
        
        try {
            await db.ads.delete(adData.$id);
            setAds((prevState: IAd[]): IAd[] => prevState.filter(ad => ad.$id !== adData.$id))
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div onClick={handleClick} className='ad-list-item'>
            <h3>{adData.title}</h3>
            <p>{adData.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UserAdListItem

