import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import { IAd } from "../../types";
import { NAV_EDIT_URL } from "../../utils/SharedConts";
import db from "../../services/DatabasesService";

const AdDetails = () => {
    const { id } = useParams();
    const [ad, setAd] = useState<IAd>();
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
        navigate(NAV_EDIT_URL + ad?.$id)
    }

    return (
        <>
            <h2>{ad?.title}</h2>
            <p>{ad?.body}</p>
            {auth.currentUser && <button onClick={handleClick} >Edit</button>}
            {/* Bild */}
            {/* Title */}
            {/* pris */}
            {/* typ av tjänst */}
            {/* descriptionn */}
        </>
    )
  
}

export default AdDetails
