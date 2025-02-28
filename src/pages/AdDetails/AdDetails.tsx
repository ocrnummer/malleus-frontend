import { useParams } from "react-router-dom"

const AdDetails = () => {
    const { id } = useParams();

    return (
        <>
            <div>AdDetails</div>
            <p>{id}</p>
            {/* Bild */}
            {/* Title */}
            {/* pris */}
            {/* typ av tjänst */}
            {/* descriptionn */}
        </>
    )
  
}

export default AdDetails
