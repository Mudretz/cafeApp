import { FC } from "react";
import { Dishes } from "../../../../types/types";
import Button from "../buttons/button";
import styles from "./cardDish.module.scss"

const CardDish: FC<Dishes> = ({ id, img, name, description, price, weight }) => {
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
                    <Button id={id} img={img} name={name} price={price} weight={weight}/>
                </div>
            </div>
        </div>
    );
}
 
export default CardDish;