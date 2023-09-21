import { Box, Grid, Divider } from "@mui/material";

// Data
import Companys from "Data/Blog/Company.data";

//Styles
import styles from "Styles/Blog/Company.styles";

const Company = () => {
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Grid container spacing={3} sx={{ alignItems: "center" }}>
                {Companys &&
                    Companys.map((company, i) => (
                        <Grid item msm={3} xxs={6} key={i}>
                            <Box sx={{ textAlign: "center" }}>
                                <Box component="img" sx={styles.Image} src={company.logo} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Company;