import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Container, Row, Col, Button, Card, Alert, Table } from 'react-bootstrap';

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


   const submitPlayerHandler = (event : React.MouseEvent) => {
    event.preventDefault();
    let player : string = input;
    let regex = new RegExp(players.join('|'),'i');

      // Gets player info from data
      let p : Player[] = props.data.filter((obj : Player) => {
        return obj.Player;
      });
      let playerInfo : (Player | null) = p.length > 0 ? p[0] : null;
     
    }

    let playerCards = (obj: Player) => {


      return (
        <Card className="text-center player-card border-0">
          <Card.Body>
            <span className="material-icons md-100">person</span>
            <Card.Text>
              <Col>
                <p>{obj.Player}, {obj.Rk}, {obj.WS}, {obj.playerTeam}</p>
              </Col>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }


  const inputChangeHandler = (value : string) => {
   setInput(value);
  }
  // renders players page
  return (
    <div className='players-container'>
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
         <Button id='add-btn' data-testid='add-btn' variant='secondary' onClick={submitPlayerHandler} type='submit'>Search Player Player</Button>
       </div>
       <Row id='player-cards' data-testid='player-cards'>{playerCards}</Row>
    </div>
  );
}

export default Players;
