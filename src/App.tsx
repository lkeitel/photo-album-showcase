import React, {useState} from 'react';
import AlbumTable from "./components/albumTable";
import {AlbumDetail} from "./types";
import AlbumForm from "./components/albumForm";

function App() {
    const [albumDetails, setAlbumDetails] = useState<AlbumDetail[]>([])

    return (
        <div>
            <AlbumForm onSubmitAlbumForm={setAlbumDetails}/>
            <AlbumTable albumDetails={albumDetails}/>
        </div>
  );
}

export default App;
