import { FC } from "react";
import { useAppSelector } from "../../../../hooks/hook";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import TableBodyDish from "./tableBodyDish";

const OrdersList: FC = () => {
    const orders = useAppSelector(state => state.orders.entities);
    return (
            <Container maxWidth="lg">
                <h2 style={{
                    marginBottom: "20px",
                    fontSize: "24px",
                    textAlign: "center"
                }}>
                    Новые заказы
                </h2>
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
                            {orders.map((item) => (
                                <TableBodyDish list={item}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
    );
}
 
export default OrdersList;