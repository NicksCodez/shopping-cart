import React from 'react';
import { render, screen } from '@testing-library/react';
import ShopCard from '../ShopCard';
import { BrowserRouter } from 'react-router-dom';
import Images from '../../../../helpers/ImageImports.js';

const mockProps = {
  product: {
    id: 1,
    name: 'product 1',
    price: 123,
  },
  handleAddProduct: jest.fn(),
};

describe('ShopCard', () => {
  test('renders ShopCard', () => {
    render(
      <ShopCard
        product={mockProps.product}
        handleAddProduct={mockProps.handleAddProduct}
      />,
      { wrapper: BrowserRouter }
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', Images[mockProps.product.id]);

    expect(screen.getByText('product 1')).toBeInTheDocument();

    expect(screen.getByText('Price: 123')).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: 'Buy' });
    expect(buttonElement).toBeInTheDocument();
  });
});
