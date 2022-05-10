/**
 * This file contains the function CreateTeam that returns the render for the
 * create team page. It fetches data from the Perfect Team API and implements
 * the UI for customizing a team, adding a salary cap, quick adding a team, and
 * display win prediction feature.
 */
import React, { useCallback, useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Card, Alert } from 'react-bootstrap';
import QuickAdd from './../components/QuickAdd';

type Player = {
  id: string,
  Rk: number,
  Player: string,
  age: number,
  WS: string,
  salary: string,
  projSalary: string,
  playerTeam: string,
}

function CreateTeam(props : any) {
  const players = props.data.map((obj : Player) => (obj.Player).substring(0, obj.Player.indexOf('\\')));
  const [input, setInput] = useState<string>('');
  const [ptNames, setPTNames] = useState<string[]>([]);
  const [ptTeamRks, setPTRks] = useState<number[]>([]);
  const [totalSalary, setTotalSalary] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [modalShow, setModalShow] = React.useState(false);

  // Base URL for Perfect Team API
  // const API_URL = 'https://perfect-team-api.herokuapp.com/';
  const API_URL = 'http://localhost:4567/';

  // Updates stored value of player search bar input
  const inputChangeHandler = (event : React.ChangeEvent) => {
    setInput((event?.target as HTMLInputElement)?.value);
  }

  // Adds a player to the team
  const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    let player : string = (document.getElementById('player-search') as HTMLInputElement)?.value;
    let regex = new RegExp(players.join('|'),'i');
    if (ptNames.includes(player)) {
      // Shows alert for duplicate player
      (document.getElementById('input-alert-duplicate') as HTMLElement).hidden = false;
      (document.getElementById('input-alert') as HTMLElement).hidden = true;
    } else if (player !== '' && regex.test(player)) {
      // Hides all alerts
      (document.getElementById('input-alert') as HTMLElement).hidden = true;
      (document.getElementById('input-alert-duplicate') as HTMLElement).hidden = true;

      // Gets player info from data
      let p : Player[] = props.data.filter((obj : Player) => {
        return obj.Player.includes(player);
      });
      let playerInfo : (Player | null) = p.length > 0 ? p[0] : null;
      if (playerInfo !== null) {
        // Adds player name, rank, and salary to current team
        let name = (playerInfo.Player).substring(0, playerInfo.Player.indexOf('\\'));
        let rank = playerInfo.Rk;
        let salary = parseInt(playerInfo.salary.substring(1));
        setPTNames(arr => [...arr, name]);
        setPTRks(arr => [...arr, rank]);
        setTotalSalary(totalSalary + salary);
        setInput('');
      } else {
        // Shows alert for invalid NBA player
        (document.getElementById('input-alert') as HTMLElement).hidden = false;
        (document.getElementById('input-alert-duplicate') as HTMLElement).hidden = true;
      }
    } else {
      // Shows alert for invalid NBA player
      (document.getElementById('input-alert') as HTMLElement).hidden = false;
      (document.getElementById('input-alert-duplicate') as HTMLElement).hidden = true;
    }
  }

  // Updates team list
  let teamList = ptNames.map((player) => {
    // Disables add button and shows create team button when the team has 12 players
    const createButton = document.getElementById('create-team-btn') as HTMLButtonElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;
    const searchBar = document.getElementById('player-search') as HTMLInputElement;
    if (createButton != null && addButton != null && ptNames.length === 12) {
      createButton.hidden = false;
      addButton.disabled = true;
      searchBar.disabled = true;
    }
    return (<li key={players.indexOf(player)} className='player-name'>{player}</li>)
  });

  // Creates player cards
  let playerCards = ptNames.map((player) => {
    return (
      <Card className="text-center player-card border-0">
        <Card.Body>
          <span className="material-icons md-100">person</span>
          <Card.Text>{player}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  // Handles getting win prediction and luxury tax values from API
  const submitTeamHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    fetch(API_URL + 'team/get/team/' + ptTeamRks.join(','))
      .then(statusCheck)
      .then(res => res.json())
      .then(updateStats)
      .catch(console.error);
  }

  // Checks the status of request
  async function statusCheck(res : Response) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  // Updates the win prediction and luxury tax values
  function updateStats(res : any) {
    setScore(res.score);
    setTax(res.luxuryTax);
  }

  const updateTeamNames = useCallback((val : string[]) => {
    setPTNames(val);
  }, [setPTNames]);

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
      <Alert variant='warning' hidden={true} id='input-alert'>Please enter a valid NBA player.</Alert>
      <Alert variant='warning' hidden={true} id='input-alert-duplicate'>Please enter another NBA player that is not already included in your current team.</Alert>
      <Button variant="primary" onClick={() =>setModalShow(true)} id='quick-add-btn'>Quick Add NBA Team</Button>
      <QuickAdd
        show={modalShow}
        onHide={() => setModalShow(false)}
        parentTeamNamesSetter={updateTeamNames}
      />
      <Container id='team-container'>
        <Row>
          <Col sm={4} id='player-list'>
            <p><b>Current Team</b></p>
            <ol>
              {teamList}
            </ol>
            <Button variant='primary' data-testid='create-team-btn' id='create-team-btn' hidden={true} onClick={submitTeamHandler}>Create Team!</Button>
          </Col>
          <Col sm={8} id='team'>
            <Row id='team-stats'>
              <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                <p><b>Win Prediction:</b> {score}</p>
                <p><b>Salary:</b> ${totalSalary}</p>
                <p><b>Luxury Tax:</b> ${tax}</p>
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
