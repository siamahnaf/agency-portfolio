const styles = {
    Title: {
        fontWeight: 700,
        fontSize: {
            sm: "2rem",
            xs: "1.6rem",
            xxs: "1.5rem"
        },
        mb: "15px"
    },
    Description: {
        mb: "12px",
        fontSize: "15px"
    },
    ButtonContainer: {
        a: {
            textDecoration: "none",
            color: "text.primary",

        }
    },
    Button: {
        backgroundColor: "primary.light",
        p: "14px 25px",
        mt: "15px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        svg: {
            color: "background.default",
            fontSize: "17px",
            ml: "10px",
            mb: "-3px"
        },
        transition: "0.3s ease",
        "&:hover": {
            backgroundColor: "primary.main",
            color: "background.default"
        }
    }
};

export default styles;