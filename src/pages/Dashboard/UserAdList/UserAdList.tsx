import { useEffect, useState } from 'react'
import { AdType } from '../../SearchAds/SearchAds'
import UserAdListItem from './UserAdListItem/UserAdListItem'
import { Query } from 'appwrite'
import db from '../../../appwrite/databases'

const UserAdList = () => {
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
            <div>UserAdList</div>
            <div>
                {ads.map(
                    (ad: AdType) => (
                        <UserAdListItem key={ad.$id} setAds={setAds} adData={ad} />
                    )
                )}
            </div>
        </>
    )
}

export default UserAdList