import { useParams } from "react-router-dom";

const EditAd = () => {
    const { id } = useParams();

    return ( 
        <>
            <div>Edit ad</div>
            <div>Ad id: {id}</div>
        </>
     );
}
 
export default EditAd;