import { Box, Typography } from "@mui/material";

//Icons
import DoneIcon from '@mui/icons-material/Done';

//Data
import Services from "Data/Footer/Services.data";

//Styles
import styles from "Styles/Footer/FooterTwo.styles";

const FooterTwo = () => {
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Services
            </Typography>
            {Services &&
                Services.map((service, i) => (
                    <Box key={i} sx={styles.Services}>
                        <Typography variant="body1" component="p">
                            <DoneIcon />
                            {service}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    );
};
export default FooterTwo;