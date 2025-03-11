import { useEffect, useState } from 'react';
import { Query } from 'appwrite';
import AdListItem from './AdListItem/AdListItem.tsx';
import { IAd } from '../../types/index.ts';
import db from '../../services/DatabasesService.ts';

export const SearchAds = () => {
    const [ads, setAds] = useState<IAd[]>([])

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
            {/* Sökbox med filter */}
            {/* Bryt ut lista till egen komponent */}
            <div>
                {ads.map(
                    (ad: IAd) => (
                        <AdListItem key={ad.$id} adData={ad} />
                    )
                )}
            </div>
        </>
    )
  
}

export default SearchAds