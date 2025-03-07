import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AdType } from "../SearchAds/SearchAds";
import db from "../../appwrite/databases";
import { useAuth } from "../../contexts/AuthContext";

const AdDetails = () => {
    const { id } = useParams();
    const [ad, setAd] = useState<AdType>();
    const auth = useAuth();
    const navigate = useNavigate();

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

    const handleClick = () => {
        navigate("/edit/" + ad?.$id)
    }

    return (
        <>
            <h2>{ad?.title}</h2>
            <p>{ad?.body}</p>
            {auth.user && <button onClick={handleClick} >Edit</button>}
            {/* Bild */}
            {/* Title */}
            {/* pris */}
            {/* typ av tjänst */}
            {/* descriptionn */}
        </>
    )
  
}

export default AdDetails
