/**
 * This file renders the games page, and is intended to
 * contain the live scores of current games as well as upcoming games
 * based off of the NBA API
 */

import GameBoxScore from '../components/GameBoxScore'

// This function will present the games page to the user, where past and present game scores will be shown
function Games(props : any) {
  // rendered games page
  return (
    <div className='game-table' data-testid="game-table">
      <GameBoxScore data={props.data}/>
    </div>
  );
}

export default Games;
