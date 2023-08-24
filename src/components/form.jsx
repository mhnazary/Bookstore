import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, postBook } from '../redux/books/booksSlice';
import '../index.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const submit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Undefined',
    };

    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="form p-4">
      <h3 className="book-title font-bold text-2xl mb-4 text-gray-400">Add new book</h3>
      <form onSubmit={submit}>
        <input
          className="border border-gray-400 w-1/2 mr-8"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border border-gray-400 w-3/12 mr-8 px-4"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="form-btn rounded-sm bg-blue px-12 py-3" id="addBtn">Add Book</button>
      </form>
    </div>
  );
};
export default Form;
