import { useState } from "react";
import { Box, Grid, Stack, Typography, ButtonBase, Dialog } from "@mui/material";

//Icons
import { ClendarIcon } from "Utilis/Icons";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Components
import Dialogs from "./SingleBlog/Dialogs";

//Data
import Blogs from "Data/Blog/Blogs.data";

//Styles
import styles from "Styles/Blog/SingleBlog.styles";

const SingleBlog = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = (index) => () => {
        setOpen(index);
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
        <Box sx={{ mt: "4rem", mb: "5.5em" }}>
            <Grid container spacing={4}>
                {Blogs &&
                    Blogs.map((blog, i) => (
                        <Grid item md={4} lsm={6} xxs={12} key={i}>
                            <Box sx={styles.BoxContainer}>
                                <Box component="img" src={blog.image} alt={blog.title} sx={styles.Image} />
                                <Box sx={styles.Content}>
                                    <Typography variant="body1" component="p" sx={styles.Category}>
                                        {blog.category}
                                    </Typography>
                                    <Typography variant="h6" component="h6" sx={styles.Title}>
                                        {blog.title}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        sx={{ alignItems: "center" }}
                                    >
                                        <Box sx={styles.TimeIcon}>
                                            <ClendarIcon />
                                        </Box>
                                        <Typography variant="body1" component="p" sx={styles.TimeText}>
                                            {blog.time}
                                        </Typography>
                                    </Stack>
                                    <ButtonBase sx={styles.Button} onClick={handleClickOpen(i)}>
                                        Read More
                                        <ArrowForwardTwoToneIcon />
                                    </ButtonBase>
                                    <Dialog
                                        open={open === i}
                                        onClose={handleClose}
                                        scroll="paper"
                                        maxWidth="md"
                                        TransitionProps={{
                                            onExited: () => {
                                                RemovePadding();
                                            }
                                        }}
                                    >
                                        <Dialogs
                                            blog={blog}
                                            handleClose={handleClose}
                                        />
                                    </Dialog>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box >
    );
};
export default SingleBlog;