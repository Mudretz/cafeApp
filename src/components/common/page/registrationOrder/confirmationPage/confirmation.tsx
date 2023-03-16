import { FC } from "react";
import Steper from "../../../ui/steper";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonSubmit from "../../../ui/buttons/buttonSubmit";
import { useAppDispatch } from "../../../../../hooks/hook";
import { allDeleteItemsBasket } from "../../../../../store/basket";
import { clearCountBaske } from "../../../../../store/countBasket";
import styles from "./confirmation.module.scss";

const Confirmation: FC = () => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(allDeleteItemsBasket());
        dispatch(clearCountBaske());
    };

    return (
        <main>
            <div className={styles.container}>
                <Steper step={2}/>
                <div className={styles.card}>
                    <CheckCircleIcon fontSize="large" color="success"/>
                    <div>
                        <h2>Спасибо за заказ</h2>
                        <p>Ожидайте, ближайшее время свами свяжутся.</p>
                    </div>
                    <div onClick={handleDelete}>
                        <ButtonSubmit path="/" name="Вернуться"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Confirmation;
