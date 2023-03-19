// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';
import Filmlist from '../../components/Filmlist/Filmlist'


const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTrending() {
      const response = await apiserver.trending();
      setFilms(response);
    }
    getTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <Filmlist films={films}/>
    </>
  );
};

export default Home;
