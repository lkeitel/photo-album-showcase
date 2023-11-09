import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

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



  it('loads album details when button is pressed', async () => {
    render(<App/>);
    const goButton = screen.getByRole('button', {name: 'Go'})
    const mockedWindow = jest.spyOn(window, 'fetch');
    act(() => {
      userEvent.click(goButton);
    })
    expect(mockedWindow.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/photos');
    expect(await screen.findByText('number 1')).toBeInTheDocument();
  });

  it('requests just the album info when button is pressed', async () => {
    render(<App/>);
    const goButton = screen.getByRole('button', {name: 'Go'})
    const mockedWindow = jest.spyOn(window, 'fetch');
    fireEvent.change(screen.getByLabelText('Album Number') , {target: {value: 12}})
    act(() => {
      userEvent.click(goButton);
    })
    expect(mockedWindow.mock.calls[0][0]).toEqual('https://jsonplaceholder.typicode.com/photos?albumId=12');
    expect(await screen.findByText('number 1')).toBeInTheDocument();
  });
})
