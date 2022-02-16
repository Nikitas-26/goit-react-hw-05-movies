import { useState, useEffect } from "react";
import { Link, Route, Switch, useParams, useLocation, useHistory } from "react-router-dom";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import getMovieDetails from "../Utils/getMovieDitails";
import "../module/MovieDetailsPage.css";
const MovieDetailsPage = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const history = useHistory();
  console.log(history);
  const id = params.movieId;
  useEffect(() => {
    getMovieDetails(id).then((data) => setData(data));
  }, [id]);
  const imgUrl = `https://image.tmdb.org/t/p/w400/${data.poster_path}`;
  const genre = data.genres;
  const location = useLocation();
  const onClickBack = () => {
    history.push(location.state.location);
  };
  return (
    <>
      <button onClick={onClickBack}>{"Go back"}</button>
      <div className="wrapp">
        <img src={imgUrl} alt={data.title} className="img" />
        <div className="disc">
          <div className="titleWrap">
            <h2 className="title">{data.title}</h2>
            <p className="peshka">({data.release_date})</p>
          </div>
          <p className="userScore">User Score: {data.vote_average}</p>
          <b>DESCRIPTION:</b>
          <p className="userOverview">{data.overview}</p>
          <b>GENRES:</b>
          <ul className="genres">
            {genre?.map((item) => (
              <li className="genre" key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link className="link" to={{ pathname: `/movies/${id}/cast`, state: { location: location.state.location } }}>Cast</Link>
      <Link className="link" to={{ pathname: `/movies/${id}/reviews`, state: { location: location.state.location } }}>Reviews</Link>
      <Switch>
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
