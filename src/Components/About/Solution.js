import { Box, Grid, Typography } from "@mui/material";

//Data
import Solutions from "Data/About/Solution.data";

//Styles
import styles from "Styles/About/Solution.styles";

const Solution = () => {
    return (
        <Box sx={{ mt: "4em" }}>
            <Grid container spacing={2}>
                {Solutions &&
                    Solutions.map((solution, i) => (
                        <Grid item md={3} sm={6} xxs={12} key={i}>
                            <Box sx={{ textAlign: "center" }}>
                                <Box sx={styles.Image} component="img" src={solution.icon} />
                                <Typography variant="h6" component="h6" sx={styles.Title}>
                                    {solution.title}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.Description}>
                                    {solution.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Solution;