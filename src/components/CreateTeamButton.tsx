import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateTeamBtn() {
  return(
    <Link to="/createteam">
      <Button color='primary' data-testid='create-team-btn'>Create a Team!</Button>
    </Link>
  );
}


export default CreateTeamBtn;