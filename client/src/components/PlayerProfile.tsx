/**
 * This file contains the function SalaryEditor that returns the render for the
 * modal that allows the user to set the salary cap.
 */

 import { Modal, Card } from 'react-bootstrap';


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

   return (
     <Modal
       {...props}
       size='lg'
       aria-labelledby='contained-modal-title-vcenter'
       centered
       data-testid='salary-editor-popup'
     >
       <Modal.Header closeButton>
         <Modal.Title id='contained-modal-title-vcenter'>
           {player.Player}
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
      <Card className="text-center player-card-lg border-0">
        <Card.Body>
          <img src={require('./../assets/' + player.playerTeam.replace(/ /g,"-") + '.png').default} alt='' className='player-img'/>
          <Card.Title>{player.Player}</Card.Title>
          <Card.Text>
            <p><b>Win Shares:</b> {player.WS}</p>
            <p><b>Team:</b> {player.playerTeam}</p>
          </Card.Text>
        </Card.Body>
      </Card>
       </Modal.Body>
     </Modal>
   );
 }

 export default PlayerProfile;
