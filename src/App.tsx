import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import AlbumTable from "./components/albumTable";
import {AlbumDetail} from "./types";

function App() {
    const [albumNumber, setAlbumNumber] = useState<number>()
    const [albumDetails, setAlbumDetails] = useState<AlbumDetail[]>([])

    function handleSubmit() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setAlbumDetails(data))
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
                        setAlbumNumber(parseInt(event.target.value))}}/>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={handleSubmit} color='primary'>Go</Button>
            </Grid>
            <Grid item xs={12}>
                <AlbumTable albumDetails={albumDetails}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
