/**
 * This file contains the function QuickAdd that returns the render for the
 * modal that allows the user to select an NBA team.
 */

import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

interface Team {
  id: string,
  teamId: number,
  teamName: string,
  Conf: string,
  Div: string,
  W: number,
  L: number,
  WL: string,
  MOV: string,
  ORtg: string,
  DRtg: string,
  NRtg: string
}

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

function QuickAdd(props : any) {

  const [team, setTeam] = useState<string>('');

  // Base URL for Perfect Team API
  const API_URL = 'https://perfect-team-api.herokuapp.com/';
  // const API_URL = 'http://localhost:4567/';

  async function statusCheck(res : Response) {
    if (!res.ok) {
      throw new Error(await res.json());
    }
    return res;
  }

  // Updates team options
  let teamOptions = props.data.map((team : Team) => {
    return (<option key={team.id}>{team.teamName}</option>)
  });

  function addHandler() {
    fetch(API_URL + 'quickadd/' + team)
      .then(statusCheck)
      .then(res => res.json())
      .then(updateCurrentTeam)
      .catch(console.error);
  }

  function updateCurrentTeam(res : any) {
    // let names : string[] = [];
    // let rks : number[] = [];
    let salary : number = 0;
    res.forEach((obj : Player) => {
      // names.push(obj.Player);
      // rks.push(obj.Rk);
      salary = obj.hasOwnProperty('salary') ? salary + parseInt(obj.salary) : 0;
    });


    // props.parentTeamNamesSetter(names);
    // props.parentTeamRksSetter(rks);
    props.parentTeamSetter(res);
    props.parentSalarySetter(salary);
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      data-testid='quick-add-popup'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Quick Add Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Please use the dropdown menu to select one of the following NBA teams
          that you would like to add to your current team.
        </p>
        <Form.Group>
          <Form.Control as='select' onChange={(e) => setTeam(e.target.value)}>
            <option selected disabled hidden>Select NBA Team</option>
            {teamOptions}
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          addHandler();
          props.onHide();
        }}>Add Players</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuickAdd;
