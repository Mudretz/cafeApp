import { FC } from "react";
import { Skeleton, Stack } from "@mui/material";
import styles from "./skeletonListMain.module.scss";

type Props = {
    count: number
}

const SkeletonListMain: FC<Props> = ({ count }) => {
    return (
        <>
            <Skeleton variant="rounded" height={90}/>
            <main>
                <Skeleton variant="rounded" className={styles.slider}/>
                <div className="container">
                    {Array(count)
                        .fill(1)
                        .map((item, index) => (
                            <Stack key={index}>
                                <Skeleton variant="rounded" height={220} className={styles.card}/>
                            </Stack>
                        ))}
                </div>
            </main>
        </>
    );
}
 
export default SkeletonListMain;