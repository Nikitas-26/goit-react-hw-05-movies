import { useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
    const location =useLocation()
    console.log(location);
    return (<h2>h1</h2>);
}
 
export default MovieDetailsPage;