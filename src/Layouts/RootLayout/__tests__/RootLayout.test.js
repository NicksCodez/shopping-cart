import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '../RootLayout';
import { BrowserRouter } from 'react-router-dom';

describe('RootLayout', () => {
  test('renders home link', () => {
    render(<RootLayout />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole('link', { name: 'Home' });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders shop link', () => {
    render(<RootLayout />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole('link', { name: 'Shop' });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders cart link', () => {
    render(<RootLayout />, { wrapper: BrowserRouter });
    const linkElement = screen.getByRole('link', { name: 'Cart' });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders logo link', () => {
    render(<RootLayout />, { wrapper: BrowserRouter });
    const headingElement = screen.getByRole('heading', { name: 'ShopName' });
    expect(headingElement).toBeInTheDocument();
  });
});
