import {
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead, TablePagination,
    TableRow
} from "@mui/material";
import {AlbumDetail} from "../types";
import React, {useState} from "react";

type Props = {
    albumDetails: AlbumDetail[]
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function AlbumTable({albumDetails}: Props) {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{overflow: 'hidden', marginX: 10, marginY: 5}}>
            <TableContainer  >
                <Table size="small" >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Album Id</StyledTableCell>
                        <StyledTableCell>Song Id</StyledTableCell>
                        <StyledTableCell>Song Title</StyledTableCell>
                        <StyledTableCell>Photo</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albumDetails
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell>{row.albumId}</StyledTableCell>
                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell>{row.title}</StyledTableCell>
                            <StyledTableCell><img src={row.thumbnailUrl} width={50} height={50} alt=''/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={albumDetails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    )
}