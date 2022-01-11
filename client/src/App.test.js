import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders basic empty template', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/basic empty template/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  shallow(<App />);
});

// it("renders Account header", () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h1>Display Active Users Account Details</h1>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
