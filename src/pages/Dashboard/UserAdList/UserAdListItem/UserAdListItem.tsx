import { Dispatch, SetStateAction } from 'react';
import { AdType } from '../../../SearchAds/SearchAds';
import db from '../../../../appwrite/databases';

interface UserAdListItemProps {
    setAds: Dispatch<SetStateAction<AdType[]>>;
    adData: AdType
}

const UserAdListItem: React.FC<UserAdListItemProps> = ({setAds, adData}) => {

    const handleDelete = async () => {
        try {
            await db.ads.delete(adData.$id);
            setAds((prevState: AdType[]): AdType[] => prevState.filter(ad => ad.$id !== adData.$id))
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h3>{adData.title}</h3>
            <p>{adData.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UserAdListItem

