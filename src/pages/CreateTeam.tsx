import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

function CreateTeam(props : any) {

  const [state, setState] = useState(props.data);

  const getInputValue = () => {

  }

  const createPlayerCard = () => {

  }

  // renders create team page
  return (
    <div className='create-team-container'>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Enter player name'
          aria-label='Enter player name'
          id='player-search'
        />
        <InputGroup.Append>
          <Button variant='secondary'>Add Player</Button>
        </InputGroup.Append>
      </InputGroup>
      <Container id='team-container'>
        <Row id='team-container-row'>
          <Col sm={4} id='player-list'>
            <p>Current Team:</p>
          </Col>
          <Col sm={8} id='player-cards'>
          <Container>
            <Row id='team-stats'>
              stats
            </Row>
          </Container>
          </Col>
        </Row>
      </Container>
      <p></p>
    </div>
  );
}

export default CreateTeam;
