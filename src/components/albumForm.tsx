import {Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";

type Props = {
    onSubmitAlbumForm: (data: any) => void;
}

export default function AlbumForm({onSubmitAlbumForm}: Props) {
    const [albumNumber, setAlbumNumber] = useState<number>()

    function handleSubmit() {
        const baseUrl = 'https://jsonplaceholder.typicode.com/photos'
        fetch(albumNumber && `${baseUrl}?albumId=${albumNumber}` || baseUrl)
            .then(response => response.json())
            .then(data => onSubmitAlbumForm(data))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        id="filled-number"
                        label="Album Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                        value={albumNumber}
                        onChange={(event) => {
                            setAlbumNumber(parseInt(event.target.value))
                        }}/>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={handleSubmit} color='primary'>Go</Button>
                </Grid>
            </Grid>
        </div>
    )
}