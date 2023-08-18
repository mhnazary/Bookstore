import Navbar from './Navbar';
import Book from './books';
import Form from './form';

function BookList() {
  return (
    <>
      <Navbar />
      <div className="">
        <Book title="Alone man" author="Mahram Hossain" />
        <Book title="Alone woman" author="Khadim Hossain" />
        <Book title="Vocabulary Power 1" author="Ali Hossain" />
      </div>
      <Form />
    </>
  );
}

export default BookList;
