import { Box, Typography, Divider } from "@mui/material";

//Styles
import styles from "Styles/Utilis/SectionHeading.styles";

const SectionHeading = ({ value1, value2, border }) => {
    return (
        <Box sx={{ textAlign: `${border ? "center" : "left"}` }}>
            <Typography
                variant="h5"
                component="h5"
                sx={{
                    ...styles.Heading,
                    margin: `${border ? "0 auto" : "unset"}`
                }}
            >
                {value1} <br />
                {value2}
                {border &&
                    <Divider variant="middle" sx={styles.Divider} />
                }
            </Typography>
        </Box>
    );
};
export default SectionHeading;