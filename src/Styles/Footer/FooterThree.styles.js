const styles = {
    Title: {
        fontWeight: 700,
        mb: "1.7em"
    },
    Description: {
        fontSize: "16px",
        color: "primary.social_color",
        fontWeight: 500,
        mb: "20px"
    },
    InputField: {
        backgroundColor: "background.default",
        border: theme => `1px solid ${theme.palette.primary.inputBorder}`,
        p: "6px 15px",
        borderRadius: "8px",
        width: "100%"
    },
    SubmitButton: {
        backgroundColor: "primary.main",
        width: "78%",
        height: "52px",
        mt: "10px",
        fontSize: "14px",
        fontWeight: 600,
        color: "background.default",
        borderRadius: "8px",
        ">svg": {
            fontSize: "18px",
            mb: "-3px",
            ml: "10px"
        }
    },
    ErrorMessage: {
        mt: "5px",
        color: "primary.main",
        svg: {
            mb: '-2px',
            mr: '5px',
            fontSize: "16px"
        }
    },
    SendText: {
        mt: "5px",
        fontSize: "15px",
        fontWeight: 500
    }
};

export default styles;