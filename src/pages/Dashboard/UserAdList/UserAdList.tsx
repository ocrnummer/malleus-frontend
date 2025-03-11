import { useEffect, useState } from 'react'
import UserAdListItem from './UserAdListItem/UserAdListItem'
import { Query } from 'appwrite'
import { IAd } from '../../../types'
import db from '../../../services/DatabasesService'

const UserAdList = () => {
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
            <div>UserAdList</div>
            <div>
                {ads.map(
                    (ad: IAd) => (
                        <UserAdListItem key={ad.$id} setAds={setAds} adData={ad} />
                    )
                )}
            </div>
        </>
    )
}

export default UserAdList