/**
 * This file contains the unit test functions for the Games
 */

 import { render, screen } from '@testing-library/react';
 import Teams from './Teams';
 import { BrowserRouter } from 'react-router-dom';
 
 const currRender = (ui : any, {route = '/'} = {}) => {
   window.history.pushState({}, 'Test page', route)
 
   return render(ui, {wrapper: BrowserRouter})
 }
 
 test('renders game container', () => {
   currRender(<Teams/>)
   expect(screen.getByTestId(/teams-container/i)).toBeInTheDocument();
 });