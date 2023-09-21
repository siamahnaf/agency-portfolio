const styles = {
    Container: {
        width: {
            smd: "35%",
            xxs: "100%"
        },
        position: "relative",
        zIndex: "1"
    },
    Title: {
        fontWeight: 800,
        fontSize: {
            md: "3rem",
            smd: "2rem",
            msm: "3rem",
            sm: "2.5rem",
            xs: "2.2rem",
            xxs: "2rem"
        },
        mb: "10px"
    },
    Slogan: {
        fontWeight: 500,
        fontSize: "20px"
    },
    Description: {
        mt: "20px",
        mb: "10px",
        fontSize: "15px",
        fontWeight: 400,
        pl: "12px",
        position: "relative",
        "&:after": {
            content: '""',
            width: "3px",
            backgroundColor: "primary.main",
            position: "absolute",
            left: "0",
            top: "6px",
            bottom: "6px"
        }
    },
    Button: {
        backgroundColor: "primary.light",
        p: "14px 25px",
        mt: "15px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        transition: "0.3s ease",
        svg: {
            color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-1px"
        },
        "&:hover": {
            backgroundColor: "primary.main",
            color: "background.default"
        }
    }
};

export default styles;