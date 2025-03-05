import { useEffect, useState } from 'react';
import db from '../../appwrite/databases.ts'
import NewAdForm from '../../components/NewAdForm/NewAdForm';
import { Models, Query } from 'appwrite';
import AdListItem from './AdListItem/AdListItem.tsx';

export interface AdType extends Models.Document {
    title: string,
    body: string
}

export const SearchAds = () => {
    const [ads, setAds] = useState<AdType[]>([])

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const res = await db.ads.list(
            [Query.orderDesc('$createdAt')]
        );
        setAds(res.documents)
    }

    return (
        <>
            <h2>SearchAds</h2>
            <NewAdForm setAds={setAds}/>
            <div>
                {ads.map(
                    (ad: AdType) => (
                        <AdListItem key={ad.$id} setAds={setAds} adData={ad} />
                    )
                )}
            </div>
            {/* Sökbox med filter */}
            {/* Lista med resultat */}
        </>
    )
  
}

export default SearchAds