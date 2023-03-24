import * as React from "react";
import Popover from "@mui/material/Popover";
import { Badge, Divider, IconButton, Alert } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { basketUpdate, deleteItemsBasket } from "../../../../store/basket";
import { AddCountBasket, decrementCountBasket } from "../../../../store/countBasket";
import ButtonSubmit from "../buttons/buttonSubmit";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useLocation } from "react-router-dom";
import ModalBasketWindow from "../modalBasketWindow/modalBasketWindow";
import styles from "./popoverBaskets.module.scss";

export interface State extends SnackbarOrigin {
    openAlert: boolean;
}

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [state, setState] = React.useState<State>({
    openAlert: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const location = useLocation();
  const { vertical, horizontal, openAlert } = state;
  const basket = useAppSelector(state => state.basket.entities);
  const countBasket = useAppSelector(state => state.countBasket.entities);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(basket.length > 0) {
        setAnchorEl(event.currentTarget);
    }
  };

  const handleClickAlert = (newState: SnackbarOrigin) => {
    if(basket.length < 1) {
        setState({ openAlert: true, ...newState });
    }
  };

  const handleCloseAlert = () => {
    setState({ ...state, openAlert: false });
  };

  const handleClickAddBasket = (id: string, price: number) => {
    const findBasket = basket.find((element) => {
        return element.id === id
    })
    if (findBasket) {
        dispatch(basketUpdate(
            { ...findBasket, count: findBasket.count + 1 }
        ))
        dispatch(AddCountBasket(price));
    }
};

  const handleClickRemoveBasket = (id: string, price: number) => {
    const findBasket = basket.find((element) => {
        return element.id === id
    })
    if (findBasket && findBasket.count !== 1) {
        dispatch(basketUpdate(
            { ...findBasket, count: findBasket.count - 1 }
        ));
        dispatch(decrementCountBasket(price));
        if (basket.length === 1) {
            setAnchorEl(null);
        }
    }
};

    const handleDeleteItem = (id: string, price: number, count: number) => {
        dispatch(deleteItemsBasket(id));
        dispatch(decrementCountBasket(price*count));
        if (basket.length === 1) {
            setAnchorEl(null);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            { location.pathname !== "/order_page" && location.pathname !== "/order_address" ? (
                <IconButton aria-label="cart" aria-describedby={id} onClick={handleClick}>
                    <Badge badgeContent={countBasket} color="primary" max={100000000}>
                        <ShoppingCart sx={{ color: "#fa4c43" }} style={{ fontSize: 30 }} onClick={() => handleClickAlert({ vertical: 'top', horizontal: 'center' })}/>
                    </Badge>
                </IconButton>
            ) : (null)
            }
            <Snackbar open={openAlert} autoHideDuration={1000} onClose={handleCloseAlert} anchorOrigin={{ vertical, horizontal }}>
                <Alert severity="warning" onClose={handleCloseAlert} sx={{ width: '100%' } }>
                    Корзина пуста, выберите товары
                </Alert>
            </Snackbar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                className={styles.popover}
            >   
                <div className={styles.container}>
                    <ModalBasketWindow
                        basket={basket}
                        handleAdd={handleClickAddBasket}
                        handleRemove={handleClickRemoveBasket}
                        handleDelete={handleDeleteItem}
                    />
                    <Divider />
                    <div className={styles.footer}>
                        <div className={styles.footer__price}>
                            Итого: <strong>{countBasket}</strong> рублей
                        </div>
                        <div onClick={handleClose}>
                        <ButtonSubmit path="/order" name="Заказать"/>
                        </div>
                    </div>
                </div>
            </Popover>
        </div>
        );
};