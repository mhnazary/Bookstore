import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>BookSore CMS</h1>
      <ul>
        <li>
          <NavLink to="/"> Books </NavLink>
        </li>
        <li>
          <NavLink to="/catagories"> Catagories </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
