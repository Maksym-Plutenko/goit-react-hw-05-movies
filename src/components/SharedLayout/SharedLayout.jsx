import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
