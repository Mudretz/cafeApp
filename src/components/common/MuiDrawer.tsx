import { IconButton, Drawer, Box } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="menu">
      <IconButton aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
        <div>
            <div className="columns_menu"></div>
            <div className="columns_menu"></div>
            <div className="columns_menu"></div>
        </div>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={0} width="100%" textAlign={"center"} role="presentation" height={"90%"}>
            <div className="modal__menu__header">
                <IconButton onClick={() => setIsDrawerOpen(false)} edge={"start"}>
                  <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider />
            <div className="modal__menu">
              <div>
                <NavLink to="/hot_dishes" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Горячее
                  </div>
                </NavLink>
                <NavLink to="/soups" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Супы
                  </div>
                </NavLink>
                <NavLink to="/buryat_cuisine" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Бурятская кухня
                  </div>
                </NavLink>
                <NavLink to="/salats" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Салаты
                  </div>
                </NavLink>
                <NavLink to="/drinks" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Напитки
                  </div>
                </NavLink>
                <NavLink to="/other" activeClassName="active">
                  <div className="modal__nav__item" onClick={() => setIsDrawerOpen(false)}>
                      Разное
                  </div>
                </NavLink>
              </div>
                <div>
                    <div className="modal__menu__contact">
                        <p className="schedule">График работы: c 8:00 до 22:00</p>
                        <p className="phone">+7 (3952) 66‒29‒19</p>
                    </div>
                </div>
            </div>
        </Box>
      </Drawer>
    </div>
  )
}