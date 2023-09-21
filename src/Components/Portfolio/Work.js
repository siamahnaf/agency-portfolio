import { Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

//Icons
import { PlusIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Portfolio/Work.styles";

const Work = ({ works }) => {
    return (
        <Grid container rowSpacing={6} columnSpacing={{ xxl: 45, md: 22, smd: 10, lsm: 8, msm: 4, sm: 2, xxs: 2 }}>
            {works &&
                works.map((work, i) => (
                    <Grid item sm={6} xxs={12} key={i}>
                        <Box sx={{
                            ...styles.ImageContainer,
                            marginLeft: {
                                lsm: `${i % 2 ? "unset" : "auto"}`,
                                sm: "unset"
                            }
                        }}>
                            <Link href={work.url}>
                                <a target="_blank">
                                    <Box sx={styles.ImageBox}>
                                        <Box component="img" src={work.image} />
                                        <Box className="css-mui-svg">
                                            <PlusIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={styles.WorkTitle}
                                    >
                                        {work.name}
                                    </Typography>
                                </a>
                            </Link>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
};
export default Work;