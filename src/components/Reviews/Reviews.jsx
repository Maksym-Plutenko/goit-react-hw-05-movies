// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import apiserver from '../../utilites/apiserver';

import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(id) {
      const response = await apiserver.rewiews(id);
      setReviews(response);
    }

    getReviews(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li className={css.item} key={review.id}>
              <h3 className={css.author}>Author: {review.author}</h3>
              <p className={css.review}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noreview} >We don't have any review for this film.</p>
      )}
    </div>
  );
};

export default Reviews;
