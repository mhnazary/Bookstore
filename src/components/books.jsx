import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../index.css';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <section className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button
        type="button"
        className="button border border-black rounded-sm flex justify-center items-start pb-1 mt-2 text-blue"
        id="deleteBttn"
        onClick={handleRemoveBook}
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
