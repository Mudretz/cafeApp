import { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hook";
import EditDish from "../../ui/editDish/editDish";
import Dashboard from "./dashboard";

const DashboardIndex: FC = () => {
    const { dishId } = useParams<{dishId? : string}>();
    const dishes = useAppSelector(state => state.dishes.entities);
    const dishById = dishes.find((item) => item.id === dishId);

    return (
        <>
            { dishById?.name ?
                <EditDish
                    id={dishById.id}
                    name={dishById.name}
                    description={dishById.description}
                    price={String(dishById.price)}
                    weight={dishById.weight}
                    img={dishById.img}
                    select={dishById.category.name}
                /> : <Dashboard />}
        </>
    );
}
 
export default DashboardIndex;