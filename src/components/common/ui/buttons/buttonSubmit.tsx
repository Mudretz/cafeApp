import { FC } from "react";
import { useHistory } from "react-router-dom";
import styles from "./button.module.scss";

type Props = {
    path: string,
    name: string
}

const ButtonSubmit: FC<Props> = ({ path, name }) => {
    const history = useHistory();
    const handleSubmit = (path:string) => {
        history.push(path);
    }
    
    return (
        <div className={styles.button} onClick={() => handleSubmit(path)}>
            <p>{name}</p>
        </div>
    );
}
 
export default ButtonSubmit;