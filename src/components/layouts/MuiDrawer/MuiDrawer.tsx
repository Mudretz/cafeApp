import React, { FC } from "react";
import { IconButton, Drawer, Box } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import styles from "./MuiDrawer.module.scss";
import { Categories } from "../../../types/types";

type Props = {
  list: Categories[]
};

const MuiDrawer:FC <Props> = ({ list }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    return (
    <div className={styles.menu}>
        <IconButton aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
        <div>
            <div className={styles.columns_menu}></div>
            <div className={styles.columns_menu}></div>
            <div className={styles.columns_menu}></div>
        </div>
        </IconButton>
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
        <Box p={0} width="100%" textAlign={"center"} role="presentation" height={"90%"}>
            <div className={styles.modal__menu__header}>
                <IconButton onClick={() => setIsDrawerOpen(false)} edge={"start"}>
                  <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider />
            <div className={styles.modal__menu}>
                <div>
                    {list.map((item) => (
                        <NavLink to={item.url} activeClassName={styles.active} key={item.id}>
                            <div className={styles.modal__nav__item} onClick={() => setIsDrawerOpen(false)}>
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                </div>
                <div>
                    <div className={styles.modal__menu__contact}>
                        <p className={styles.schedule}>График работы: c 8:00 до 22:00</p>
                        <p className={styles.phone}>+7 (3952) 66‒29‒19</p>
                    </div>
                </div>
            </div>
        </Box>
      </Drawer>
    </div>
  )
}

export default React.memo(MuiDrawer);