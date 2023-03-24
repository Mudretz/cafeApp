import { FC } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IconButton, Tooltip } from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Basket } from "../../../../types/types";
import styles from "./modalBasketWindow.module.scss";

type Props = {
    basket: Basket[],
    handleAdd: (id: string, price: number) => void,
    handleRemove: (id: string, price: number) => void,
    handleDelete: (id: string, price: number, count: number) => void,
}

const ModalBasketWindow: FC<Props> = ({ basket, handleAdd, handleRemove, handleDelete }) => {
    
    return (
        <TransitionGroup>
            {basket.map((item) => (
                <CSSTransition key={item.id} timeout={300} classNames="node">
                    <div className={styles.content}>
                        <div className={styles.basket__img}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.description__item}>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.weight}>{item.weight}</div>
                            </div>
                            <div className={styles.description__item}>
                                <div className={styles.count}>
                                    <Tooltip title="Убавить" className={styles.count__icon}>
                                        <IndeterminateCheckBoxIcon
                                            sx={{ color: "#fa4c43" }}
                                            fontSize={"medium"}
                                            className={styles.icon__busket}
                                            onClick={() => handleRemove(item.id, item.price)}
                                        />
                                    </Tooltip>
                                    <div className={styles.count__item}>{item.count}</div>
                                    <Tooltip title="Добавить" className={styles.count__icon}>
                                        <AddBoxIcon
                                            sx={{ color: "#fa4c43" }}
                                            fontSize={"medium"}
                                            className={styles.icon__busket}
                                            onClick={() => handleAdd(item.id, item.price)}
                                        />
                                    </Tooltip>
                                </div>
                                <div className={styles.price}>{`${item.price * item.count} р.`}</div>
                                <Tooltip title="Удалить">
                                    <IconButton  onClick={() => handleDelete(item.id, item.price, item.count)}>
                                        <DeleteIcon sx={{ color: "#fa4c43" }} fontSize={"medium"}/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
 
export default ModalBasketWindow;