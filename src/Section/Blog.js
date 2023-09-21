import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import SingleBlog from "Components/Blog/SingleBlog";
import Company from "Components/Blog/Company";

const Blog = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={{ py: "5em" }} id="blog">
            <SectionHeading
                value1="Every Single Update"
                value2="News & Blogs"
                border={false}
            />
            <SingleBlog />
            <Company />
        </Container>
    );
};

export default Blog;