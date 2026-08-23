import { render, screen } from '@testing-library/react';
import App from './App';

test('renders advisory finder CTA', () => {
  render(<App />);
  expect(screen.getAllByText(/Find What I Need/i).length).toBeGreaterThan(0);
});
