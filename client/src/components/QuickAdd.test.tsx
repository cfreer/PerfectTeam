/**
 * This file contains the unit test functions for the QuickAdd component.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import { useCallback, useState } from 'react';
import QuickAdd from './QuickAdd';
import teams from './../../data/teams.json';

test('modal shows selector', () => {
  render(
    <QuickAdd 
      data={teams}
    />
  )
});