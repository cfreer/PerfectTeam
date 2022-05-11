/**
 * This file contains the unit test functions for the Games
 */

 import { render, screen } from '@testing-library/react';
 import Games from './Games';
 import { BrowserRouter } from 'react-router-dom';
 
 const currRender = (ui : any, {route = '/'} = {}) => {
   window.history.pushState({}, 'Test page', route)
 
   return render(ui, {wrapper: BrowserRouter})
 }
 
 test('renders game container', () => {
   currRender(<Games/>)
   expect(screen.getByTestId(/game-table/i)).toBeInTheDocument();
 });
 

 