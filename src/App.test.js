import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo App ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});
