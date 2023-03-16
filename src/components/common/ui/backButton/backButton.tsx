import { FC } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";
import styles from "./backButton.module.scss";

const BackButton: FC = () => {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    }
    return (
        <div className={styles.back__button} onClick={handleBack}>
            <ArrowBackIcon/>
            <p>Вернуться назад</p>
        </div>
    );
}
 
export default BackButton;