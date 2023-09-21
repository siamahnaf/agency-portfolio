const styles = {
    Embla: {
        overflow: "hidden",
        px: {
            md: "10%",
            sm: "3%",
            xxs: "3%"
        },
        pt: "5em",
    },
    EmblaContainer: {
        display: "flex"
    },
    EmblaSlide: {
        position: "relative",
        flex: {
            lg: "0 0 40%",
            md: "0 0 55%",
            smd: "0 0 70%",
            lsm: "0 0 80%",
            msm: "0 0 90%",
            xs: "0 0 90%",
            xxs: "0 0 100%"
        },
        backgroundColor: "background.default",
        boxShadow: theme => `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
        mx: "15px",
        px: "2em",
        textAlign: "center",
        borderRadius: "35px",
        mt: "10px",
    },
    Avatar: {
        width: 120,
        height: 120,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: theme => `15px solid ${theme.palette.background.default}`,
        boxShadow: theme => `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
    },
    Title: {
        textTransform: "uppercase",
        mb: "6px",
        fontWeight: 600,
        fontSize: "20px"
    },
    Description: {
        fontSize: "15px",
        mt: "12px"
    },
    Name: {
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translate(-50%, 50%)",
        backgroundColor: "primary.main",
        color: "white",
        fontSize: "16px",
        fontWeight: 700,
        p: "12px 20px",
        borderRadius: "15px"
    },
    Navigation: {
        mt: "3em",
        mb: "10px",
        button: {
            backgroundColor: "background.default",
            boxShadow: theme => `3px 4px 3px ${theme.palette.primary.box_shadow_client}`,
            p: "8px",
            m: "0 5px",
            borderRadius: "4px",
            svg: {
                fontSize: "20px"
            }
        }
    }
}

export default styles;