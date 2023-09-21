import ContactBg from "Assets/contact.png";

const styles = {
    Container: {
        py: "5em",
        position: "relative",
        backgroundImage: theme => `${theme.palette.primary.ContactGradient}, url("${ContactBg}")`
    },
};

export default styles;