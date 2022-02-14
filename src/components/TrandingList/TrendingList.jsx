import TrendingItem  from '../TrendingItem/TrendingItem';
const TrendingList = ({movies}) => {
   
    
    return (<ul>{movies.map(movie => {
        return <TrendingItem key={movie.id} movie={movie}/>
    })}</ul>);
}
 
export default TrendingList ;