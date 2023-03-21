// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';
import Filmlist from '../../components/Filmlist/Filmlist';

import css from './Movies.module.css';

const Movies = () => {
  const [request, setRequest] = useState('');
  const [films, setFilms] = useState([]);
  const [seachParam, setSeachParam] = useSearchParams({});
  const seachRequest = seachParam.get('request');

  useEffect(() => {
    async function filmSeach(request) {
      const response = await apiserver.seach(request);
      setFilms(response);
    }

    if (seachRequest) {
      filmSeach(seachRequest);
    }
  }, [seachRequest]);

  const onChange = evt => {
    setRequest(evt.currentTarget.value);
  };

  const onSubmit = evt => {
    // async function filmSeach(request) {
    //   const response = await apiserver.seach(request);
    //   setFilms(response);
    // }

    evt.preventDefault();
    // filmSeach(request);
    setSeachParam({request});
    setRequest('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={request} />
        <button type="submit">Seach</button>
      </form>
      <Filmlist films={films} />
    </div>
  );
};

export default Movies;
