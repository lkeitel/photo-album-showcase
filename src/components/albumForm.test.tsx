import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

describe('Album Form', () => {
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

    it('does not allow you to enter a value less than 0', () => {
        render(<App/>);
        const albumTextBox = screen.getByLabelText('Album Number')
        fireEvent.change(albumTextBox, {target: {value: -12}})
        expect(screen.queryByDisplayValue(-12)).not.toBeInTheDocument();
    });
})