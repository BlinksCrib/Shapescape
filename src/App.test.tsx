// App.test.tsx
/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';


test('renders App component with routes', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is rendered
  const navbarElement = screen.getByTestId('navbar')  as HTMLElement;
  expect(navbarElement).toBeInTheDocument();

  // Check if Home page is rendered by default
  const homeElement = screen.getByText(/Welcome to our website/i);
  expect(homeElement).toBeInTheDocument();

  // Check if Footer is rendered
  const footerElement = screen.getByTestId('footer') ;
  expect(footerElement).toBeInTheDocument();
});
