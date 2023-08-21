import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button type="button" className="rm-button" id="deleteBtn">
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
