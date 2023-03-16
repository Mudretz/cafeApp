import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss"

const HeaderDashboard: FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__item}>
                <div className={styles.logo}>
                    <Link to="/">Кафе</Link>
                </div>
                <nav className={styles.header__nav}>
                    <div className={styles.nav__item}>
                        <NavLink to="/addDish" activeClassName={styles.active}>Добавить блюдо</NavLink>
                    </div>
                    <div className={styles.nav__item}>
                        <NavLink to="/dashboard" activeClassName={styles.active}>Заказы</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};
 
export default HeaderDashboard;