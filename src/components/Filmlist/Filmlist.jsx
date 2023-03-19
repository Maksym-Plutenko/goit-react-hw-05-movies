import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const Filmlist = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/${film.id}`} state={location}>{film.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

Filmlist.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Filmlist;
