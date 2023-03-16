import { useEffect, FC } from "react";
import categories from "../../../../api/api.categories";
import { NavLink } from "react-router-dom";
import { isOutdated } from "../../../../utils/isOutdated";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { categoriesReceved } from "../../../../store/categories";
import styles from "./mainPage.module.scss";

const MainPage: FC = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useAppSelector(state => state.categories.entities);
    const lastFetch = useAppSelector(state => state.categories.lastFetch);
    useEffect(() => {
        if (isOutdated(lastFetch))
        {
            dispatch(categoriesReceved(categories));
        }
    });

    return (
        <main>
            <div className={styles.slider}>
                <img src="https://www.gastronom.ru/binfiles/images/20220420/b1fd4150.jpg" alt="слайдер"/>
            </div>
            <div className="container">
            {categoriesList.map((item) =>(
                <div className={styles.card} key={item.id}>
                    <p>{item.name}</p>
                    <div className={styles.content}>
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
 
export default MainPage;