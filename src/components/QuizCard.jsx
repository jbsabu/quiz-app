import { Container, Row, Col } from "react-bootstrap";

export default function QuizCard({
  quizLength,
  quizData,
  quizId,
  handleAnswer,
}) {
  return (
    <section>
      <Container className="quiz-card">
        <Row>
          <Col>
            <h2>
              ({quizId + 1}/{quizLength} ) {quizData[quizId].question}
            </h2>

            <ul>
              {quizData[quizId].options.map((quizOption, id) => {
                return (
                  <li
                    key={"option" + id}
                    onClick={() => handleAnswer(quizOption.isCorrect)}
                  >
                    {quizOption.answer}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
