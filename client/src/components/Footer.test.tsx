/**
 * This file contains the unit test functions for the Footer component.
 */

import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer', () => {
  render(<Footer />);
  expect(screen.getByText(/Aaron Carter, Amanda Ki, Caroline Freer, Juan Gonzalez, Ned Harrison/i)).toBeInTheDocument();
});
