import { render, screen } from '@testing-library/react';
import App from './App';

test('renders business solution CTA', () => {
  render(<App />);
  expect(
    screen.getAllByText(/Find My Business Solution/i).length
  ).toBeGreaterThan(0);
});
