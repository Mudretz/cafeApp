import { FC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import BuryatCuisineList from "./components/common/page/pagesList/traditionsDishesList";
import { CSSTransition } from 'react-transition-group';
import ScrollToTop from "./utils/scrollToTop";
import DrinksList from "./components/common/page/pagesList/drinksList";
import Confirmation from "./components/common/page/registrationOrder/confirmationPage/confirmation";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import OtherList from "./components/common/page/pagesList/otherList";
import HotDishesList from "./components/common/page/pagesList/hotDishesList";
import SoupsList from "./components/common/page/pagesList/soupsList";
import SalatsList from "./components/common/page/pagesList/salatsList";
import MainPage from "./components/common/page/mainPage/mainPage";
import Order from "./components/order";
import AddressPage from "./components/common/page/registrationOrder/addressPage/addressPage";
import DishesLoader from "./components/common/ui/hoc/dishesLoader";
import DashboardIndex from "./components/common/page/dashboard/dashboardIndex";

const App: FC = () => {
    const routes = [
        {path: "/hot_dishes", Component: HotDishesList},
        {path: "/soups", Component: SoupsList},
        {path: "/buryat_cuisine", Component: BuryatCuisineList},
        {path: "/salats", Component: SalatsList},
        {path: "/drinks", Component: DrinksList},
        {path: "/other", Component: OtherList},
        {path: "/dashboard/:dishId?", Component: DashboardIndex},
        {path: "/order", Component: Order},
        {path: "/order_address", Component: AddressPage},
        {path: "/сonfirmation", Component: Confirmation},
        {path: "/", Component: MainPage}
    ];
    
    const location = useLocation();

    return (
        <DishesLoader>
            <ScrollToTop />
            {location.pathname !== "/order" && location.pathname !== "/order_address" && location.pathname !== "/сonfirmation"
                ?
                <Header/>
                :
                null
                }
            {routes.map(({ path, Component }) =>
                <Route key={path} exact path={path}>
                    {({ match }) =>
                        <CSSTransition timeout={{ enter: 1000, exit: 1}} classNames="page" unmountOnExit in={match != null}>
                            <Component/>
                        </CSSTransition>
                    }
                </Route> 
            )}
            {location.pathname !== "/order" && location.pathname !== "/order_address" && location.pathname !== "/сonfirmation" && location.pathname !== "/dashboard"
                ?
                <Footer/>
                :
                null
            }
            <Redirect to="/"/>
        </DishesLoader>
  );
};

export default App;