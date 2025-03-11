import { useNavigate } from 'react-router-dom';
import { IAd } from '../../types/index.ts';
import { NAV_AD_URL } from '../../utils/SharedConts.tsx';
import db from '../../services/DatabasesService.ts';

interface AdFormProps {
    adData?: IAd;
}

const AdForm: React.FC<AdFormProps> = ({adData}) => {
    const navigate = useNavigate();
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string};
            body: { value: string};
        };
        if (!target.title.value || !target.body.value) return; // Add some growl or such for clients, then later proper validation
        try {
            const payload = {
                title: target.title.value, 
                body: target.body.value
            };
            const res = adData?.$id ? await db.ads.update(adData.$id, payload) : await db.ads.create(payload);
            navigate(NAV_AD_URL + res.$id);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                name="title"
                placeholder="Title" 
                defaultValue={adData?.title}
            />
            <input 
                type="text" 
                name="body"
                placeholder="Description" 
                defaultValue={adData?.body}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AdForm