/**
 * This file renders the games page, adn is intended to 
 * contain the live scores of current games as well as upcoming games
 * based off of the NBA API
 */

import React from 'react';
import { Table } from 'react-bootstrap';
import GameBoxScore from '../components/GameBoxScore'

function Games(props : any) {
  // rendered games page
  return (
      <div className='game-table' data-testid="game-table">
          <GameBoxScore data={props.data}/>
      </div>
  );
}

export default Games;
