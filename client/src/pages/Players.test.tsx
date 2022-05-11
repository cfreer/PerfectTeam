/**
 * This file contains the unit test functions for the Players page component.
 */

 import { render, screen } from '@testing-library/react';
 import Players from './Players';
 import players from './../../data/players.json';
 
 test('renders player search bar', () => {
   render(<Players data={players}/>)
   expect(screen.getByTestId(/search/i)).toBeInTheDocument();
 });
 
 test('renders search player button', () => {
   render(<Players data={players}/>)
   expect(screen.getByTestId(/add-btn/i)).toBeInTheDocument();
 });
 
 
 test('renders player cards', () => {
   render(<Players data={players}/>)
   expect(screen.getByTestId('player-cards')).toBeInTheDocument();
 });