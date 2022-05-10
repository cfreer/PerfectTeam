import { Button, Modal, Form } from 'react-bootstrap';

function QuickAdd(props : any) {

  function addHandler() {
    
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Quick Add Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Please select one of the following NBA teams that you would like to add to your current team.
        </p>
        <Form.Group>
          <Form.Control as="select">
            <option>Team 1</option>
            <option>Team 2</option>
            <option>Team 3</option>
            <option>Team 4</option>
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