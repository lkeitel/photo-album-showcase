import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('photo album showcase', () =>{
  let originalFetch: { (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>; (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>; };
  beforeEach(() => {
    originalFetch = global.fetch;
    // @ts-ignore
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{
        albumId: 1,
        id: 1,
        title: "number 1",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }])
    }))
  })
  afterEach(() => {
    global.fetch=originalFetch;
  })

  it('displays a textbox for entering the album number', () => {
    render(<App />);
    const albumTextBox = screen.getByLabelText('Album Number')
    expect(albumTextBox).toBeInTheDocument();
  });

  it('displays a button for submitting the request', () => {
    render(<App/>);
    const goButton = screen.getByRole('button', {name: 'Go'})
    expect(goButton).toBeInTheDocument();
  });

  it('loads album details when button is pressed', async () => {
    render(<App/>);
    const goButton = screen.getByRole('button', {name: 'Go'})
    const mockedWindow = jest.spyOn(window, 'fetch');
    userEvent.click(goButton);
    expect(mockedWindow.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/photos');
    await waitFor(()=>
    {
      expect(screen.getByText('number 1')).toBeInTheDocument();
    });
  });
})
