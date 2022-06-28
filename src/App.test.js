import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Projects NavLink', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});
