import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const currRender = (ui : any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders home page', () => {
  currRender(<App />);
  expect(screen.getByTestId(/home-container/i)).toBeInTheDocument();
});

test('renders create team page', () => {
  currRender(<App />, {route: '/createteam'});
  expect(screen.getByTestId(/create-team-container/i)).toBeInTheDocument();
});

test('renders games page', () => {
  currRender(<App />, {route: '/games'});
  expect((screen.getByTestId(/game-table/i))).toBeInTheDocument();
});

test('renders teams page', () => {
  currRender(<App />, {route: '/teams'});
  expect((screen.getByTestId(/teams-container/i))).toBeInTheDocument();
});

test('renders players page', () => {
  currRender(<App />, {route: '/players'});
  expect((screen.getByTestId(/players-container/i))).toBeInTheDocument();
});
