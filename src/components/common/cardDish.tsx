import { FC } from "react";
import Button from "./button";

type Props = {
    id: string,
    img: string,
    name: string,
    description: string,
    price: number,
    weight: string
}

const CardDish: FC<Props> = ({ id, img, name, description, price, weight }) => {
    return ( 
        <div className="card__dish">
            <div className="product__dish">
                <img src={img} alt={name} />
            </div>
            <div className="dish">
                <div className="dish__info">
                    <h1 className="dish__name">{name}</h1>
                    <p className="dish__description">{description}</p>
                </div>
                <div className="price__dish">
                    <div className="price__dish__items">
                        <p className="price">{`${price} рублей`}</p>
                        <p className="weight">{weight}</p>
                    </div>
                    <Button id={id} img={img} name={name} price={price} weight={weight}/>
                </div>
            </div>
        </div>
    );
}
 
export default CardDish;