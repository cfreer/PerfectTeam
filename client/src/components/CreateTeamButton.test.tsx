/**
 * This file contains the unit test functions for the CreateTeamButton component.
 */

import { render, screen } from '@testing-library/react';
import CreateTeamButton from './CreateTeamButton';
import { BrowserRouter } from 'react-router-dom';

const currRender = (ui : any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders button', () => {
  currRender(<CreateTeamButton />);
  expect(screen.getByTestId(/create-team-btn/i)).toBeInTheDocument();
});

test('renders button text', () => {
  currRender(<CreateTeamButton />);
  expect(screen.getByText('Create a Team!')).toBeInTheDocument();
});
