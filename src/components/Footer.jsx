import { Col, Container, Row } from "react-bootstrap";
import { Github, Gear} from "react-bootstrap-icons"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githubLink = "https://github.com/jbsabu/quiz-app";

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <p>
                <small>&copy; {currentYear}</small>
              </p>
              <br />
              <a href={githubLink} target="_blank" rel="noreferrer"></a>
              <Github/>
            </Col>
          </Row>
        </Container>
     
      </footer>
    </>
  );
}
