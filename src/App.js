import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
function App() {
  
  return (

    <div className="App">
          <nav>
        <NavLink activeStyle={{ color: "green" }}
          to="/" exact
          >Home</NavLink>
        <NavLink activeStyle={{ color: "green" }}
          to="/movies">Movies</NavLink>
          </nav>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path="/movies" component={MoviesPage}/>
            <Route  path='/movies/:movieId' component={MovieDetailsPage}/>
          </Switch>
    </div>
  );
}

export default App;
