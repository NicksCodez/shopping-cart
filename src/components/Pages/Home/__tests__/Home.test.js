import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
  test('renders home link', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole('link', { name: 'Start Shopping' });
    expect(linkElement).toBeInTheDocument();
  });
});
