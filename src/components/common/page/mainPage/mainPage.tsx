import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hook";
import styles from "./mainPage.module.scss";

const MainPage: FC = () => {
    const categoriesObjList = useAppSelector(state => state.categoriesObj.entities);

    return (
        <main>
            <div className={styles.slider}>
                <img src="https://www.gastronom.ru/binfiles/images/20220420/b1fd4150.jpg" alt="слайдер"/>
            </div>
            <div className="container">
            {categoriesObjList.map((item) =>(
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
 
export default React.memo(MainPage);