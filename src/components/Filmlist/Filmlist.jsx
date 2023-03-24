import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import css from './Filmlist.module.css';

const Filmlist = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <li className={css.item} key={film.id}>
          <NavLink
            className={css.link}
            to={`/movies/${film.id}`}
            state={location}
          >
            {film.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Filmlist.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Filmlist;
