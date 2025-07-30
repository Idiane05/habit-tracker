import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app heading', () => {
  render(<App />);
  const heading = screen.getByText(/habit tracker/i);
  expect(heading).toBeInTheDocument();
});
function expect(heading: HTMLElement) {
    throw new Error('Function not implemented.');
}

