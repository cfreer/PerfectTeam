/**
 * This file contains the unit test functions for the CreateTeam page component.
 */

import { render, screen } from '@testing-library/react';
import CreateTeam from './CreateTeam';
import players from './../../data/players.json';

test('renders player search bar', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId(/search/i)).toBeInTheDocument();
});

test('renders add player button', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId(/add-btn/i)).toBeInTheDocument();
});

test('renders a list of players\' names', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId(/player-list/i)).toBeInTheDocument();
});

test('renders create team button', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId(/create-team-btn/i)).toBeInTheDocument();
});

test('renders all alerts hidden', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId('input-alert')).toBeInTheDocument();
  expect(screen.getByTestId('input-alert-duplicate')).toBeInTheDocument();
  expect(screen.getByTestId('input-alert-salary')).toBeInTheDocument();
  expect(screen.getByTestId('input-alert-error')).toBeInTheDocument();
});

test('renders statistics table', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId('stats-table')).toBeInTheDocument();
  expect(screen.getByText('Win Prediction:')).toBeInTheDocument();
  expect(screen.getByText('Luxury Tax:')).toBeInTheDocument();
  expect(screen.getByText('Salary:')).toBeInTheDocument();
  expect(screen.getByText('Salary Cap:')).toBeInTheDocument();
});

test('renders player cards', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId('player-cards')).toBeInTheDocument();
});