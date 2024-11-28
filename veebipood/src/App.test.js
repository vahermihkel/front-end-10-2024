import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Navigationbar from './components/Navigationbar';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';


test('renders veebipood text', () => {
  render(
    <BrowserRouter>
      <Navigationbar />
    </BrowserRouter>
);
  const textElement = screen.getByText(/veebipood/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Kinkekaart 20€', () => {
  render(
    <BrowserRouter>
      <Kinkekaart />
    </BrowserRouter>
);
  const textElement = screen.getByText(/Kinkekaart 20€/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Kinkekaart 50€ if button clicked', () => {
  render(
    <BrowserRouter>
      <Kinkekaart />
    </BrowserRouter>
);
  const buttonElement = screen.getByText(/50€/i);
  fireEvent.click(buttonElement);
  const textElement = screen.getByText(/Kinkekaart 50€/i);
  expect(textElement).toBeInTheDocument();
});

test('renders error if lowercase input', () => {
  render(
    <BrowserRouter>
      <LisaToode />
    </BrowserRouter>
);
  const inputElement = screen.getByTestId(/input/i);
  fireEvent.change(inputElement, {target: {value: "a"}});
  const textElement = screen.getByText(/Esimene täht peab olema suur!/i);
  expect(textElement).toBeInTheDocument();
});
