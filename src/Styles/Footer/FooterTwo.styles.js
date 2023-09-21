const styles = {
    Title: {
        fontWeight: 700,
        mb: "1.8em"
    },
    Services: {
        mb: "12px",
        width: "max-content",
        "& p": {
            cursor: "pointer",
            transition: "0.5s",
            svg: {
                fontSize: "20px",
                mb: "-3px",
                mr: "5px"
            }
        },
        "&:hover": {
            "& p": {
                color: "primary.main",
                letterSpacing: "1.5px"
            }
        }
    }
};

export default styles;