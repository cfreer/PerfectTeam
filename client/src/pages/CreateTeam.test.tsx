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
  expect(screen.getByTestId(/player-list-table/i)).toBeInTheDocument();
});

test('renders create team button', () => {
  render(<CreateTeam data={players}/>)
  expect(screen.getByTestId(/create-team-btn/i)).toBeInTheDocument();
});

test('renders invalid player alert hidden', () => {
  render(<CreateTeam data={players}/>)
  let alert = screen.getByTestId('input-alert');
  expect(alert).toBeInTheDocument();
  expect(alert).not.toBeVisible();
});

test('renders duplicate player alert hidden', () => {
  render(<CreateTeam data={players}/>)
  let alert = screen.getByTestId('input-alert-duplicate');
  expect(alert).toBeInTheDocument();
  expect(alert).not.toBeVisible();
});

test('renders player with no salary alert hidden', () => {
  render(<CreateTeam data={players}/>)
  let alert = screen.getByTestId('input-alert-salary');
  expect(alert).toBeInTheDocument();
  expect(alert).not.toBeVisible();
});

test('renders API error alert hidden', () => {
  render(<CreateTeam data={players}/>)
  let alert = screen.getByTestId('input-alert-error');
  expect(alert).toBeInTheDocument();
  expect(alert).not.toBeVisible();
});

test('renders team suggest message hidden', () => {
  render(<CreateTeam data={players}/>)
  let alert = screen.getByTestId('team-suggestion-msg');
  expect(alert).toBeInTheDocument();
  expect(alert).not.toBeVisible();
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
