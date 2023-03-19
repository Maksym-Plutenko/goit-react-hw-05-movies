import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Filmlist = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

Filmlist.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Filmlist;
