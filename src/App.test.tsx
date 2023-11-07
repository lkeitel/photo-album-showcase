import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('photo album showcase', () =>{
  it('displays a textbox for entering the album number', () => {
    render(<App />);
    const albumTextBox = screen.getByLabelText('Album Number')
    expect(albumTextBox).toBeInTheDocument();
  });
})