import { Link,Route} from "react-router-dom";
const TrendingItem = ({movie}) => {
    return (<li  id={movie.id}><Link  to={{pathname:`/movies/${movie.id}`, state:{movie}}}><p>{movie.title}</p></Link></li>);
}

export default TrendingItem;
