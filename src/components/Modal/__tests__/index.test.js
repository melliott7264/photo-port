import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Grocery aisle',
  category: 'commercial',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
};

afterEach(cleanup);

describe('Modal componet', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    // arrange: Render Modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    // act: Simulate click event
    fireEvent.click(getByText('Close this modal'));
    // assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
