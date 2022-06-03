import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import Logo from "./components/logo";
import Header from "./components/header";
import Nav from "./components/horizontal-nav";
import Type from "./components/flower-type";
import HoaList from "./components/flower";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlowerDetail from "./components/flower-detail";
import SearchDisplay from "./components/flower-search";

function ShopHoa() {
  return (
    <BrowserRouter>
      <Container className="container-style">
        <Row>
          <Col md="2">
            <Logo />
          </Col>
          <Col md="10" className="header-style">
            <Header></Header>
          </Col>
        </Row>
        <Nav></Nav>
        <Row>
          <Col md="2" className="flowerstyle-style">
            <Type></Type>
          </Col>
          <Col md="10">
            <Routes>
              <Route path="/" index element={<HoaList />}></Route>
              <Route path="/:id" element={<HoaList />}></Route>
              <Route
                path="/flowerdetail/:id"
                element={<FlowerDetail />}
              ></Route>
              <Route path="/timkiem/:id" element={<SearchDisplay />}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default ShopHoa;
