import { Dropdown } from 'react-bootstrap';
import { Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Dropdown id="dropdown">
        <Dropdown.Toggle id="dropdown-basic">
          menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li> <NavLink className="menuLinks" to="/">Home</NavLink> </li>
          <Dropdown.Item><NavLink className="menuLinks" to="/createteam">Create Team</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink className="menuLinks" to="/games">Games</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink className="menuLinks" to="/teams">Teams</NavLink></Dropdown.Item>
          <Dropdown.Item><NavLink to="/players">Players</NavLink></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Navbar>
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
