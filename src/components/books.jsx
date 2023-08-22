import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ title, author }) => (
  <div className="public-class">
    <div className="book">
      <div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
      <button type="button" className="button" id="deleteBttn">Remove</button>
    </div>
    <div className="progress">
      <h2>Current Chapter</h2>
      <h2>Chapter 21</h2>
      <button type="button">Update Progress</button>
    </div>
  </div>
);
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
