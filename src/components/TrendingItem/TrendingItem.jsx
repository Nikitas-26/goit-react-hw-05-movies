import { Link} from "react-router-dom";
import  './TrendingItem.css';
const TrendingItem = ({movie,location}) => {
    return (<li id={movie.id}><Link  to={{pathname:`/movies/${movie.id}`, state:{movie,location}}}><p className="item" >{movie.title|| movie.name}</p></Link></li>);
}
export default TrendingItem;
