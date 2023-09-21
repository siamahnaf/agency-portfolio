import { useState } from 'react';
import { Box, Typography, InputBase, ButtonBase, CircularProgress } from "@mui/material";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

//Icon
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ErrorIcon from '@mui/icons-material/Error';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

//Styles
import styles from "Styles/Footer/FooterThree.styles"

const FooterThree = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data, e) => {
        setLoading(true);
        emailjs.sendForm('service_p6xyx8c', 'template_50go8lq', e.target, 'user_a3mibtvU72r4yERjbA9dj')
            .then((result) => {
                setLoading(false);
                setSuccess(true);
                setMessage('Email received! We will contact you soon.');
                reset();
            }, (error) => {
                setLoading(false);
                setSuccess(false);
                setMessage('Something went wrong. Try again!');
            });
    }
    return (
        <Box>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Newsletters
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                Let&apos;s be friends and get interesting news about us
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <InputBase
                    placeholder="Write Email"
                    sx={styles.InputField}
                    {...register(
                        'email',
                        {
                            required: 'Please enter an email addreess!',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'The email you enter is invalid email!',
                            },
                        },
                        { required: true }
                    )}
                />
                {errors.email && (
                    <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                        <ErrorIcon />{errors.email.message}
                    </Typography>
                )}
                <ButtonBase
                    type="submit"
                    sx={{
                        ...styles.SubmitButton,
                        backgroundColor: `${success ? "primary.success" : "primary.main"}`
                    }}
                >
                    {!loading && !message &&
                        <>
                            Subscribe
                            <ArrowForwardTwoToneIcon />
                        </>
                    }
                    {loading &&
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress sx={{ color: "background.default" }} size={22} />
                        </Box>
                    }
                    {message && !loading &&
                        <>
                            {success &&
                                <Box>
                                    <DoneIcon sx={{ fontSize: "35px" }} />
                                </Box>
                            }
                            {!success &&
                                <Box>
                                    <CloseIcon sx={{ fontSize: "35px" }} />
                                </Box>
                            }
                        </>
                    }
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default FooterThree;