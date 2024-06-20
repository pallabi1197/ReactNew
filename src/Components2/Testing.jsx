import React, { useState, useEffect } from "react";
import { Container, Row, InputGroup, Form } from "react-bootstrap";

const Testing = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sum, setSum] = useState();

  useEffect(() => {
    setSum(Number(num1 + num2));
  }, [num1 + num2]);

  const handleChange1 = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleChange2 = (e) => {
    setNum2(Number(e.target.value));
  };

  return (
    <div>
      <Container>
        <Row className="mt-3 py-3">
          <InputGroup>
            <Form.Control type="number" value={num1} onChange={handleChange1} />
            <Form.Control type="number" value={num2} onChange={handleChange2} />
            <Form.Control type="number" readOnly value={sum} />
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Testing;
