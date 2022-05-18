/**
 * This file contains the unit test functions for the QuickAdd component.
 */

import { render, screen } from '@testing-library/react';
import QuickAdd from './QuickAdd';
import teams from './../../data/nbaTeams.json';

test('modal shows selector', () => {
  render(
    <QuickAdd 
      data={teams}
      show={true}
    />
  );

  expect(screen.getByTestId(/quick-add-popup/i)).toBeInTheDocument;
});
