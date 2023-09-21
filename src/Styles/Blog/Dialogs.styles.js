const styles = {
    CloseBtn: {
        px: "5px",
        borderRadius: "5px"
    },
    Content: {
        position: "relative",
        height: {
            md: "26em",
            smd: "21em",
            lsm: "20em",
            xxs: "auto"
        },
    },
    Image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "10px"
    },
    TopContainer: {
        position: {
            smd: "absolute",
            xxs: "initial"
        },
        backgroundColor: "background.default",
        bottom: "0",
        left: {
            md: "10%",
            sm: "3%"
        },
        right: {
            md: "10%",
            sm: "3%"
        },
        transform: {
            smd: "translateY(50%)",
            xxs: "translateY(0%)"
        },
        p: {
            smd: "25px 20px",
            xxs: "0px"
        },
        mt: {
            smd: "0px",
            xxs: "20px"
        },
        boxShadow: {
            smd: theme => `0 0 20px ${theme.palette.primary.box_shadow_black}`,
            xxs: "unset"
        },
        borderRadius: "10px"
    },
    BlogInfo: {
        mr: "3rem",
        mb: {
            lsm: "0px",
            xxs: "5px"
        },
        fontSize: "15px",
        a: {
            textDecoration: "none",
            color: "text.primary",
            transition: "0.2s ease"
        },
        svg: {
            fontSize: "20px",
            mr: "5px",
            mb: "-4px",
            color: "primary.main"
        },
        "&:hover": {
            a: {
                color: "primary.main"
            },
        }
    },
    BlogTitle: {
        mt: "5px",
        letterSpacing: "1px"
    }
};

export default styles;