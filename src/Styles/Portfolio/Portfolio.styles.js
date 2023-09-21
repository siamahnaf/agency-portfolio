const styles = {
    Container: {
        overflow: "hidden",
        py: "5em",
        position: "relative",
        "&:after": {
            content: '""',
            background: theme => theme.palette.primary.WorkGradient,
            width: "100%",
            height: "50em",
            padding: " ",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-2"
        }
    },
    Particle: {
        position: "absolute",
        top: "5%",
        width: "90%",
        height: "40em",
        zIndex: "-1"
    },
    ButtonGroup: {
        "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
            button: {
                color: "text.primary",
                m: "0 2px",
                height: 0,
                minHeight: 0,
                mb: {
                    lsm: "0px",
                    xxs: "10px"
                },
                maxHeight: 0,
                minWidth: 0,
                p: "20px 18px",
                fontSize: "15px",
                fontWeight: 500,
                textTransform: "capitalize",
                "&.Mui-selected": {
                    color: "text.primary",
                    backgroundColor: "background.default"
                }
            }
        }
    }
};

export default styles;