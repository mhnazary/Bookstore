import Navbar from './Navbar';
import Book from './books';

function BookList() {
  return (
    <>
      <Navbar />
      <div className="">
        <Book title="Alone man" author="Mahram Hossain" />
        <Book title="Alone woman" author="Khadim Hossain" />
        <Book title="Vocabulary Power 1" author="Ali Hossain" />
      </div>
    </>
  );
}

export default BookList;
