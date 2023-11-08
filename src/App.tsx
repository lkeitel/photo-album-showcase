import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";

function App() {
    const [albumNumber, setAlbumNumber] = useState<number>(1)

    function handleSubmit() {

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
                
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
