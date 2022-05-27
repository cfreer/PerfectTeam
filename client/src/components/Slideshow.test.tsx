/**
 * This file contains the unit test functions for the Slideshow component.
 */

import { render, screen } from '@testing-library/react';
import Slideshow from './Slideshow';

test('renders first image in slideshow', () => {
  render(<Slideshow />);
  const img1 = screen.getByTestId('slide-1');
  expect(img1).toHaveAttribute('src', process.env.PUBLIC_URL + 'imgs/slide-1.jpg');
  expect(img1).toHaveAttribute('alt', 'First slide - player figurines');
});

test('renders second image in slideshow', () => {
  render(<Slideshow />);
  const img2 = screen.getByTestId('slide-2');
  expect(img2).toHaveAttribute('src', process.env.PUBLIC_URL + 'imgs/slide-2.jpg');
  expect(img2).toHaveAttribute('alt', 'Second slide - basketball game stadium 1');
});

test('renders third image in slideshow', () => {
  render(<Slideshow />);
  const img3 = screen.getByTestId('slide-3');
  expect(img3).toHaveAttribute('src', process.env.PUBLIC_URL + 'imgs/slide-3.jpg');
  expect(img3).toHaveAttribute('alt', 'Third slide - basketball game stadium 2');
});
