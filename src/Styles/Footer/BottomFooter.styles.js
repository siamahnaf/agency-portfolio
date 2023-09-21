const styles = {
    Divider: {
        backgroundColor: "primary.divider",
        mt: "2em"
    },
    Terms: {
        button: {
            mx: "2px",
            px: "8px",
            fontSize: "15px",
            fontWeight: 500,
            position: "relative",
            py: "21px",
            transition: "0.2s ease",
            "&:after": {
                content: '""',
                backgroundColor: "primary.main",
                position: "absolute",
                top: "-1px",
                height: "2px",
                left: "6px",
                right: "10px",
                visibility: "hidden",
                opacity: 0,
                transition: "0.2s ease"
            },
            "&:hover": {
                color: "primary.main",
                "&:after": {
                    visibility: "visible",
                    opacity: 1
                }
            }
        }
    },
    Copyright: {
        flex: 1,
        fontWeight: 500,
        textAlign: {
            sm: "unset",
            xxs: "center"
        }
    }
};

export default styles;