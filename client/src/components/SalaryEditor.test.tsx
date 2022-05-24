/**
 * This file contains the unit test functions for the Salary Editor component.
 */

 import { render, screen } from '@testing-library/react';
 import SalaryEditor from './SalaryEditor';

 test('modal shows salary editor modal', () => {
   render(
     <SalaryEditor
       salary={112400000}
       show={true}
     />
   );

   expect(screen.getByTestId(/salary-editor-popup/i)).toBeInTheDocument();
 });