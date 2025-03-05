import { Dispatch, SetStateAction } from 'react';
import db from '../../appwrite/databases.ts';
import { AdType } from '../../pages/SearchAds/SearchAds';

interface NewAdFormProps {
    setAds: Dispatch<SetStateAction<AdType[]>>;
}

const NewAdForm: React.FC<NewAdFormProps> = ({setAds}) => {
    const handleAdd = async (e: React.SyntheticEvent) => {
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
            const res = await db.ads.create(payload);
            setAds((prevState: AdType[]): AdType[] => [res, ...prevState])
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form onSubmit={ handleAdd }>
            <input 
                type="text" 
                name="title"
                placeholder="Title" 
            />
            <input 
                type="text" 
                name="body"
                placeholder="Description" 
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default NewAdForm