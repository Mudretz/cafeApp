import { FC } from "react";
import HomePage from "./components/homePage";
import HotDish from "./components/hotDish";
import { Redirect, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Soups from "./components/soups";
import Salats from "./components/salats";
import Footer from "./components/footer";
import BuryatCuisineList from "./components/common/page/buryatCuisineList";
import { CSSTransition } from 'react-transition-group';
import ScrollToTop from "./components/common/scrollToTop";
import DrinksList from "./components/common/page/drinksList";
import OtherList from "./components/common/page/otherList";
import OrderPage from "./components/orderPage";
import addressPage from "./components/common/page/addressPage";
import Confirmation from "./components/common/page/confirmation";

const App: FC = () => {
  const routes = [
    {path: "/hot_dishes", Component: HotDish},
    {path: "/soups", Component: Soups},
    {path: "/buryat_cuisine", Component: BuryatCuisineList},
    {path: "/salats", Component: Salats},
    {path: "/drinks", Component: DrinksList},
    {path: "/other", Component: OtherList},
    {path: "/order_page", Component: OrderPage},
    {path: "/order_address", Component: addressPage},
    {path: "/сonfirmation", Component: Confirmation},
    {path: "/", Component: HomePage}
  ];
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      {location.pathname !== "/order_page" && location.pathname !== "/order_address" && location.pathname !== "/сonfirmation"
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
      {location.pathname !== "/order_page" && location.pathname !== "/order_address" && location.pathname !== "/сonfirmation"
        ?
        <Footer/>
        :
        null
      }
      <Redirect to="/"/>
    </>
  );
};

export default App;