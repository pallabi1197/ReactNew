import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Dedropdown = () => {
  const [stateList, setstateList] = useState([]);

  useEffect(() => {
    getAllState();
  }, []);

  const getAllState = async () => {
    const result = await axios.get(
      "https://freeapi.miniprojectideas.com/api/Annadata/GetAllState"
    );
    setstateList(result.data.data);
  };

  return (
    <>
      <Container>
        <Row gap={3} className="mt-3 py-3">
          <Col sm={6}>
            <Form.Select>
              <option>Select State</option>
              {stateList.map((item) => {
                return <option value={item.stateId}>{item.stateName}</option>;
              })}
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Select>
              <option>City</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 py-5">
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Dedropdown;
