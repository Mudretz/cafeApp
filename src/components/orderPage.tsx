import { FC, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { basketUpdate, deleteItemsBasket } from "../store/basket";
import { AddCountBasket, decrementCountBasket } from "../store/countBasket";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SnackbarOrigin } from '@mui/material/Snackbar';
import ButtonSubmit from "./common/buttonSubmit";
import { useAppDispatch, useAppSelector } from "./hook";
import Steper from "./common/steper";
import { useHistory } from "react-router-dom";
import BackButton from "./common/backButton";

export interface State extends SnackbarOrigin {
    openAlert: boolean;
}

const OrderPage: FC = () => {
    const basket = useAppSelector(state => state.basket.entities);
    const countBasket = useAppSelector(state => state.countBasket.entities);
    const history = useHistory();
    const dispatch = useAppDispatch();

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
        }
        if (basket.length === 1) {
            history.push("/");
        }
    };

    const handleDeleteItem = (id: string, price: number, count: number) => {
        dispatch(deleteItemsBasket(id));
        dispatch(decrementCountBasket(price*count));
        if (basket.length === 1) {
            history.push("/");
        }
    };

    return (
        <main>
            <BackButton />
            <div className="container order__page">
                <div>
                    <Steper step={0}/>
                    <div className="basket__modal__window order__item">
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
                                                        <DeleteIcon sx={{ color: "#fa4c43" }} fontSize={"medium"}/>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                    </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </div>
                </div>
                <div className="footer__basket order__footer__basket">
                    <div className="footer__price__basket">
                        Итого: <strong>{countBasket}</strong> рублей
                    </div>
                    <ButtonSubmit path="/order_address" name="Оформить"/>
                </div>
            </div>
        </main>
    );
}
 
export default OrderPage;