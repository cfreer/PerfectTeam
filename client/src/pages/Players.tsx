/**
 * This file contains the information for the players page, and renders
 * a page that features a searchbar in which the user can input players and
 * revieve stats off that player, as well as team and salary
 */

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Row, Button, Card, Alert } from 'react-bootstrap';
import ErrorBoundary from '../components/ErrorBoundary';
import PlayerProfile from '../components/PlayerProfile';


// The interface for the Player and their stats
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

// This is the page that presents the player data
function Players(props : any) {
  const players = props.data;
  const [input, setInput] = useState<string>('');
  const [search, setSearch] = useState<boolean>(false);
  const [player, setPlayer] = useState<Player>({id : "", Rk : 0, Player : "", age : 0, WS : "", salary :  "", projSalary : "", playerTeam : "TOT"});

  // Handles the instance in which a player is submitted for search
  const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();

    let player : string = input;
    let regex = new RegExp(players.join('|'),'i');
    let warning = document.getElementById('input-alert') as HTMLElement;
    if (player !== '' && regex.test(player)) {
      // Hides all alerts
      warning.hidden = true;

      // Gets player info from data
      let playerInfo : Player = props.data.filter((obj : Player) => obj.Player === player)[0];
      console.log(playerInfo)
      if (playerInfo !== null) {
        console.log(playerInfo)
        setPlayer(playerInfo)
        setSearch(true);
      }
    } else {
      // Shows alert for invalid NBA player
      warning.hidden = false;
    }
  }

  // This is the object that presents the players information to the user as a
  // Card. Shows the rank, win share and current team, or TOT if they have been on
  // two teams in that season
  // Takes in an obj that is a player
  let playerCards = props.data.map((obj: Player) => {
    return (
      <Card className="text-center player-card-lg border-0">
        <Card.Body>
          <img src={require('./../assets/' + obj.playerTeam.replace(/ /g,"-") + '.png').default} alt='' className='player-img'/>
          <Card.Title>{obj.Player}</Card.Title>
          <Card.Text>
            <p><b>Win Shares:</b> {obj.WS}</p>
            <p><b>Team:</b> {obj.playerTeam}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

  // Handles the instance in which the input is changed
  // Takes in a string from the user
  const inputChangeHandler = (value : string) => {
    setInput(value);
  }

  // renders players page
  return (
    <div className='players-container' data-testid='players-container'>
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
        <ErrorBoundary>
          <PlayerProfile
            show={search}
            onHide={() => setSearch(false)}
            player={player}
          />
        </ErrorBoundary>
        <Button id='add-btn' data-testid='add-btn' variant='secondary' onClick={submitPlayerHandler} type='submit'>Search</Button>
      </div>
      <Alert variant='warning' hidden={true} id='input-alert' data-testid='input-alert'>Please enter a valid NBA player.</Alert>
      <Row id='player-cards' data-testid='player-cards'>
        {playerCards}
      </Row>
    </div>
  );
}

export default Players;
