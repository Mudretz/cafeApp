import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="logo">Амритта</div>
                    <div className="info__footer">
                        <p className="name">Сеть-кафе Амритта</p>
                        <p className="footer__nav">Публичная оферта</p>
                        <p className="footer__nav">Политики конфиденциальности</p>
                        <p className="footer__nav">О нас</p>
                    </div>
                    <div className="footer__contact">
                        <p>Колл-центр</p>
                        <p className="contact__phone">+7 (3952) 66‒29‒19</p>
                        <p className="schedule">График работы: c 8:00 до 22:00</p>
                    </div>
                </div>
                <div className="footer__info">
                    <div>© 2023 Кафе Амритта</div>
                    <div>Design and development Zhamso Gungaev</div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;