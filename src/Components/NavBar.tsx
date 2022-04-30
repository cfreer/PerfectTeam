import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// const navbar = () => {
//     return (
//         <div>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/">Create a Team</Link>
//             </li>
//             <li>
//                 <Link to="/">Games</Link>
//             </li>
//             <li>
//                 <Link to="/">Teams</Link>
//             </li>
//             <li>
//                 <Link to="/">Players</Link>
//             </li>
//         </div>
//     )
// }

function NavBar() {
  return (
    <div>
      <header>
        <h1><NavLink to="/">Kilim</NavLink></h1>
      </header>
      <Dropdown id="dropdown">
        <Dropdown.Toggle id="dropdown-basic">
          menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item> <NavLink className="menuLinks" to="/">Home</NavLink> </Dropdown.Item>
          <Dropdown.Item> <NavLink className="menuLinks" to="/author">Featured Authors</NavLink></Dropdown.Item>
          <Dropdown.Item> <NavLink className="menuLinks" to="/about">About Us</NavLink></Dropdown.Item>
          <Dropdown.Item> <NavLink className="menuLinks" to="/profile">Profile</NavLink></Dropdown.Item>
          <Dropdown.Item> <NavLink to="/Login">Sign Up/Login</NavLink></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Navbar>
        <div id="navLinks">
          <ul className="ul-menu">
            <li><NavLink className="menuLinks" to="/">Home</NavLink></li>
            <li><NavLink className="menuLinks" to="/author">Featured Authors</NavLink></li>
            <li><NavLink className="menuLinks" to="/about">About Us</NavLink></li>
            <li><NavLink className="menuLinks" to="/login">Profile</NavLink></li>
          </ul>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar;