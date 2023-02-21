import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { MuiDrawer } from "./common/MuiDrawer";
import BasicPopover from "./common/popoverBaskets";

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='header__item'>
                <div className="logo">
                    <Link to="/" >Амритта</Link>
                </div>
                <div className="header__contact">
                    <p className="schedule">График работы: c 8:00 до 22:00</p>
                    <p className="phone">+7 (3952) 66‒29‒19</p>
                </div>
                <nav className="header__nav">
                    <div className="nav__item">
                        <NavLink to="/hot_dishes" activeClassName="active">Горячее</NavLink>
                    </div>
                    <div className="nav__item">
                        <NavLink to="/soups" activeClassName="active">Супы</NavLink>
                    </div>
                    <div className="nav__item">
                        <NavLink to="/buryat_cuisine" activeClassName="active">Бурятская кухня</NavLink>
                    </div>
                    <div className="nav__item">
                        <NavLink to="/salats" activeClassName="active">Салаты</NavLink>
                    </div>
                    <div className="nav__item">
                        <NavLink to="/drinks" activeClassName="active">Напитки</NavLink>
                    </div>
                    <div className="nav__item">Разное</div>
                    <div className="nav__item badge">
                        <BasicPopover />
                    </div>
                    <MuiDrawer />
                </nav>
            </div>
        </header>
    );
}
 
export default Header;