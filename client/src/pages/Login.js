import styled from "styled-components"

const Container = styled.div`

`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO YOU NOT REMEMBER YOUR PASSWORD</Link>
                    <LINK>CREATE A NEW ACCOUNT</LINK>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
