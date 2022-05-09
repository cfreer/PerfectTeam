import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

function CreateTeam(props : any) {

  const [state, setState] = useState(props.data);
  const [input, setInput] = useState<string>('');
  const [newPlayer, setNewPlayer] = useState<string>('');
  const [team, setTeam] = useState<string[]>([]);

  const inputChangeHandler = (event : React.ChangeEvent) => {
    setInput((event?.target as HTMLInputElement)?.value);
    setNewPlayer(input);
  }

  const submitHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    if (input !== '') {
      // let player : string = (document.getElementById('player-search') as HTMLInputElement)?.value;
      setTeam(arr => [...arr, newPlayer]);
      console.log(team);
      setInput('');
    }

  }

  let teamList = team.map((player) => {
    return (<li>{player}</li>)
  });

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
          <Button variant='secondary' onClick={submitHandler} type='submit'>Add Player</Button>
        </InputGroup.Append>
      </InputGroup>
      <Container id='team-container'>
        <Row>
          <Col sm={4} id='player-list'>
            <p><b>Current Team</b></p>
            <ol>
              {teamList}
            </ol>
          </Col>
          <Col sm={8} id='team'>
            <Row id='team-stats'>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <p><b>Win Prediction:</b> {props.prediction}</p>
                <p><b>Salary:</b> {props.salary}</p>
                <p><b>Luxury Tax:</b> {props.tax}</p>
                <p><b>Salary Cap:</b> {props.salaryCap}</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <p></p>
    </div>
  );
}

export default CreateTeam;
