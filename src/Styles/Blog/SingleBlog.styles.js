const styles = {
    BoxContainer: {
        backgroundColor: "background.default",
        borderRadius: "30px",
        boxShadow: theme => `12px 6px 40px ${theme.palette.primary.box_show_blog}`,
    },
    Image: {
        borderRadius: "30px 30px 0 0",
        width: "100%"
    },
    Content: {
        p: "2em",
        position: "relative"
    },
    Category: {
        position: "absolute",
        top: "-3%",
        backgroundColor: "background.default",
        p: "5px 15px",
        borderRadius: "5px",
        transform: "translateY(-50%)",
        boxShadow: theme => `0 0 14px ${theme.palette.primary.box_shadow_blog_2}`
    },
    Title: {
        fontWeight: 700,
        letterSpacing: "1.2px",
        mb: "15px",
        fontSize: {
            lg: "1.25rem",
            md: "1.2rem"
        }
    },
    TimeIcon: {
        mb: "-4px",
        mr: "5px",
        svg: {
            fontSize: "18px"
        }
    },
    TimeText: {
        fontSize: "15px",
        fontWeight: 500
    },
    Button: {
        backgroundColor: "primary.light",
        p: "14px 25px",
        mt: "30px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        svg: {
            color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-1px"
        },
        transition: "0.3s ease",
        "&:hover": {
            backgroundColor: "primary.main",
            color: "background.default"
        }
    }
};

export default styles;