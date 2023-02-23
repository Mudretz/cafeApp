import { FC } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Корзина",
  "Адрес доставки",
  "Подтверждение",
];

type Props = {
    step: number
}

const Steper: FC<Props> = ({ step }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} sx={{
            "& .MuiStepLabel-root .Mui-completed": {
              color: "#2e7d32"
            },
            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
              {
                color: "grey.700",
                fontWeight: "light"
              },
            "& .MuiStepLabel-root .Mui-active": {
              color: "#fa4c43"
            },
            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
              {
                color: "black"
              },
            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
              color: "white"
            },
          }}>
            <StepLabel sx={{ color: "#fa4c43" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steper;