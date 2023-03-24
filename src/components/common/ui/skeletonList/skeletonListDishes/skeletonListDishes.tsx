import { FC } from "react";
import { Skeleton, Stack } from "@mui/material";
import styles from "./skeletonListDishes.module.scss";

type Props = {
    count: number
}

const SkeletonListDishes: FC<Props> = ({ count }) => {
    return (
         <>
            {Array(count)
                .fill(1)
                .map((item, index) => (
                    <Stack key={index}>
                        <div className={styles.card}>
                            <Skeleton variant="rounded" height={390}/>
                        </div>
                    </Stack>
                ))}
        </>
    );
}
 
export default SkeletonListDishes;