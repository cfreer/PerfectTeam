/**
 * This file contains the unit test functions for the Games
 */

import { render, screen } from '@testing-library/react';
import Teams from './Teams';
import teamData from './../../data/nbaTeams.json';

test('renders team table', () => {
  render(<Teams data={teamData}/>)
  expect(screen.getByTestId(/teams-table/i)).toBeInTheDocument();
  expect(screen.getByTestId(/teams-table/i)).toBeVisible();
});
