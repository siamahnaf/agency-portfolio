import { useState } from 'react';
import { Box, Grid, InputBase, InputAdornment, ButtonBase, Typography, CircularProgress } from "@mui/material";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

//Icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ErrorIcon from '@mui/icons-material/Error';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

//Styles
import styles from "Styles/Contact/Form.styles";

const Form = () => {
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
        emailjs.sendForm('service_p6xyx8c', 'template_a83tz89', e.target, 'user_a3mibtvU72r4yERjbA9dj')
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
        <Box sx={{ mt: "3em" }} component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={{ md: 2, sm: 3, xxs: 2 }}>
                <Grid item md={3} lsm={6} xxs={12}>
                    <InputBase
                        placeholder="Your Full Name"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <PersonOutlineOutlinedIcon />
                                </Box>
                            </InputAdornment>
                        }
                        sx={styles.InputField}
                        {...register('name', { required: true })}
                    />
                    {errors.name && errors.name.type === 'required' && (
                        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                            <ErrorIcon />
                            Please Enter Your Name!
                        </Typography>
                    )}
                </Grid>
                <Grid item md={3} lsm={6} xxs={12}>
                    <InputBase
                        placeholder="Email Address"
                        endAdornment={
                            <InputAdornment position="end">
                                <Box sx={styles.Icon}>
                                    <MailOutlineIcon />
                                </Box>
                            </InputAdornment>
                        }
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
                </Grid>
                <Grid item md={3} lsm={6} xxs={12}>
                    <InputBase
                        placeholder="Write Message"
                        multiline
                        minRows={1.5}
                        maxRows={5}
                        sx={styles.MessageFiled}
                        {...register(
                            'message',
                            {
                                required: 'Please add your message!',
                                minLength: {
                                    value: 25,
                                    message: 'Message should not be less than 25 characters!',
                                },
                                maxLength: {
                                    value: 1000,
                                    message: 'Message should not be more than 1000 characters!'
                                }
                            },
                            { required: true }
                        )}
                    />
                    {errors.message && (
                        <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                            <ErrorIcon />
                            {errors.message.message}
                        </Typography>
                    )}
                </Grid>
                <Grid item md={3} lsm={6} xxs={12}>
                    <Box>
                        <ButtonBase
                            type="submit"
                            sx={{
                                ...styles.SubmitButton,
                                backgroundColor: `${success ? "primary.success" : "primary.main"}`
                            }}
                        >
                            {!loading && !message &&
                                <>
                                    Send Message
                                    <ArrowForwardTwoToneIcon className="css-svg-icon" />
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
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            ...styles.SendText,
                            color: `${success ? "primary.success" : "primary.main"}`
                        }}
                    >
                        {message}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Form;