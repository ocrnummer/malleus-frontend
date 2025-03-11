import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdForm from "../../components/AdForm/AdForm";
import { IAd } from "../../types";
import db from "../../services/DatabasesService";

const EditAd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ad, setAd] = useState<IAd>();

    useEffect(() => {
        init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const init = async () => {
        if (!id) {
            throw new Error('No id param found');
        };
        try {
            const res = await db.ads.get(id);
            setAd(res);
        } catch (e) {
            console.error(e);
        }
    }

    const handleDelete = async () => {
        if (!ad?.$id) {
            throw new Error('No ad id found');
        };
        try {
            await db.ads.delete(ad?.$id);
            navigate('/dashboard');
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <h3>Edit ad</h3>
            <button onClick={handleDelete}>Delete Ad</button>
            <AdForm adData={ad}/>
        </>
     );
}
 
export default EditAd;