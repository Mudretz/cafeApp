import { FC, useState } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Orders } from "../../../../types/types";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
    list: Orders
}

const TableBodyDish: FC<Props> = ({ list }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow
                key={list.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {list.count}
                </TableCell>
                <TableCell align="center">{list.name}</TableCell>
                <TableCell align="center">{list.address}</TableCell>
                <TableCell align="center">{list.phone}</TableCell>
                <TableCell align="center">{list.totalPrice}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom:"none" }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Заказ
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell align="center">Количество</TableCell>
                                        <TableCell align="center">Цена</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {list.order.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell component="th" scope="row" style={{borderBottom:"none"}}>
                                                    {item.name}
                                                </TableCell>
                                                <TableCell scope="row" align="center" style={{borderBottom:"none"}}>
                                                    {item.count}
                                                </TableCell>
                                                <TableCell scope="row" align="center" style={{borderBottom:"none"}}>
                                                    {item.price*item.count}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
 
export default TableBodyDish;