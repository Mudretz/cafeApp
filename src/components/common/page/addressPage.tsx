import { TextField } from "@mui/material";
import { FC } from "react";
import Steper from "../steper";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackButton from "../backButton";
import ButtonSubmit from "../buttonSubmit";

const addressPage: FC = () => {
    return (
        <main>
            <BackButton />
            <div className="container address__page">
                <Steper step={1}/>
                <div>
                    <h2>Укажите ваше имя</h2>
                    <TextField id="filled-basic" label="Имя" variant="outlined" sx={{ width: "300px"}}/>
                </div>
                <div>
                    <h2>Укажите адрес доставки</h2>
                    <TextField id="filled-basic" label="Адрес" variant="outlined" sx={{ width: "300px"}}/>
                </div>
                <div>
                    <h2>Укажите номер телефона</h2>
                    <TextField id="filled-basic" label="+7-9__ ___ __ __" variant="outlined" sx={{ width: "300px"}}/>
                </div>
                <ButtonSubmit path="/сonfirmation" name="Потдвердить"/>
            </div>
        </main>
    );
}
 
export default addressPage;