import { IAd } from '../../../types';
import { NAV_AD_URL } from '../../../utils/SharedConts';
import './AdListItem.scss'
import { useNavigate } from 'react-router-dom';


interface AdListItemProps {
    adData: IAd
}

const AdListItem: React.FC<AdListItemProps> = ({adData}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(NAV_AD_URL + adData.$id)
    }
    return (
        <div onClick={handleClick} className='ad-list-item'>
            <h3>{adData.title}</h3>
            <p>{adData.body}</p>
        </div>
    )
}

export default AdListItem

