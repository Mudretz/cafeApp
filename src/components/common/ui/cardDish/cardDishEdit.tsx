import { FC } from "react";
import styles from "./cardDish.module.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

type Props = {
    id: string,
    name: string,
    img: string,
    price: number,
    description: string,
    weight: string,
    handleDelete: (id: string, name: string) => void,
}

const CardDishEdit: FC<Props> = ({ id, img, name, description, price, weight, handleDelete }) => {
    return (
        <div className={styles.card}>
            <div className={styles.product}>
                <img src={img} alt={name} />
            </div>
            <div className={styles.dish}>
                <div className={styles.dish__info}>
                    <h1 className={styles.info__name}>{name}</h1>
                    <p className={styles.info__description}>{description}</p>
                </div>
                <div className={styles.price__dish}>
                    <div>
                        <p className={styles.price}>{`${price} рублей`}</p>
                        <p className={styles.weight}>{weight}</p>
                    </div>
                    <div className={styles.edit}>
                        <DeleteIcon 
                            fontSize="large"
                            className={styles.edit__item}
                            onClick={() => handleDelete(id, name)}
                        />
                        <Link to={`/dashboard/${id}`}>
                            <EditIcon
                                fontSize="large"
                                className={styles.edit__item}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardDishEdit;