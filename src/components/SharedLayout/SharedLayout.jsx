import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
// import PropTypes from 'prop-types';

import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

// active

export default SharedLayout;
