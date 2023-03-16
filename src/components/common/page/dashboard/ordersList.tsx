import { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./dashboard.module.scss";

const OrdersList: FC = () => {
    const orders = useAppSelector(state => state.orders.entities);
    return (
        <div className="main">
            <div className={styles.container__table}>
                <h2>Новые заказы</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Имя</TableCell>
                            <TableCell align="center">Адрес</TableCell>
                            <TableCell align="center">Телефон</TableCell>
                            <TableCell align="center">Заказ</TableCell>
                            <TableCell align="center">Cтоимость</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {orders.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.count}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.address}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">
                                {row.order.map((item) => (
                                    <p>{item.name} {item.count}</p>
                                ))}
                            </TableCell>
                            <TableCell align="center">{row.totalPrice}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
 
export default OrdersList;