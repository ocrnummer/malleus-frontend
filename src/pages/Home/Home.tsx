import { Link } from "react-router-dom"
import { HomeSearchBox } from "./components/HomeSearchBox/HomeSearchBox"
import { NAV_SEARCH_URL } from "../../utils/SharedConts"



const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <HomeSearchBox />
            <Link to={NAV_SEARCH_URL}>Search</Link>
        </>
    )
  
}

export default Home
