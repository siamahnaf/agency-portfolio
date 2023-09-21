import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Form from "Components/Contact/Form";

//Styles
import styles from "Styles/Contact/Contact.styles";

const Contact = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={styles.Container} id="contact">
            <SectionHeading
                value1="Do You Have Any Projects"
                value2="Plz Say Hello"
                border={true}
            />
            <Form />
        </Container>
    );
};
export default Contact;