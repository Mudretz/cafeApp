import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import MuiDrawer from "../MuiDrawer/MuiDrawer";
import BasicPopover from "../../common/ui/popoverBaskets/popoverBaskets";
import { useAppSelector } from "../../../hooks/hook";
import styles from "./header.module.scss"

const Header: FC = () => {
    const categoriesListObj = useAppSelector(state => state.categoriesObj.entities);

    return (
        <header className={styles.header}>
            <div className={styles.header__item}>
                <div className={styles.logo}>
                    <Link to="/">Кафе</Link>
                </div>
                <div className={styles.header__contact}>
                    <p className={styles.schedule}>График работы: c 8:00 до 22:00</p>
                    <p className={styles.phone}>+7 (9999) 99‒99‒99</p>
                </div>
                <nav className={styles.header__nav}>
                    {categoriesListObj.map((item) => (
                        <div className={styles.nav__item} key={item.id}>
                            <NavLink to={item.url} activeClassName={styles.active}>{item.name}</NavLink>
                        </div>
                    
                    ))}
                    <div className={styles.nav__item}>
                        <NavLink to="/dashboard" activeClassName={styles.active}>Управление</NavLink>
                    </div>
                    <div className={styles.nav__item + " " + styles.badge}>
                        <BasicPopover />
                    </div>
                    <MuiDrawer list={categoriesListObj}/>
                </nav>
            </div>
        </header>
    );
};
 
export default Header;