/**
 * This file contains the unit test functions for the Player Profile component.
 */

import { render, screen } from '@testing-library/react';
import PlayerProfile from './PlayerProfile';
import playerData from './../../data/players.json';

test('modal shows salary editor modal', () => {
  render(
    <PlayerProfile
      show={true}
      player={playerData[0]}
    />
  );

  expect(screen.getByTestId(/player-profile-popup/i)).toBeInTheDocument();
});