/**
 * This file contains the function CreateTeamBtn that returns the render for the
 * create team button. The button links to the create team page on an onClick event.
 */
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateTeamBtn() {
  return (
    <Link to="/createteam">
      <Button variant='primary' data-testid='create-team-btn'>Create a Team!</Button>
    </Link>
  );
}


export default CreateTeamBtn;