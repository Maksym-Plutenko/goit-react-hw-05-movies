import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  const from = useRef();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      from.current = location.state;
      // console.log(from);
    } else {
      from.current = "/";
    }

  }, [])





  // const from = useRef({
  //   pathname: "/",
  //   search: "",
  //   hash: "",
  //   state: null,
  //   key: "r0pqenq3"
  // });

  // const [from, setFrom] = useState({
  //   pathname: "/",
  //   search: "",
  //   hash: "",
  //   state: null,
  //   key: "r0pqenq3"
  // });
  


  // const location = useLocation();


  // console.log(location);
  // console.log(location.state);
  // if (location.state) {
  //   from = location.state;
  // }

  useEffect(() => {
    async function getDetails(id) {
      const response = await apiserver.details(id);
      setDetails(response);
    }

    getDetails(movieId);
  }, [movieId]);

  const {backdrop_path, original_title, popularity, overview, genres} = details;

  return (
    <section>
      <Link to={from.current}>Go back</Link>
      <div>
        {backdrop_path && <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="film poster" />}
        <div>
          <h2>{original_title}</h2>
          <p>User Score: {popularity}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && <p>{genres.map((genre, index, array) => (index + 1) === array.length ? genre.name : genre.name + ', ')}</p>}
        </div>
      </div>
      <div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
