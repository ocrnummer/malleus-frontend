import { AdType } from '../SearchAds'
import { useNavigate } from 'react-router-dom';

interface AdListItemProps {
    adData: AdType
}

const AdListItem: React.FC<AdListItemProps> = ({adData}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/ad/" + adData.$id)
    }
    return (
        <div onClick={handleClick}>
            <h3>{adData.title}</h3>
            <p>{adData.body}</p>
        </div>
    )
}

export default AdListItem

