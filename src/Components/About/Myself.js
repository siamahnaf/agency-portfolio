import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Let&apos;s Something <br />
                    Know Great About Us
                </Typography>
                <Typography variant="body1" component="p" className="sdjh" sx={styles.Description}>
                    We are a group of professional software developer
                    team that run by enthusiast for coding and design.
                </Typography>
                <Box sx={{ my: "28px" }}>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            100% client satisfaction
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Quality Service
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                            Lifetime aftersales supports
                        </Typography>
                    </Stack>
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        Contact Us
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={AboutImage} alt="About" sx={styles.Image} />
        </Box>
    );
};
export default Myself;