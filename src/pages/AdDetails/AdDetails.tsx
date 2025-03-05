import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AdType } from "../SearchAds/SearchAds";
import db from "../../appwrite/databases";

const AdDetails = () => {
    const { id } = useParams();
    const [ad, setAd] = useState<AdType>();

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        if (!id) {
            throw new Error('No id param found');
        };
        const res = await db.ads.get(id);
        setAd(res);
    }   

    return (
        <>
            <h2>{ad?.title}</h2>
            <p>{ad?.body}</p>
            {/* Bild */}
            {/* Title */}
            {/* pris */}
            {/* typ av tjänst */}
            {/* descriptionn */}
        </>
    )
  
}

export default AdDetails
