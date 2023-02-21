import { useEffect, FC } from "react";
import categories from "../api/api.categories";
import { NavLink } from "react-router-dom";
import { isOutdated } from "../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "./hook";
import { categoriesReceved } from "../store/categories";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useAppSelector(state => state.categories.entities);
    const lastFetch = useAppSelector(state => state.categories.lastFetch);
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(categoriesReceved(categories));
        }
    })
    return (
        <main>
            <div className="slider">
                <img src="https://www.gastronom.ru/binfiles/images/20220420/b1fd4150.jpg" alt="слайдер"/>
            </div>
            <div className="container">
            {categoriesList.map((item) =>(
                <div className="card" key={item.id}>
                <p>{item.name}</p>
                <div className="product">
                    <NavLink to={item.url} activeClassName="active">
                        <img src={item.img} alt={item.name}/>
                    </NavLink>
                </div>
                </div>
            ))}
            </div>
        </main>
    );
}
 
export default Main;