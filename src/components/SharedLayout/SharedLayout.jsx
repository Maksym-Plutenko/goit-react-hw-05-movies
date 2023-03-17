import { Outlet, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

// active

export default SharedLayout;
