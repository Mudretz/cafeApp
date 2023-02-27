import { FC } from "react";
import Steper from "../steper";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonSubmit from "../buttonSubmit";
import { useAppDispatch } from "../../hook";
import { allDeleteItemsBasket } from "../../../store/basket";
import { clearCountBaske } from "../../../store/countBasket";

const Confirmation: FC = () => {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        dispatch(allDeleteItemsBasket());
        dispatch(clearCountBaske());
    };
    return (
        <main>
            <div className="container address__page">
                <Steper step={2}/>
                <div className="card__confirmation">
                    <h2>Спасибо за заказ</h2>
                    <CheckCircleIcon fontSize="large" color="success"/>
                    <p>Ожидайте, ближайшее время свами свяжутся.</p>
                    <div onClick={handleDelete}>
                        <ButtonSubmit path="/" name="Вернтуться"/>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Confirmation;