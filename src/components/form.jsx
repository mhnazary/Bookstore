import React from 'react';
import './style.css';

const Form = () => (
  <div className="form">
    <h1 className="book-title">ADD NEW BOOK</h1>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="button" className="form-btn" id="addBttn">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
