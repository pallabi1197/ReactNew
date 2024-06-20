import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import cities from '../cities.json';

const ShowStateCity = () => {
  const [selectedState, setSelectedState] = useState("");
  const [filterCities, setFilterCities] = useState([]);

  const onStateChange = (e) => {
    setSelectedState(e.target.value);
    setFilterCities(cities.find(city => city.state === e.target.value))
  };


  return (
    <div>
      <Container>
        <Row gap={3} className="mt-3 py-3">
          <Col sm={6}>
            <Form.Select value={selectedState} onChange={onStateChange}>
              <option>Select State</option>
              {cities.map((item) => {
                return <option>{item.state}</option>;
              })}
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Select>
              <option>Select City</option>
              {filterCities?.city?.map((item) => {
                return <option>{item}</option>;
              })}

            </Form.Select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowStateCity;
