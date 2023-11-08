import {render, screen, waitFor} from "@testing-library/react";
import React from "react";
import AlbumTable from "./albumTable";
import {AlbumDetail} from "../types";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('Album Table', () => {
    const expectedDetail: AlbumDetail[] = [
        {
            albumId:1,
            id:1,
            title: 'number 1',
            url: '',
            thumbnailUrl: ''
        },
        {
            albumId:1,
            id:2,
            title: 'number 2',
            url: '',
            thumbnailUrl: ''
        },
    ]
    it('displays a table with headers to hold the photo information', () => {
        render(<AlbumTable albumDetails={expectedDetail}/>);
        expect(screen.getByText('Album Id')).toBeInTheDocument();
        expect(screen.getByText('Song Id')).toBeInTheDocument();
        expect(screen.getByText('Song Title')).toBeInTheDocument();
        expect(screen.getByText('Photo')).toBeInTheDocument();
    });
    it('displays a table with photo album detail', () => {
        render(<AlbumTable albumDetails={expectedDetail}/>);
        expect(screen.getByText('number 1')).toBeInTheDocument();
        expect(screen.getByText('number 2')).toBeInTheDocument();
    });
    it('shows options for pagination', async () => {
        render(<AlbumTable albumDetails={expectedDetail}/>);
        act(() => {
            userEvent.click(screen.getByLabelText('10'))
        })
        await waitFor(() => {
            expect(screen.getAllByText('10')[1]).toBeInTheDocument();
            expect(screen.getByText('25')).toBeInTheDocument();
            expect(screen.getByText('100')).toBeInTheDocument();
        })
        expect(screen.getByText('1–2 of 2')).toBeInTheDocument()
    });
})