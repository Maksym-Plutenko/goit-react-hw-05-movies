// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast(id) {
      const response = await apiserver.cast(id);
      setCast(response);
    }

    getCast(movieId);
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li className={css.item} key={actor.id}>
          {actor.profile_path ? (
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={`${actor.name}`}
              
            />
           ) : <img className={css.img} src="https://freesvg.org/img/1367934593.png" alt="not found" />  } 
          <p className={css.name}>{actor.name}</p>
          <p className={css.character}>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
