import { FC, useEffect } from "react";
import otherApi from "../../../api/api.other";
import { otherReceved } from "../../../store/other";
import { isOutdated } from "../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../hook";
import CardDish from "../cardDish";

const OtherList: FC = () => {
    const otherList = useAppSelector(state => state.other.entities);
    const lastFetch = useAppSelector(state => state.other.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(otherReceved(otherApi));
        }
    })
    return (
        <main>
            <div className="container">
                {otherList.map((item) => (
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
 
export default OtherList;