import { useEffect } from "react";
import { fetchCategories } from "../../../../api/api.categoriesObj";
import { fetchAll } from "../../../../api/api.dishes";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hook";
import { categoriesObjReceved } from "../../../../store/categoriesObj";
import { dishesReceved } from "../../../../store/dishes";
import SkeletonListMain from "../skeletonList/skeletonListMain/skeletonListMain";


const DishesLoader = ({ children }:any) => {
    const dispatch = useAppDispatch();
    const dishesList = useAppSelector(state => state.dishes.entities);
    const categoriesObjList = useAppSelector(state => state.categoriesObj.entities);

    useEffect(() => {
        fetchCategories().then((data) => dispatch(categoriesObjReceved(data)));
        fetchAll().then((data) => dispatch(dishesReceved(data)));
    }, []);

    if (dishesList.length < 1 && categoriesObjList.length < 1) {
        return (
            <SkeletonListMain count={3}/>
        )
    } else {
        return children
    }
}
 
export default DishesLoader;