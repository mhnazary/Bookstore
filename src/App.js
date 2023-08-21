import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/bookList';
import Catagories from './catagories/catagories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
