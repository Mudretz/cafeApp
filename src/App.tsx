import { FC } from "react";
import HomePage from "./components/homePage";
import HotDish from "./components/hotDish";
import { Redirect, Route } from "react-router-dom";
import Header from "./components/header";
import Soups from "./components/soups";
import Salats from "./components/salats";
import Footer from "./components/footer";
import BuryatCuisineList from "./components/common/page/buryatCuisineList";
import { CSSTransition } from 'react-transition-group';
import ScrollToTop from "./components/common/scrollToTop";
import DrinksList from "./components/common/page/drinksList";

const App: FC = () => {
  const routes = [
    {path: "/hot_dishes", Component: HotDish},
    {path: "/soups", Component: Soups},
    {path: "/buryat_cuisine", Component: BuryatCuisineList},
    {path: "/salats", Component: Salats},
    {path: "/drinks", Component: DrinksList},
    {path: "/", Component: HomePage},
  ];
  
  return (
    <>
      <ScrollToTop />
      <Header/>
      {routes.map(({ path, Component }) =>
        <Route key={path} exact path={path}>
          {({ match }) =>
              <CSSTransition timeout={{ enter: 1000, exit: 1}} classNames="page" unmountOnExit in={match != null}>
                <Component/>
              </CSSTransition>
          }
        </Route> 
      )}
      <Redirect to="/"/>
      <Footer />
    </>
  );
};

export default App;