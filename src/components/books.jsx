import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBooks = () => {
    dispatch(removeBook(id));
  };

  return (
    <section className="book">
      <div>
        <h3 className="bTitle">{title}</h3>
        <p className="bAuthor">{author}</p>
      </div>
      <button
        type="button"
        className="button"
        id="deleteBttn"
        onClick={handleRemoveBooks}
      >
        Remove
      </button>
    </section>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
