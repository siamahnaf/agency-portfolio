const styles = {
    SeeProjectBtn: {
        backgroundColor: "primary.main",
        color: "background.default",
        p: "12px 18px",
        fontSize: "15px",
        fontWeight: 500,
        border: "1px solid transparent",
        transition: "0.3s ease",
        svg: {
            fontSize: "18px",
            ml: "8px",
            mb: "-1px"
        },
        "&:hover": {
            backgroundColor: "transparent",
            color: "text.primary",
            borderColor: "text.primary"
        },
        display: {
            sm: "unset",
            xxs: "none"
        },
    },
    ToogleButton: {
        ml: "10px",
        display: "block",
        p: "0 10px",
        div: {
            width: "25px",
            height: "3px",
            m: "6px 0",
            backgroundColor: "text.primary",
            transition: "0.4s ease",
            "&.ripple1": {
                width: "20px",
                ml: "auto"
            },
            "&.ripple3": {
                width: "20px",
            }
        },
        "&.active, &:hover": {
            div: {
                backgroundColor: "primary.main",
                "&.ripple1": {
                    width: "25px",
                },
                "&.ripple3": {
                    width: "25px",
                }
            }
        }
    },
    Drawer: {
        zIndex: '9999999999',
        '& .MuiDrawer-paper': {
            width: {
                xxl: "28%",
                xl: "30%",
                lg: "32%",
                md: "36%",
                smd: "50%",
                msm: "65%",
                sm: "70%",
                xs: "80%",
                xxs: "85%"
            },
            py: {
                sm: "2.5em",
                xs: "1.5em",
                xxs: "1em"
            },
            px: {
                sm: "2em",
                xs: "1em",
                xxs: "0.8em"
            }
        }
    },
};

export default styles;