/**
 * This file contains the function SalaryEditor that returns the render for the
 * modal that allows the user to set the salary cap.
 */

import { useState } from 'react';
import { Button, Modal, Form, Alert, InputGroup } from 'react-bootstrap';

function SalaryEditor(props : any) {

  const [salaryVal, setSalaryVal] = useState<number>(props.salary);
  const [hideWarning, setHideWarning] = useState<boolean>(true);
  const [hideLengthWarning, setLengthWarning] = useState<boolean>(true);
  const [disableSave, setDisable] = useState<boolean>(false);
  const SALARY_LIMIT = 500000000;

  function updateSalary() {
    props.parentSave(salaryVal);
  }

  // Validate input from user only contains number values and is within the limit
  function validateInput(input : string) {
    let numbers = /^[0-9]+$/;
    console.log(input);
    if (input === '') {
      setHideWarning(true);
      setDisable(true);
      setLengthWarning(true);
    } else if (!numbers.test(input)) {
      setHideWarning(false);
      setDisable(true);
      setLengthWarning(true);
    } else if (parseInt(input) > SALARY_LIMIT) {
      setHideWarning(true);
      setDisable(true);
      setLengthWarning(false);
    } else {
      setHideWarning(true);
      setDisable(false);
      setLengthWarning(true);
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
        <p>Please enter the amount that you would like to set the salary cap. The salary cap must be less than or equal to $500,000,000.</p>
        <p>Previous salary cap: ${(props.salary).toLocaleString()}</p>
        <Form.Label>Salary Cap</Form.Label>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type='text'
            onChange={(e : any) => validateInput(e.target.value)}
            autoFocus
          />
        </InputGroup>
        <Alert variant='warning' hidden={hideWarning} id='number-input-alert' data-testid='input-alert'>Please enter a value only containing numbers. (Example: 112400000)</Alert>
        <Alert variant='warning' hidden={hideLengthWarning} id='number-length-alert' data-testid='input-alert'>Please enter a value less than $500,000,000.</Alert>
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
