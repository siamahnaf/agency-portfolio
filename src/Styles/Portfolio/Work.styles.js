const styles = {
    ImageContainer: {
        width: {
            md: "350px",
            smd: "280px",
            lsm: "250px",
            msm: "230px",
            sm: "190px",
            xxs: "100%"
        },
        height: "auto",
        position: "relative",
        a: {
            textDecoration: "none",
            color: "text.primary",
            img: {
                width: "100%",
                height: "100%"
            }
        }
    },
    ImageBox: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        img: {
            transition: "all 1.2s cubic-bezier(0, 0, 0.2, 1)",
            width: "100%"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "primary.main",
            opacity: "0.3",
            transition: "all 0.5s cubic-bezier(0, 0, 0.2, 1)",
            transformOrigin: "top left",
            transform: "scaleY(0)",
            visibility: "hidden",
            zIndex: 1
        },
        "& .css-mui-svg": {
            backgroundColor: "primary.main",
            color: "background.default",
            position: "absolute",
            top: "25%",
            left: "50%",
            width: "44px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(-50%, -50%) scaleY(0)",
            transition: "all 0.4s cubic-bezier(0, 0, 0.2, 1)",
            opacity: 0,
            visibility: "hidden"
        },
        "&:hover": {
            img: {
                transform: "scale3d(1.1, 1.1, 1.1)"
            },
            "&:before": {
                transform: "scaleY(1)",
                visibility: "visible",
            },
            "& .css-mui-svg": {
                visibility: "visible",
                opacity: 1,
                transform: "translate(-50%, -50%) scaleY(1)",
                top: "50%",
                zIndex: 9
            }
        }
    },
    WorkTitle: {
        position: "absolute",
        left: {
            lsm: "-14%",
            msm: "-8%",
            sm: "-6%",
            xxs: "-6%"
        },
        bottom: "20%",
        width: "20%",
        textAlign: "left",
        fontWeight: 700,
        fontSize: {
            smd: "1.5rem",
            lsm: "1.2rem",
            sm: "1rem",
            xxs: "1.2rem"
        },
        transition: "0.3s ease",
        "&:hover": {
            color: "primary.main"
        }
    }
};

export default styles;