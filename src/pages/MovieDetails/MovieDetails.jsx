import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  // console.log(movieId);

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
      <p>Go back</p>
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
