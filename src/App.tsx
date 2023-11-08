import React, {useState} from 'react';
import AlbumTable from "./components/albumTable";
import {AlbumDetail} from "./types";
import AlbumForm from "./components/albumForm";
import {Grid} from "@mui/material";

function App() {
    const [albumDetails, setAlbumDetails] = useState<AlbumDetail[]>([])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 style={{textAlign: 'center'}}>Photo Album Showcase</h1>
                </Grid>
                <Grid item xs={12}>
                    <AlbumForm onSubmitAlbumForm={setAlbumDetails}/>
                </Grid>
                <Grid item xs={12} style={{margin: 40}}>
                    <AlbumTable albumDetails={albumDetails}/>
                </Grid>
            </Grid>
        </div>
  );
}

export default App;
