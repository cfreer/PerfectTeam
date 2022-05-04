import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

const currRender = (ui : any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders home tab', () => {
  currRender(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('renders create team tab', () => {
  currRender(<NavBar />, {route: '/createteam'});
  expect((screen.getByText(/Create team/i))).toBeInTheDocument();
});

test('renders games tab', () => {
  currRender(<NavBar />, {route: '/games'});
  expect((screen.getByText(/Games/i))).toBeInTheDocument();
});

test('renders teams tab', () => {
  currRender(<NavBar />, {route: '/teams'});
  expect((screen.getByText(/Teams/i))).toBeInTheDocument();
});

test('renders players tab', () => {
  currRender(<NavBar />, {route: '/players'});
  expect((screen.getByText(/Players/i))).toBeInTheDocument();
});
