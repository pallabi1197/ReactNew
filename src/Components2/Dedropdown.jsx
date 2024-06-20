import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Dedropdown = () => {
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    getAllState();
  }, []);

  const getAllState = async () => {
    const result = await axios.get(
      "https://freeapi.miniprojectideas.com/api/Annadata/GetAllState"
    );
    setStateList(result.data.data);
  };

  const onStateChange = async (event) => {
    const result = await axios.get(
      "https://freeapi.miniprojectideas.com/api/youtube/GetAllDistrict?id=" + event.target.value);

    setDistrictList(result.data.data);
  };

  const onDistrictChange = async (event) => {
    const response = await axios.get(
      "https://freeapi.miniprojectideas.com/api/Annadata/GetAllState" + event.target.value);

    setCityList(response.data.data);
  };

  return (
    <>
      <Container>
        <Row gap={3} className="mt-3 py-3">
          <Col sm={4}>
            <Form.Select onChange={(event)=>onStateChange(event)}>
              <option>Select State</option>
              {stateList.map((item) => {
                return <option value={item.stateId}>{item.stateName}</option>;
              })}
            </Form.Select>
          </Col>

          <Col sm={4}>
            <Form.Select onChange={(event)=>onDistrictChange(event)}>
              <option>Select District</option>
              {districtList.map((item) => {
                return (
                  <option value={item.districtId}>{item.districtName}</option>
                );
              })}
            </Form.Select>
          </Col>

          <Col sm={4}>
            <Form.Select>
              <option>Select City</option>
              {cityList.map((item) => {
                return (
                  <option value={item.cityId}>{item.cityName}</option>
                );
              })}
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
