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

  let message = '';
  if (seachRequest) {
    message = 'We cannot find any film with such name.';
  }

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
    evt.preventDefault();

    setSeachParam({ request });
    setRequest('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          onChange={onChange}
          value={request}
        />
        <button className={css.button} type="submit">
          Seach
        </button>
      </form>

      {films.length > 0 ? (
        <Filmlist films={films} />
      ) : (
        <p className={css.nofilm}>{message}</p>
      )}
    </div>
  );
};

export default Movies;
