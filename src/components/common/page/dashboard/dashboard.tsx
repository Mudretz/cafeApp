import React, { FC, useState } from "react";
import { ListItemIcon, ListItemText, Drawer, Container, Box, List, ListItemButton }  from "@mui/material";
import AllDishes from "../pagesList/allDishes";
import AddDishComp from "../../ui/addDish/addDishComp";
import OrdersList from "./ordersList";
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./dashboard.module.scss";

const Dashboard: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(2);
    const [state, setState] = useState(false);
    const arrItems = ["Заказы", "Добавить блюдо", "Список блюд"];

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setState(open);
    };

    return (
        <main>
            <Drawer
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} 
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >   
                    <div className={styles.menu}>
                        Меню
                    </div>
                    <List component="nav" aria-label="main mailbox folders">
                        {arrItems.map((item, index) => (
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}
                                    key={index}
                                >
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Container maxWidth="xl">
                <MenuIcon onClick={toggleDrawer(true)} style={{ cursor: "pointer", color: "#fa4c43"}} fontSize="large"/>
            </Container>
            {selectedIndex === 1 && <AddDishComp />}
            {selectedIndex === 0 && <OrdersList />}
            {selectedIndex === 2 && <AllDishes />}
        </main>
    );
}
 
export default Dashboard;