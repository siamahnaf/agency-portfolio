const styles = {
    CrossButton: {
        backgroundColor: "primary.main",
        p: {
            xs: "8px",
            xxs: "3px"
        },
        mb: "5px",
        ml: {
            xs: "0px",
            xxs: "10px"
        },
        borderRadius: "50%",
        color: "background.default",
        border: "1px solid transparent",
        transition: "0.3s ease",
        "&:hover": {
            backgroundColor: "transparent",
            color: "text.primary",
            borderColor: "text.primary"
        }
    },
    Description: {
        mt: "3em",
        mb: "2em",
        fontSize: "15px",
        display: {
            md: "block",
            xxs: "none"
        }
    },
    Navs: {
        textAlign: "left",
        my: "2em",
        a: {
            m: "0 5px",
            display: "block",
            borderBottom: theme => `1px solid ${theme.palette.primary.box_shadow_black}`,
            pb: "5px",
            "&.active": {
                button: {
                    color: "primary.main"
                }
            }
        },
        display: {
            md: "none",
            xxs: "block"
        }
    },
    Buttons: {
        fontSize: "16px",
        borderRadius: "5px",
        p: "5px 10px",
        fontWeight: 600
    },
    Address: {
        mt: "15px",
        alignItems: "start",
        svg: {
            fontSize: "20px",
            mr: "5px"
        },
        "& p": {
            fontSize: "15px",
            fontWeight: 500
        },
        a: {
            textDecoration: "none",
            color: "text.primary",
            transition: "0.2s ease",
            "& p": {
                fontSize: "15px",
                fontWeight: 500
            },
            "&:hover": {
                color: "primary.main",
            }
        }
    },
    Social: {
        mt: "25px",
        a: {
            color: "primary.social_color",
            textDecoration: "none",
            button: {
                backgroundColor: "primary.social_bg",
                m: "0 5px",
                p: "14px",
                borderRadius: "8px",
                transition: "all 0.3s linear 0s",
                svg: {
                    fontSize: "16px",
                    transition: "0.3s",
                },
                "&:hover": {
                    backgroundColor: "primary.main",
                    svg: {
                        color: "background.default",
                        transform: "rotate(360deg)"
                    }
                }
            }
        }
    }
};

export default styles;