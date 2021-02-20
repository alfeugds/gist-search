import { render, screen } from '@testing-library/react';
import App from '../App';
import 'redux' from 'react-redux';

describe('App screen tests', () => {
  describe('app load', () => {
    it('renders welcome message', () => {
      render(<App />);
      const text = screen.getByText('Learn React')
      expect(text).toBeInTheDocument();
    });
    it('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });

    it('renders search box', () => {
      render(<App />);
      const text = screen.getByLabelText('Search Gists from User')
      expect(text).toBeInTheDocument();
    });

  })
})
