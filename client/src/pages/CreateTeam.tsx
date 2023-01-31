/**
 * This file contains the function CreateTeam that returns the render for the
 * create team page. It fetches data from the Perfect Team API and implements
 * the UI for customizing a team, adding a salary cap, quick adding a team, and
 * display win prediction feature.
 */

import React, { useCallback, useState, MouseEvent, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Alert, Table } from 'react-bootstrap';
import SearchBar from './../components/SearchBar';
import QuickAdd from './../components/QuickAdd';
import ErrorBoundary from './../components/ErrorBoundary';
import SalaryEditor from './../components/SalaryEditor';

// Interface for an NBA player
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
  const players = props.data;   // Array of all players
  const [input, setInput] = useState<string>('');   // Stores user input
  const [team, setTeam] = useState<Player[]>([]);   // Stores current team
  const [totalSalary, setTotalSalary] = useState<number>(0);    // Stores total salary
  const [score, setScore] = useState<number>(0);    // Stores team win prediction score
  const [tax, setTax] = useState<number>(-1);   // Stores team luxury tax
  const [modalShowQA, setModalShowQA] = useState<boolean>(false);   // Quick add modal visibility state
  const [editing, setEditing] = useState<boolean>(false);   // Salary editor modal visibility state
  const [salaryVal, setSalaryValue] = useState<number>(112400000);  // Stores salary cap value
  const [suggestedTeam, setSuggestedTeam] = useState<string>('');   // Stores the suggested team

  // Get buttons
  const createButton = document.getElementById('create-team-btn') as HTMLButtonElement;
  const addButton = document.getElementById('add-btn') as HTMLButtonElement;
  const clearButton = document.getElementById('clear-team-btn') as HTMLButtonElement;
  const quickAddButton = document.getElementById('quick-add-btn') as HTMLButtonElement;
  const editButton = document.getElementById('salary-btn') as HTMLButtonElement;

  // Base URL for Perfect Team API
  const API_URL = 'https://perfect-team-api.onrender.com/';
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

    if (team.map((p : Player) => p.Player).includes(player)) {
      // Shows alert for duplicate player
      warningDuplicate.hidden = false;
      warning.hidden = true;
    } else if (player !== '' && regex.test(player)) {
      // Hides all alerts
      warning.hidden = true;
      warningDuplicate.hidden = true;

      // Gets player info from data
      let playerInfo : Player = props.data.filter((obj : Player) => obj.Player === player)[0];

      if (playerInfo.hasOwnProperty('salary')) {
        // Adds salary to current team
        let salary = parseInt(playerInfo.salary);
        setTotalSalary(totalSalary + salary);
      }
      // Adds player to the current team
      setTeam(arr => [...arr, playerInfo]);
    } else {
      // Shows alert for invalid NBA player
      warning.hidden = false;
      warningDuplicate.hidden = true;
    }
    setInput('');
  }

  // Removes a single player from the current team
  const removePlayer = (e : MouseEvent) => {
    let player = e.currentTarget.id;
    // Removes player from current team
    setTeam(team.filter((p : Player) => p.Player !== player));

    let playerInfo : Player = props.data.filter((obj : Player) => obj.Player === player)[0];

    if (playerInfo.hasOwnProperty('salary')) {
      // Removes salary from current team
      let salary = parseInt(playerInfo.salary);
      setTotalSalary(totalSalary - salary);
    }
    setScore(0);
    setTax(-1);
  }

  // Updates team list
  let teamList = team.map((player, i) => {
    // Disables add button and shows create team button when the team has 12 players
    if (team.length === 12) {
      createButton.hidden = false;
      addButton.disabled = true;
      clearButton.hidden = false;
      quickAddButton.disabled = true;
      editButton.disabled = true;
    } else {
      createButton.hidden = true;
      addButton.disabled = false;
      clearButton.hidden = true;
      quickAddButton.disabled = false;
      editButton.disabled = false;
    }
    // Return the render of a single player
    return (
      <tr id={i.toString()}>
        <td>{i + 1}.</td>
        <td> {player.Player}</td>
        <td className='clr-player-btn'>
          <Button variant='outline-light' size='sm' id={player.Player} onClick={removePlayer}>
            <span className="material-symbols-outlined">close</span>
          </Button>
        </td>
      </tr>
    )
  });

  // Creates player cards
  let playerCards = team.map((player) => {
    return (
      <Card className="text-center player-card border-0">
        <Card.Body>
          <img src={require('./../assets/' + player.playerTeam.replace(/ /g,"-") + '.png').default} alt='' className='player-img'/>
          <Card.Text>{player.Player}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  // Handles getting win prediction and luxury tax values from API
  const submitTeamHandler = (event : MouseEvent) => {
    event.preventDefault();
    let ranks : number[] = team.map((p : Player) => p.Rk);
    fetch(API_URL + 'team/' + ranks.join(',') + '/' + salaryVal.toString())
      .then(statusCheck)
      .then(res => res.json())
      .then(checkError)
      .then(updateStats)
      .catch(console.error);
  }

  // Check if the API returns an error
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

  // Updates current team player ranks
  const updateTeam = useCallback((val : Player[]) => {
    setTeam(val);
  }, [setTeam]);

  // Updates current team salary
  const updateSalary = useCallback((val : number) => {
    setTotalSalary(val);
  }, [setTotalSalary]);

  // Handles salary edit text
  const handleSave = useCallback((value : number) => {
    setSalaryValue(value);
  }, [setSalaryValue]);

  // Handles clearing current team and reseting buttons
  const clearTeamHandler = (event : MouseEvent) => {
    setTeam([]);
    setTotalSalary(0);
    setScore(0);
    setTax(-1);

    createButton.hidden = true;
    addButton.disabled = false;
    clearButton.hidden = true;
    quickAddButton.disabled = false;
    editButton.disabled = false;
  }

  // Handles getting the suggested quick add team from the API
  const addSuggestedTeam = (event : MouseEvent) => {
    fetch(API_URL + 'quickadd/' + suggestedTeam + '?players=' + team.map((p : Player) => p.Rk))
      .then(statusCheck)
      .then(res => res.json())
      .then(updateQATeam)
      .catch(console.error);
  }

  // Updates the current team based on the returns quick add team
  function updateQATeam(res : any) {
    let salary : number = 0;
    res.forEach((obj : Player) => {
      salary = obj.hasOwnProperty('salary') ? salary + parseInt(obj.salary) : salary;
    });

    setTeam(res);
    setTotalSalary(salary);
  }

  // Checks whether a team should be suggested
  useEffect(() => {
    let msg = document.getElementById('team-suggestion-msg') as HTMLElement;

    if (team.length === 3) {
      let currTeams = team.map((p : Player) => p.playerTeam);

      // Check if all 3 players are from the same NBA team
      if (currTeams.filter((t, index, self) => {
          return self.indexOf(t) === index;
        }).length === 1) {
          setSuggestedTeam(currTeams[0]);
          msg.hidden = false;
      }
    } else {
      msg.hidden = true;
    }
  }, [team]);

  // Renders create team page
  return (
    <div className='create-team-container' data-testid='create-team-container'>
      {/* Container for the search bar, add player button, and input warnings and messages */}
      <Container id='search-container'>
        <Row id='search-bar-inputs'>
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
        </Row>
        <Row>
          <Alert variant='warning' hidden={true} id='input-alert' data-testid='input-alert' className='warning'>Please enter a valid NBA player.</Alert>
          <Alert variant='warning' hidden={true} id='input-alert-duplicate'data-testid='input-alert-duplicate' className='warning'>Please enter another NBA player that is not already included in your current team.</Alert>
          <Alert variant='danger' hidden={true} id='input-alert-error' data-testid='input-alert-error' className='warning'>Sorry, an error has occurred with the API. Please try to create a team later.</Alert>
          <Alert variant='primary' hidden={true} id='team-suggestion-msg' data-testid='team-suggestion-msg' className='warning'>
            Would you like to quick add the {<b>{suggestedTeam}</b>} team?
            <Button variant='primary' onClick={addSuggestedTeam} id='suggested-btn'>Yes!</Button>
          </Alert>
        </Row>
      </Container>
      <div id='create-team-content'>
        <ErrorBoundary>
          <QuickAdd
            show={modalShowQA}
            onHide={() => setModalShowQA(false)}
            parentSalarySetter={updateSalary}
            parentTeamSetter={updateTeam}
            data={props.teamData}
          />
        </ErrorBoundary>
        {/* Container for the current team information */}
        <Container id='team-container'>
          <Row>
            <Button variant='primary' onClick={() => setModalShowQA(true)} id='quick-add-btn'>Quick Add NBA Team</Button>
          </Row>
          <Row>
            {/* Player name list of the current team */}
            <Col sm={4} id='player-list' data-testid='player-list'>
              <p><b>Current Team</b></p>
              <Table id='player-list-table' data-testid='player-list-table' borderless={true}>
                <tbody>
                  {teamList}
                </tbody>
              </Table>
              <Row id='team-btns'>
                <Button variant='primary' data-testid='create-team-btn' id='create-team-btn' hidden={true} onClick={submitTeamHandler}>Create Team!</Button>
                <Button variant='secondary' data-testid='clear-team-btn' id='clear-team-btn' hidden={true} onClick={clearTeamHandler}>Clear Team</Button>
              </Row>
            </Col>
            <Col sm={8} id='team'>
              {/* Team statistics information */}
              <Row id='team-stats'>
                <Table id='stats-table' data-testid='stats-table' borderless={true}>
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
                      <td>${salaryVal.toLocaleString()}</td>
                      <td>
                        <Button variant='light' size='sm' onClick={() =>setEditing(true)} id='salary-btn'>Edit</Button>
                        <ErrorBoundary>
                          <SalaryEditor
                            show={editing}
                            onHide={() => setEditing(false)}
                            parentSave={handleSave}
                            salary={salaryVal}
                          />
                        </ErrorBoundary>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              {/* Grid of player images */}
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
