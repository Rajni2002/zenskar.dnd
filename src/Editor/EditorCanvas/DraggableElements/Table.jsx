import React from 'react';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import "./table.css"

// rows, columns, header, entries in the props
const Table = ({ tableHead, entries, row, col }) => {
    return (
        <table>
            <thead>
                <tr>
                    {tableHead.map((item, index) => (<th key={index}>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    entries.map((entry, index) => (<tr key={index}>
                        {
                            entry.map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))
                        }
                    </tr>))
                }
            </tbody>
        </table>
        // <Table sx={{ minWidth: 650 }} aria-label="simple table">
        /* <TableHead>
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
        </TableBody> */
        // </Table>
    );
};

export default Table;
