import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function SalaryEditor(props : any) {

  const [salaryVal, setSalaryVal] = useState<string>(props.salary);

  function updateSalary() {
    props.parentSave(salaryVal);
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
        <p>
          Please enter the amount that you would like to set the salary cap.
        </p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type='text' onChange={(e) => setSalaryVal(e.target.value)}>
              {salaryVal}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
          updateSalary();
          props.onHide();
        }}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SalaryEditor;
