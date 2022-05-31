/**
 * This file contains the function PlayerProfile that returns the render for the
 * modal that shows an NBA player's profile.
 */

import { Modal } from 'react-bootstrap';


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


function PlayerProfile(props : any) {

  const player : Player = props.player;

  // Renders the modal of an NBA player
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      data-testid='player-profile-popup'
    >
      <Modal.Header closeButton />
      <Modal.Body className='player-profile-body'>
        <img src={require('./../assets/' + player.playerTeam.replace(/ /g,"-") + '.png').default} alt=''/>
        {/* Renders player information */}
        <div className='player-profile-text'>
          <p className='player-name'>{player.Player}</p>
          <p>
            <b>Win Shares:</b> {player.hasOwnProperty('WS') ? player.WS : 'Not available'} <br />
            <b>Team:</b> {player.hasOwnProperty('playerTeam') ? player.playerTeam : 'Not available'} <br />
            <b>Age:</b> {player.hasOwnProperty('age') ? player.age : 'Not available'} <br />
            <b>Salary:</b> {player.hasOwnProperty('salary') ? ('$' + parseInt(player.salary).toLocaleString()) : 'Not available'} <br />
            <b>Projected Salary:</b> {player.hasOwnProperty('projSalary') ? ('$' + parseInt(player.projSalary).toLocaleString()) : 'Not available'}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PlayerProfile;
