import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navibar = () => {
  return (
    <>
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand>T-test</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
