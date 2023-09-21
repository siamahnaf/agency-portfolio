import { useState } from "react";
import { Stack, Box, Divider, ButtonBase, Typography, Dialog } from "@mui/material";

//Components
import Privacy from "./BottomFooter/Privacy";
import Terms from "./BottomFooter/Terms";

//Styles
import styles from "Styles/Footer/BottomFooter.styles";

const BottomFooter = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = (name) => () => {
        setOpen(name);
        const header = document.querySelector('header');
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = `${scrollBarWidth}px`;
    };
    const handleClose = () => {
        setOpen(false);
    };
    const RemovePadding = () => {
        const header = document.querySelector('header');
        header.style.paddingRight = "0px";
    }
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Box sx={{ display: { smd: "block", xxs: "none" } }}>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Typography variant="body1" component="p" sx={styles.Copyright}>
                        © {new Date().getFullYear()} Code Station 21. All Rights Reserved.
                    </Typography>
                    <Stack direction="row" sx={styles.Terms}>
                        <ButtonBase>
                            Purchase
                        </ButtonBase>
                        <ButtonBase onClick={handleClickOpen('privacy')}>
                            Privacy Policy
                        </ButtonBase>
                        <ButtonBase onClick={handleClickOpen('terms')}>
                            Terms of Service
                        </ButtonBase>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ display: { smd: "none", xxs: "block" }, mb: "20px" }}>
                <Stack sx={{ alignItems: "center", mb: { sm: "0px", xxs: "20px" } }}>
                    <Stack direction="row" sx={styles.Terms}>
                        <ButtonBase>
                            Purchase
                        </ButtonBase>
                        <ButtonBase onClick={handleClickOpen('privacy')}>
                            Privacy Policy
                        </ButtonBase>
                        <ButtonBase onClick={handleClickOpen('terms')}>
                            Terms of Service
                        </ButtonBase>
                    </Stack>
                    <Typography variant="body1" component="p" sx={styles.Copyright}>
                        © {new Date().getFullYear()} Code Station 21. All Rights Reserved.
                    </Typography>
                </Stack>
            </Box>
            <Dialog
                open={open === 'privacy'}
                onClose={handleClose}
                scroll="paper"
                maxWidth="md"
                TransitionProps={{
                    onExited: () => {
                        RemovePadding();
                    }
                }}
            >
                <Privacy
                    handleClose={handleClose}
                />
            </Dialog>
            <Dialog
                open={open === 'terms'}
                onClose={handleClose}
                scroll="paper"
                maxWidth="md"
                TransitionProps={{
                    onExited: () => {
                        RemovePadding();
                    }
                }}
            >
                <Terms
                    handleClose={handleClose}
                />
            </Dialog>
        </Box>
    );
};
export default BottomFooter;