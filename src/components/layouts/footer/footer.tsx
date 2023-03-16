import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>Кафе</div>
                    <div className={styles.nav}>
                        <p className={styles.name}>Кафе</p>
                        <p className={styles.item}>Публичная оферта</p>
                        <p className={styles.item}>Политики конфиденциальности</p>
                        <p className={styles.item}>О нас</p>
                    </div>
                    <div className={styles.contact}>
                        <p>Колл-центр</p>
                        <p className={styles.phone}>+7 (9999) 99‒99‒99</p>
                        <p className={styles.schedule}>График работы: c 8:00 до 22:00</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>© 2023 Кафе</div>
                    <div>Design and development</div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;