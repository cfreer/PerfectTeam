/**
 * This file contains the function CreateTeam that returns the render for the
 * create team page. It fetches data from the Perfect Team API and implements
 * the UI for customizing a team, adding a salary cap, quick adding a team, and
 * display win prediction feature.
 */
import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Card } from 'react-bootstrap';

function CreateTeam(props : any) {

  const [input, setInput] = useState<string>('');
  const [team, setTeam] = useState<string[]>([]);

  //
  const inputChangeHandler = (event : React.ChangeEvent) => {
    setInput((event?.target as HTMLInputElement)?.value);
  }

  // Add a player to the team
  const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    let player : string = (document.getElementById('player-search') as HTMLInputElement)?.value;
    if (player !== '') {
      setTeam(arr => [...arr, player]);
      setInput('');
    }
  }

  // Update team list
  let teamList = team.map((player) => {
    // Disable add button and show create team button when the team has 12 players
    const createButton = document.getElementById('create-team-btn') as HTMLButtonElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;
    if (createButton != null && addButton != null && team.length === 12) {
      createButton.hidden = false;
      addButton.disabled = true;
    }
    return (<li>{player}</li>)
  });

  let playerCards = team.map((player) => {
    return (
      <Card className="text-center player-card border-0">
        <Card.Body>
          <span className="material-icons md-100">person</span>
          <Card.Text>{player}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  const submitTeamHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    let player : string = (document.getElementById('player-search') as HTMLInputElement)?.value;
    if (player !== '') {
      setTeam(arr => [...arr, player]);
      setInput('');
    }
  }

  // renders create team page
  return (
    <div className='create-team-container' data-testid='create-team-container'>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Enter player name'
          aria-label='Enter player name'
          id='player-search'
          value={input}
          onChange={inputChangeHandler}
        />
        <InputGroup.Append>
          <Button id='add-btn' variant='secondary' onClick={submitPlayerHandler} type='submit'>Add Player</Button>
        </InputGroup.Append>
      </InputGroup>
      <Container id='team-container'>
        <Row>
          <Col sm={4} id='player-list'>
            <p><b>Current Team</b></p>
            <ol>
              {teamList}
            </ol>
            <Button variant='primary' data-testid='create-team-btn' id='create-team-btn' hidden={true} onClick={submitTeamHandler}>Create a Team!</Button>
          </Col>
          <Col sm={8} id='team'>
            <Row id='team-stats'>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <p><b>Win Prediction:</b> {props.prediction}</p>
                <p><b>Salary:</b> {props.salary}</p>
                <p><b>Luxury Tax:</b> {props.tax}</p>
                <p><b>Salary Cap:</b> $112400000</p>
              </div>
            </Row>
            <Row id='player-cards'>
              {playerCards}
            </Row>
          </Col>
        </Row>
      </Container>
      <p></p>
    </div>
  );
}

export default CreateTeam;
