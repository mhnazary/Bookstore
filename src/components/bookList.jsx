import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import Book from './books';

const BookList = () => {
  const BK = useSelector((state) => Object.values(state.BK).flatMap((bookArray) => bookArray));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (BK.length === 0) {
    return <p>Add some books</p>;
  }

  return (
    <>
      <div>
        {BK.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </>
  );
};

export default BookList;
