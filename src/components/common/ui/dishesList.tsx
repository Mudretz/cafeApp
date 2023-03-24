import { FC } from "react";
import { Dishes } from "../../../types/types";
import CardDish from "./cardDish/cardDish";
import SkeletonListDishes from "./skeletonList/skeletonListDishes/skeletonListDishes";


type Props = {
    list: Dishes[]
}

const DishesList: FC<Props> = ({ list }) => {
    return (
        <main>
            <div className="container">
                {list.length < 1 && <SkeletonListDishes  count={4}/>}
                {list.map((item) => (
                    <CardDish
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                        key={item.id}
                    />
                ))}
            </div>
        </main>
    );
}
 
export default DishesList;