import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Row, Button, Card, Alert } from 'react-bootstrap';

interface Player {
  id: string,
  Rk: string,
  Player: string,
  age: number,
  WS: string,
  salary: string,
  projSalary: string,
  playerTeam: string,
}

function Players(props : any) {
  const players = props.data.map((obj : Player) => (obj.Player).substring(0, obj.Player.indexOf('\\')));
  const [input, setInput] = useState<string>('');
  // const [player, setPlayer] = useState<Player | null>(null);

  const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();

    let player : string = input;
    let regex = new RegExp(players.join('|'),'i');
    let warning = document.getElementById('input-alert') as HTMLElement;
    if (player !== '' && regex.test(player)) {
      // Hides all alerts
      warning.hidden = true;

      // Gets player info from data
      let p : Player[] = props.data.filter((obj : Player) => {
        return obj.Player.includes(player);
      });
      let playerInfo : (Player | null) = p.length > 0 ? p[0] : null;
      if (playerInfo !== null) {
        // setPlayer(playerInfo);
      }
    } else {
      // Shows alert for invalid NBA player
      warning.hidden = false;
    }
  }

  let playerCards = props.data.map((obj: Player) => {
    return (
      <Card className="text-center player-card-lg border-0">
        <Card.Body>
          <span className="material-icons md-100">person</span>
          <Card.Title>{(obj.Player).substring(0, obj.Player.indexOf('\\'))}</Card.Title>
          <Card.Text>
            <p><b>Rank:</b> {obj.Rk}</p>
            <p><b>Win share:</b> {obj.WS}</p>
            <p><b>Team:</b> {obj.playerTeam}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });

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
      <Button id='add-btn' data-testid='add-btn' variant='secondary' onClick={submitPlayerHandler} type='submit'>Search Player</Button>
      </div>
      <Alert variant='warning' hidden={true} id='input-alert' data-testid='input-alert'>Please enter a valid NBA player.</Alert>
      <Row id='player-cards' data-testid='player-cards'>
        {playerCards}
      </Row>
    </div>
  );
}

export default Players;
