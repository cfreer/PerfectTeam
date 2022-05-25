/**
 * This file contains the unit test functions for the QuickAdd component.
 */

 import { render, screen } from '@testing-library/react';
 import ErrorBoundary from './ErrorBoundary';
 import QuickAdd from './QuickAdd';
 
 test('modal show error message', () => {
   render(
     <ErrorBoundary>
       <QuickAdd />
     </ErrorBoundary>
   );
 
   expect(screen.getByText(/Sorry, an error occurred/i)).toBeInTheDocument();
 });
 