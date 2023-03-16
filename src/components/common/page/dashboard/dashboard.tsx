import { FC } from "react";
import HeaderDashboard from "../../../layouts/headerDashboard/headerDashboard";
import OrdersList from "./ordersList";

const Dashboard: FC = () => {
    return (
        <>
            <HeaderDashboard />
            <OrdersList />
        </>
    );
}
 
export default Dashboard;