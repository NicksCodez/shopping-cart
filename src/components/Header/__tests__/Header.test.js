import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header', () => {
  test('renders home button', () => {
    render(<Header />);
    const buttonElement = screen.getByRole('button', { name: 'Home' });
    expect(buttonElement).toBeInTheDocument();
  });
});
