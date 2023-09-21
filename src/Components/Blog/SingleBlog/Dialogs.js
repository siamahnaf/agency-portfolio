import { Box, Stack, DialogTitle, DialogContent, DialogContentText, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';

//Styles
import styles from "Styles/Blog/Dialogs.styles";

const Dialogs = ({ blog, handleClose }) => {
    return (
        <>
            <DialogTitle id="scroll-dialog-title">
                <Stack direction="row">
                    <Typography variant="h6" component="h6" sx={{ flex: 1 }}>
                        Blog Details
                    </Typography>
                    <ButtonBase onClick={handleClose} sx={styles.CloseBtn}>
                        <CloseRoundedIcon />
                    </ButtonBase>
                </Stack>
            </DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText
                    id="scroll-dialog-description"
                    sx={{ color: "text.primary" }}
                >
                    <Box sx={styles.Content}>
                        <Box component="img" sx={styles.Image} src={blog.image} alt="Blog" />
                        <Box sx={styles.TopContainer}>
                            <Stack direction={{ lsm: "row", xxs: "column" }}>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    {blog.userLink &&
                                        <Link href={blog.userLink}>
                                            <a>
                                                <AccountCircleOutlinedIcon />
                                                {blog.user}
                                            </a>
                                        </Link>
                                    }
                                    {!blog.userLink &&
                                        <>
                                            <AccountCircleOutlinedIcon />
                                            {blog.user}
                                        </>
                                    }
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    <DateRangeRoundedIcon />
                                    {blog.time}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.BlogInfo}>
                                    <LocalOfferOutlinedIcon />
                                    {blog.category}
                                </Typography>
                            </Stack>
                            <Typography variant="h6" component="h6" sx={styles.BlogTitle}>
                                {blog.title}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="body1" component="p" sx={{ mt: { smd: "5em", lsm: "7em", sm: "1em" } }}>
                        {blog.description}
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </>
    );
};
export default Dialogs;