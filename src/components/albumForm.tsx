import {Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";

type Props = {
    onSubmitAlbumForm: (data: any) => void;
}

export default function AlbumForm({onSubmitAlbumForm}: Props) {
    const [albumNumber, setAlbumNumber] = useState<number>()

    function handleSubmit() {
        const baseUrl = 'https://jsonplaceholder.typicode.com/photos'
        fetch((albumNumber && `${baseUrl}?albumId=${albumNumber}`) || baseUrl)
            .then(response => response.json())
            .then(data => onSubmitAlbumForm(data))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <Grid container spacing={10} sx={{alignItems: 'center'}}>
                <Grid item sx={{marginLeft: 10}}>
                    <TextField
                        id="filled-number"
                        label="Album Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{ inputProps: { min: 0} }}
                        variant="standard"
                        value={albumNumber || ''}
                        onChange={(event) => {
                            let newValue = parseInt(event.target.value);
                            if (newValue <= 0)
                                newValue=0
                            setAlbumNumber(newValue)
                        }}/>
                </Grid>
                <Grid item >
                    <Button variant='contained' onClick={handleSubmit} size='large'>Go</Button>
                </Grid>
            </Grid>
        </div>
    )
}