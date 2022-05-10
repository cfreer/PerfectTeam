/**
 * This file contains the unit test functions for the Home page component.
 */

import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const currRender = (ui : any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders home container', () => {
  currRender(<Home/>)
  expect(screen.getByTestId(/home-container/i)).toBeInTheDocument();
});

test('renders introduction/tutorial description', () => {
  currRender(<Home/>)
  expect(screen.getByTestId(/tutorial-description/i)).toBeInTheDocument();
});

test('renders create a team button', () => {
  currRender(<Home/>)
  expect(screen.getByTestId(/create-team-btn/i)).toBeInTheDocument();
});
