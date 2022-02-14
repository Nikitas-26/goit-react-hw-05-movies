import searchMovies from '../../Utils/searchMovies';
import  { useState } from 'react';

const SearchMovies = ({setMoviesonSubmit}) => {
    const [value,setValue] = useState('')
    
    const onInputValue = (e) =>{
        setValue(e.target.value)
    }
    const onSubmit =(e) => {
        e.preventDefault() 
        searchMovies(value).then( data => setMoviesonSubmit(data.results))
    }
    return (
    <form onSubmit={onSubmit}>
    <input className="input"
    onChange={onInputValue}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search films"/>
    <button type='submit'>Search</button>
    </form>
    );
}
 
export default SearchMovies;