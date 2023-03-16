import { FC, useEffect } from "react";
import soups from "../../../../api/api.soups";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { soupsReceved } from "../../../../store/soupsStore";
import { isOutdated } from "../../../../utils/isOutdated";
import CardDish from "../../ui/cardDish/cardDish";


const SoupsList: FC = () => {
    const soupsList = useAppSelector(state => state.soups.entities);
    const lastFetch = useAppSelector(state => state.soups.lastFetch);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(soupsReceved(soups));
        }
    });
    
    return (
        <main>
            <div className="container">
                {soupsList.map((item) => (
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
 
export default SoupsList;