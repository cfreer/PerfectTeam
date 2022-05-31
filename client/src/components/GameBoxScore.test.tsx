/**
 * This file contains the unit test functions for the GamesBoxScore
 */

import { render, screen } from '@testing-library/react';
import GameBoxScore from './GameBoxScore';
import { BrowserRouter } from 'react-router-dom';
import gameData from './../../data/games.json';

const currRender = (ui : any, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

test('renders game scores', () => {
  currRender(<GameBoxScore data={gameData}/>)
  expect(screen.getByTestId(/game-box/i)).toBeInTheDocument();
});
