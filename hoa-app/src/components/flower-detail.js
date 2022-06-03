import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function FlowerDetail() {
  const [data, setData] = useState([]);
  const axios = require("axios").default;
  const { state } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${state.mahoa}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Row>
      <Col md="2"></Col>
      <Col md="8" className="flowerdetail-style">
        {data.map((flower) => {
          const { hinh, tenhoa, mota, dongia, mahoa } = flower;
          return (
            <Row key={mahoa}>
              <Col md="1"></Col>
              <Col md="5">
                <img
                  src={require(`./img/${hinh}`)}
                  alt=""
                  className="imgflowerdetail-style"
                ></img>
              </Col>
              <Col md="5" className="valigncenter">
                <h2>{tenhoa}</h2>
                <br></br>
                <div>Giá bán: {dongia} VNĐ</div>
                <br></br>
                <div>
                  <i>Thành phần chính:</i>
                </div>
                <div>{mota}</div>
                <br></br>
                <Link to={`/`} state={null} className="green-text">
                  Quay về trang chính
                </Link>
              </Col>
              <Col md="1"></Col>
            </Row>
          );
        })}
      </Col>
      <Col md="2"></Col>
    </Row>
  );
}

export default FlowerDetail;
