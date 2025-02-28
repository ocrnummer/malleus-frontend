import { Link } from "react-router-dom"
import { HomeSearchBox } from "./components/HomeSearchBox/HomeSearchBox"



const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <HomeSearchBox />
            <Link to="/search">Search</Link>
        </>
    )
  
}

export default Home
