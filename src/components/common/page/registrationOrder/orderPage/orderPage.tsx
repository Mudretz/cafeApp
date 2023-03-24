import { FC } from "react";
import { basketUpdate, deleteItemsBasket } from "../../../../../store/basket";
import { AddCountBasket, decrementCountBasket } from "../../../../../store/countBasket";
import { SnackbarOrigin } from '@mui/material/Snackbar';
import ButtonSubmit from "../../../ui/buttons/buttonSubmit";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hook";
import Steper from "../../../ui/steper";
import { useHistory } from "react-router-dom";
import BackButton from "../../../ui/backButton/backButton";
import ModalBasketWindow from "../../../ui/modalBasketWindow/modalBasketWindow";
import styles from "./orderPage.module.scss";

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
        });
        if (findBasket) {
            dispatch(basketUpdate(
                { ...findBasket, count: findBasket.count + 1 }
            ));
            dispatch(AddCountBasket(price));
        };
    };

    const handleClickRemoveBasket = (id: string, price: number) => {
        const findBasket = basket.find((element) => {
            return element.id === id
        });
        if (findBasket && findBasket.count !== 1) {
            dispatch(basketUpdate(
                { ...findBasket, count: findBasket.count - 1 }
            ));
            dispatch(decrementCountBasket(price));
        };
        if (basket.length < 1) {
            history.push("/");
        };
    };

    const handleDeleteItem = (id: string, price: number, count: number) => {
        dispatch(deleteItemsBasket(id));
        dispatch(decrementCountBasket(price*count));
        if (basket.length === 1) {
            history.push("/");
        };
    };

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <BackButton />
                <Steper step={0}/>
            </div>
            <div className={styles.container}>
                <div className={styles.order}>
                    <div className={styles.content}>
                        <ModalBasketWindow
                            basket={basket}
                            handleAdd={handleClickAddBasket}
                            handleRemove={handleClickRemoveBasket}
                            handleDelete={handleDeleteItem}
                        />
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.price}>
                        Итого: <strong>{countBasket}</strong> рублей
                    </div>
                    <ButtonSubmit path="/order_address" name="Оформить"/>
                </div>
            </div>
        </main>
    );
};
 
export default OrderPage;
