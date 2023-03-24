import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  const from = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (!from.current) {
      if (location.state) {
        from.current = location.state;
      } else {
        from.current = '/';
      }
    }
  }, [location.state]);

  useEffect(() => {
    async function getDetails(id) {
      const response = await apiserver.details(id);
      setDetails(response);
    }

    getDetails(movieId);
  }, [movieId]);

  const { poster_path, original_title, popularity, overview, genres } = details;

  return (
    <section>
      <Link className={css.back} to={from.current}>
        Go back
      </Link>
      <div className={css.container}>
        {poster_path ? (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="film poster"
          />
        ) : (
          <img
            src="https://c1.wallpaperflare.com/preview/136/62/471/page-not-found-light-shadow-hotel-thumbnail.jpg"
            alt="poster not found"
          />
        )}
        <div>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.info}>User Score: {popularity}</p>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.info}>{overview}</p>
          <h3 className={css.subtitle}>Genres</h3>
          {genres && (
            <p className={css.info}>
              {genres.map((genre, index, array) =>
                index + 1 === array.length ? genre.name : genre.name + ', '
              )}
            </p>
          )}
        </div>
      </div>
      <div className={css.additional}>
        <p className={css.additional_title}>Additional information</p>
        <ul>
          <li className={css.item}>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
