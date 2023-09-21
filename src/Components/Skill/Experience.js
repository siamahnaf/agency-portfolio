import { Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Data
import Experiences from "Data/Skill/Experience.data";

//Styles
import styles from "Styles/Skill/Experience.styles";

const Experience = () => {
    return (
        <Box sx={{ mb: { md: "0px", xxs: "20px" } }}>
            <Typography variant="h4" component="h4" sx={styles.Title}>
                {Experiences.title1}<br />
                {Experiences.title2}
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                {Experiences.description}
            </Typography>
            <Box sx={styles.ButtonContainer}>
                <Link href={Experiences.btnUrl}>
                    <a>
                        <ButtonBase sx={styles.Button}>
                            {Experiences.btnText}
                            <ArrowForwardTwoToneIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Box>
        </Box>
    );
};
export default Experience;