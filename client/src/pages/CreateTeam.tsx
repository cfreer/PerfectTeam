import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

function CreateTeam(props : any) {

  const [state, setState] = useState(props.data);
  const [input, setInput] = useState<string>('');
  const [newPlayer, setNewPlayer] = useState<string>('');
  const [team, setTeam] = useState<string[]>([]);

  const createPlayerCard = () => {

  }

  const inputChangeHandler = (event : React.ChangeEvent) => {
    setInput((event?.target as HTMLInputElement)?.value);
    setNewPlayer(input);
  }

  const submitHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    // let player : string = (document.getElementById('player-search') as HTMLInputElement)?.value;
    setTeam(arr => [...arr, newPlayer]);
    console.log(team);
    setInput('');
  }

  function createTeamList() {
    console.log(team);
    return (
      <ol>
         {team.map((p) =>
           <li>{p}</li>
         )}
      </ol>
    )
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
          <Button variant='secondary' onClick={submitHandler} type='submit'>Add Player</Button>
        </InputGroup.Append>
      </InputGroup>
      <Container id='team-container'>
        <Row id='team-container-row'>
          <Col sm={4} id='player-list'>
            <p className='section-title'>Current Team</p>
            {createTeamList()}
          </Col>
          <Col sm={8} id='player-cards'>
          <Container>
            <Row id='team-stats'>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <p className='section-title'>Win/Loss Prediction: </p>{props.prediction}
                <p className='section-title'>Salary: </p>{props.salary}
                <p>{props.genre}</p>
              </div>
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
