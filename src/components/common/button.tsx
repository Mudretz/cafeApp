import { Alert } from "@mui/material";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { FC, useState } from "react";
import { addItemsBasket, basketUpdate } from "../../store/basket";
import { AddCountBasket } from "../../store/countBasket";
import { useAppDispatch, useAppSelector } from "../hook";
import CheckIcon from '@mui/icons-material/Check';

type Props = {
    id: string,
    img: string,
    name: string,
    price: number,
    weight: string
}

export interface State extends SnackbarOrigin {
    open: boolean;
}


const Button: FC<Props> = ({ id, img, name, price, weight }) => {
    const dispatch = useAppDispatch();
    const basket = useAppSelector(state => state.basket.entities);
    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    const { vertical, horizontal, open } = state;

    const handleClick = (id: string, price: number, newState: SnackbarOrigin) => {
        const findBasket = basket.find((element) => {
            return element.id === id
        })
        setState({ open: true, ...newState });
        dispatch(AddCountBasket(price));
        if (!findBasket) {
            dispatch(addItemsBasket(
                {
                    id: id,
                    img: img,
                    name: name,
                    weight: weight,
                    price: price,
                    count: 1
                }
            ))
        } else {
            dispatch(basketUpdate(
                { ...findBasket, count: findBasket.count + 1 }
            ))}
    };

    const handleClose = () => {
        setState({ ...state, open: false });
      };

    return (
        <>
            <div className="button" onClick={() => handleClick(id, price, { vertical: 'top', horizontal: "left" })}>
                <p>В корзину</p>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert icon={<CheckIcon fontSize="inherit" />} onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {`${name} успешно добавлен в корзину`}
                </Alert>
            </Snackbar>
        </>
    );
}
 
export default Button;