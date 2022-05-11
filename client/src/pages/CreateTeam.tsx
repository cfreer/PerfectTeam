/**
 * This file contains the function CreateTeam that returns the render for the
 * create team page. It fetches data from the Perfect Team API and implements
 * the UI for customizing a team, adding a salary cap, quick adding a team, and
 * display win prediction feature.
 */
import React, { useCallback, useState } from 'react';
import { Container, Row, Col, Button, Card, Alert, Table } from 'react-bootstrap';
import SearchBar from './../components/SearchBar';
import QuickAdd from './../components/QuickAdd';
import ErrorBoundary from './../components/ErrorBoundary';

interface Player {
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
  const [tax, setTax] = useState<number>(-1);
  const [modalShow, setModalShow] = React.useState(false);

  // Base URL for Perfect Team API
  const API_URL = 'https://perfect-team-api.herokuapp.com/';
  // const API_URL = 'http://localhost:4567/';

  // Updates stored value of player search bar input
  const inputChangeHandler = (value : string) => {
    setInput(value);
  }

  // Adds a player to the team
  const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    let player : string = input;
    let regex = new RegExp(players.join('|'),'i');
    let warning = document.getElementById('input-alert') as HTMLElement;
    let warningDuplicate = document.getElementById('input-alert-duplicate') as HTMLElement;
    let warningSalary = document.getElementById('input-alert-salary') as HTMLElement;
    if (ptNames.includes(player)) {
      // Shows alert for duplicate player
      warningDuplicate.hidden = false;
      warning.hidden = true;
      warningSalary.hidden = true;
    } else if (player !== '' && regex.test(player)) {
      // Hides all alerts
      warning.hidden = true;
      warningDuplicate.hidden = true;
      warningSalary.hidden = true;

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
      } else {
        // Shows alert for invalid NBA player
        warning.hidden = false;
        warningDuplicate.hidden = true;
        warningSalary.hidden = true;
      }
    } else {
      // Shows alert for invalid NBA player
      warning.hidden = false;
      warningDuplicate.hidden = true;
      warningSalary.hidden = true;
    }
  }

  // Updates team list
  let teamList = ptNames.map((player) => {
    // Disables add button and shows create team button when the team has 12 players
    const createButton = document.getElementById('create-team-btn') as HTMLButtonElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;
    if (createButton != null && addButton != null && ptNames.length === 12) {
      createButton.hidden = false;
      addButton.disabled = true;
    }
    return (<li key={ptNames.indexOf(player)} className='player-name'>{player}</li>)
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
    fetch(API_URL + 'team/' + ptTeamRks.join(','))
      .then(statusCheck)
      .then(res => res.json())
      .then(checkError)
      .then(updateStats)
      .catch(console.error);
  }

  function checkError(res : any) {
    if (res.hasOwnProperty('status') && res.status === 'error') {
      let alert = document.getElementById('input-alert-error') as HTMLElement;
      alert.hidden = false;
    }
    return res;
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

  // Updates current team player names
  const updateTeamNames = useCallback((val : string[]) => {
    setPTNames(val);
  }, [setPTNames]);

  // Updates current team player ranks
  const updateTeamRks = useCallback((val : number[]) => {
    setPTRks(val);
  }, [setPTRks]);

  // Update current team salary
  const updateSalary = useCallback((val : number) => {
    setTotalSalary(val);
  }, [setTotalSalary]);

  // Renders create team page
  return (
    <div className='create-team-container' data-testid='create-team-container'>
      <div id='search-bar-inputs'>
        <div id='search' data-testid='search'>
          <SearchBar
            placeholder='Enter player name'
            aria-label='Enter player name'
            id='player-search'
            value={input}
            setInput={inputChangeHandler}
            data={props.data}
            />
        </div>
        <Button id='add-btn' data-testid='add-btn' variant='secondary' onClick={submitPlayerHandler} type='submit'>Add Player</Button>
      </div>
      <div id='create-team-content'>
        <Alert variant='warning' hidden={true} id='input-alert' data-testid='input-alert'>Please enter a valid NBA player.</Alert>
        <Alert variant='warning' hidden={true} id='input-alert-duplicate'data-testid='input-alert-duplicate'>Please enter another NBA player that is not already included in your current team.</Alert>
        <Alert variant='warning' hidden={true} id='input-alert-salary' data-testid='input-alert-salary'>Player's salary information is currently unavailable. Please enter another NBA player.</Alert>
        <Alert variant='danger' hidden={true} id='input-alert-error' data-testid='input-alert-error'>Sorry, an error has occurred with the API. Please try to create a team later.</Alert>
        <Button variant="primary" onClick={() =>setModalShow(true)} id='quick-add-btn'>Quick Add NBA Team</Button>
        <ErrorBoundary>
          <QuickAdd
            show={modalShow}
            onHide={() => setModalShow(false)}
            parentTeamNamesSetter={updateTeamNames}
            parentTeamRksSetter={updateTeamRks}
            parentSalarySetter={updateSalary}
            data={props.teamData}
          />
        </ErrorBoundary>
        <Container id='team-container'>
          <Row>
            <Col sm={4} id='player-list' data-testid='player-list'>
              <p><b>Current Team</b></p>
              <ol>
                {teamList}
              </ol>
              <Button variant='primary' data-testid='create-team-btn' id='create-team-btn' hidden={true} onClick={submitTeamHandler}>Create Team!</Button>
            </Col>
            <Col sm={8} id='team'>
              <Row id='team-stats'>
                <Table id='stats-table' data-testid='stats-table'>
                  <tbody>
                    <tr>
                      <td><b>Win Prediction:</b></td>
                      <td>{score === 0 ? '---' : (score * 100).toFixed(2) + '%' }</td>
                    </tr>
                    <tr>
                      <td><b>Luxury Tax:</b></td>
                      <td>{tax === -1 ? '---' : (tax === 0 ? 'None' : '$' + tax.toLocaleString())}</td>
                    </tr>
                    <tr>
                      <td><b>Salary:</b></td>
                      <td>${totalSalary.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td><b>Salary Cap:</b></td>
                      <td>$112,400,000</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row id='player-cards' data-testid='player-cards'>
                {playerCards}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default CreateTeam;
