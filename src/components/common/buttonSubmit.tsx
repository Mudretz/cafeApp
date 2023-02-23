import { FC } from "react";
import { useHistory } from "react-router-dom";

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
        <div className="button" onClick={() => handleSubmit(path)}>
            <p>{name}</p>
        </div>
    );
}
 
export default ButtonSubmit;