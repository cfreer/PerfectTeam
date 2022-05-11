/**
 * This file contains the function SalaryEditor that returns the render for the
 * modal that allows the user to set the salary cap.
 */

import { useState } from 'react';
import { Button, Modal, Form, Alert, InputGroup } from 'react-bootstrap';

function SalaryEditor(props : any) {

  const [salaryVal, setSalaryVal] = useState<number>(props.salary);
  const [hideWarning, setHideWarning] = useState<boolean>(true);
  const [disableSave, setDisable] = useState<boolean>(false);

  function updateSalary() {
    props.parentSave(salaryVal);
  }

  function validateInput(input : string) {
    let numbers = /^[0-9]+$/;
    console.log(input);
    if (input === '') {
      setHideWarning(true);
      setDisable(true);
    } else if (!numbers.test(input)) {
      setHideWarning(false);
      setDisable(true);
    } else {
      setHideWarning(true);
      setDisable(false);
      setSalaryVal(parseInt(input));
    }
  }

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
          Edit Salary Cap
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please enter the amount that you would like to set the salary cap.</p>
        <p>Previous salary cap: ${(props.salary).toLocaleString()}</p>
        <Form.Label>Salary Cap</Form.Label>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type='text'
            onChange={(e) => validateInput(e.target.value)}
            autoFocus
          />
        </InputGroup>
        <Alert variant='warning' hidden={hideWarning} id='number-input-alert' data-testid='input-alert'>Please enter a value only containing numbers. (Example: 112400000)</Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button
          id='save-btn'
          onClick={() => {
            updateSalary();
            props.onHide();
          }}
          disabled={disableSave}
          >Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SalaryEditor;
