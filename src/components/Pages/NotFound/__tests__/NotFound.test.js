import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  test('renders not found header', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const headerElement = screen.getByRole('heading', {
      name: 'Page not found!',
    });
    expect(headerElement).toBeInTheDocument();
  });

  test('renders not found link to homepage', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole('link', {
      name: 'Homepage',
    });
    expect(linkElement).toBeInTheDocument();
  });
});
