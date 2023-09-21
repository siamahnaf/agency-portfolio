const styles = {
    Container: {
        pt: {
            xxl: "25em",
            xl: "20em",
            lg: "15em",
            md: "10em",
            smd: "12em",
            lsm: "10em",
            msm: "9em",
            sm: "8em",
            xs: "7em",
            xxs: "6em"
        },
        pb: {
            xxl: "15em",
            xl: "12em",
            lg: "9em",
            md: "6em",
            smd: "3em",
            lsm: "5em",
            msm: "4em",
            sm: "4em",
            xs: "4em",
            xxs: "3.5em"
        },
        position: "relative",
        background: theme => theme.palette.primary.HeroGradient
    },
    HeroImage: {
        position: "absolute",
        right: {
            lg: "2%",
            xxs: "0%"
        },
        bottom: "0",
        width: {
            lg: "58%",
            md: "70%",
            smd: "65%",
            xxs: "0%"
        },
        display: {
            smd: "unset",
            xxs: "none"
        }
    },
    Paticle: {
        position: "absolute",
        left: "0",
        bottom: "2%",
        width: {
            smd: "35%",
            xxs: "90%"
        },
        height: "80%"
    }
};

export default styles;