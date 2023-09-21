const styles = {
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