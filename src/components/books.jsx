import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import logo from './Logo.png';

const Book = ({ id, title, author }) => {
  const [change, setChange] = useState(15);
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };
  function handleChange() {
    setChange(change + 1);
  }

  return (
    <section className="book flex flex-row justify-between">
      <div className="book-right-part w-1/2 flex flex-col justify-evenly">
        <div>
          <h3 className="book-title font-serif font-bold text-xl mb-1">{title}</h3>
          <p className="book-author text-sm font-serif text-blue font-extralight">{author}</p>
        </div>
        <div className="flex justify-evenly w-1/2 items-center text-blue font-serif text-base mt-1">
          <a href="###" onClick={handleRemoveBook}>
            commens
          </a>
          <a href="###" onClick={handleRemoveBook}>
            remove
          </a>
          <a href="###" onClick={handleRemoveBook}>
            edit
          </a>
        </div>
      </div>
      <div className="book-left-part flex justify-start w-1/2">
        <div className="w-1/2 p-2">
          <img src={logo} alt="percent" />
        </div>
        <div className="w-1/2 mt-4">
          <h1 className="font-serif text-gray-400">Current Chapter</h1>
          <h1 className="font-serif mt-2">
            Chapter
            <span> </span>
            {change}
          </h1>
          <button
            className="bg-blue px-6 py-2 text-white rounded-sm mt-3 text-sm font-serif"
            type="button"
            onClick={handleChange}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </section>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
