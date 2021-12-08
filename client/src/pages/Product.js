import styled from "styled-components"
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div`

`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product

