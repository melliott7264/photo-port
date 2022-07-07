import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  //baseline
  it('renders', () => {
    render(<Contact />);
  });
  //snapshot
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('major elements are visible', () => {
  it('elements visibwle', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('contact')).toHaveTextContent('Contact me');
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
