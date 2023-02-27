import * as React from "react";
import Popover from "@mui/material/Popover";
import { Badge, Divider, IconButton, Tooltip, Alert } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../hook";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { basketUpdate, deleteItemsBasket } from "../../store/basket";
import { AddCountBasket, decrementCountBasket } from "../../store/countBasket";
import ButtonSubmit from "./buttonSubmit";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useLocation } from "react-router-dom";

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
    if (findBasket) {
        dispatch(basketUpdate(
            { ...findBasket, count: findBasket.count - 1 }
        ));
        dispatch(decrementCountBasket(price));
        if (findBasket.count === 1) {
            dispatch(deleteItemsBasket(id));
        }
        if (basket.length === 1 && findBasket.count === 1) {
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
            className="popover"
        >   
            <div className="basket__modal__window">
                <TransitionGroup className="basket__list">
                    {basket.map((item) => (
                        <CSSTransition key={item.id} timeout={300} classNames="node">
                            <div className="basket__item">
                                <div className="basket__img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div className="basket__description">
                                    <div className="basket__description__item">
                                        <div className="basket__name">{item.name}</div>
                                        <div className="basket__weight">{item.weight}</div>
                                    </div>
                                    <div className="basket__description__item">
                                        <div className="basket__count">
                                            <Tooltip title="Убавить" sx={{ backgroundColor: "#fa4c43" }}>
                                                <IndeterminateCheckBoxIcon sx={{ color: "#fa4c43" }} fontSize={"medium"} className="icon__basket" onClick={() => handleClickRemoveBasket(item.id, item.price)}/>
                                            </Tooltip>
                                            <div className="count">{item.count}</div>
                                            <Tooltip title="Добавить">
                                                <AddBoxIcon sx={{ color: "#fa4c43" }} fontSize={"medium"} className="icon__basket" onClick={() => handleClickAddBasket(item.id, item.price)}/>
                                            </Tooltip>
                                        </div>
                                        <div className="basket__price">{`${item.price * item.count} р.`}</div>
                                        <Tooltip title="Удалить">
                                            <IconButton  onClick={() => handleDeleteItem(item.id, item.price, item.count)}>
                                                <DeleteIcon sx={{ color: "#fa4c43" }}/>
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            </CSSTransition>
                    ))}
                </TransitionGroup>
                <Divider />
                <div className="footer__basket">
                    <div className="footer__price__basket">
                        Итого: <strong>{countBasket}</strong> рублей
                    </div>
                    <div onClick={handleClose}>
                    <ButtonSubmit path="/order_page" name="Заказать"/>
                    </div>
                </div>
            </div>
        </Popover>
    </div>
    );
}