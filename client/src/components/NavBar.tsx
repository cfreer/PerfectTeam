/**
 * This file contains the function NavBar that returns the render for the
 * navigation bar displayed on all pages. It contains links to the different pages.
 */

import { Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Navbar className="justify-content-center" id='navbar-tabs'>
        <div id="navLinks">
          <ul className="ul-menu">
            <li><NavLink className="menuLinks" to="/">Home</NavLink></li>
            <li><NavLink className="menuLinks" to="/createteam">Create Team</NavLink></li>
            <li><NavLink className="menuLinks" to="/games">Games</NavLink></li>
            <li><NavLink className="menuLinks" to="/teams">Teams</NavLink></li>
            <li><NavLink className="menuLinks" to="/players">Players</NavLink></li>
          </ul>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar;
