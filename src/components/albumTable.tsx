import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {AlbumDetail} from "../types";
type Props = {
    albumDetails: AlbumDetail[]
}
export default function AlbumTable({albumDetails}: Props) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Album Id</TableCell>
                        <TableCell>Song Id</TableCell>
                        <TableCell>Song Title</TableCell>
                        <TableCell>Photo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albumDetails.map((row) => (
                        <TableRow>
                            <TableCell>{row.albumId}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.url}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}