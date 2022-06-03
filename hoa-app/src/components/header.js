import { Col, Row } from "react-bootstrap";
import {
  AiFillMail,
  AiTwotoneCreditCard,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsFlower1, BsCreditCard, BsCreditCardFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  const axios = require("axios").default;

  function registerUser(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/register", { username, password })
      .then((result) => {
        console.log(result);
        alert("Đăng ký thành công");
      })
      .catch((err) => {
        console.log(err);
        alert("Đăng ký ko thành công");
      });
  }

  function loginUser(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        if (result.data.user) {
          alert("Đăng nhập thành công");
          setUserLogin(true);
        } else {
          alert("Đăng nhập không thành công");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const { state } = useLocation();

  useEffect(() => {
    if (state != null) {
      setShow(state.trangthai);
    } else {
      setShow(true);
    }
  }, [state]);

  return (
    <Row>
      <Col md="4">
        <p>
          <span className="green-text">
            <b>(08) 9891234</b>
          </span>
          <br></br>( Giờ mở cửa: 8:00 - 22:00 mỗi ngày )<br></br>
          <AiFillMail size={28} />
          <span>&nbsp;&nbsp;</span>
          <a href="google.com" className="green-text">
            ktphuong@hcmuns.edu.vn
          </a>
          <br></br>
          <BsFlower1 size={28} />
          <span>&nbsp;&nbsp;</span>
          hoadep.com.vn
        </p>
      </Col>
      {show && (
        <>
          {" "}
          <Col md="4">
            {!isLogin ? (
              <form onSubmit={registerUser}>
                <div className="login-style">
                  <b className="not-active" onClick={() => setIsLogin(true)}>
                    Đăng nhập
                  </b>{" "}
                  / <b>Đăng ký</b>
                </div>
                <Row className="matkhau-style">
                  <Col md="5">Tên đăng nhập:</Col>
                  <Col md="6">
                    <input
                      type={"text"}
                      placeholder="username"
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </Col>
                </Row>
                <Row className="matkhau-style">
                  <Col md="5">Mật khẩu:</Col>
                  <Col md="6">
                    <input
                      type={"password"}
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></input>
                  </Col>
                </Row>
                <Row className="matkhau-style">
                  <div className="div-button">
                    <Button className="button-style" size="sm" type="submit">
                      Đăng Ký
                    </Button>
                  </div>
                </Row>
              </form>
            ) : (
              <form onSubmit={loginUser}>
                <div className="login-style">
                  <b>Đăng nhập</b> /{" "}
                  <b className="not-active" onClick={() => setIsLogin(false)}>
                    Đăng ký
                  </b>
                </div>
                <Row className="matkhau-style">
                  <Col md="5">Tên đăng nhập:</Col>
                  <Col md="6">
                    <input
                      type={"text"}
                      placeholder="username"
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </Col>
                </Row>
                <Row className="matkhau-style">
                  <Col md="5">Mật khẩu:</Col>
                  <Col md="6">
                    <input
                      type={"password"}
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></input>
                  </Col>
                </Row>
                <Row className="matkhau-style">
                  <div className="div-button">
                    <Button className="button-style" size="sm" type="submit">
                      Đăng Nhập
                    </Button>
                  </div>
                </Row>
              </form>
            )}
          </Col>
          <Col md="4">
            <div className="thanhtoan-style">
              <b>Có thể thanh toán bằng</b>
            </div>
            <div className="creditcard-style">
              <AiTwotoneCreditCard size={50} />
              <span>&nbsp;&nbsp;</span>
              <BsCreditCardFill size={50} />
              <span>&nbsp;&nbsp;</span>
              <BsCreditCard size={50} />
            </div>
            {userLogin && (
              <div className="user-container">
                <div className="user-style">
                  Xin chào <b>{username}</b>
                </div>
                <div className="user-style" onClick={() => setUserLogin(false)}>
                  <a href="google.com" className="green-text">
                    Thoát đăng nhập
                  </a>
                  <span>&nbsp;&nbsp;</span>
                  <AiOutlineLogout className="logout-icon" size={32} />
                </div>
              </div>
            )}
          </Col>
        </>
      )}

      {!show && (
        <>
          <Col md="8" className="search">
            <h3>Tìm kiếm bó hoa</h3>
            Tên bó hoa:
            <input
              placeholder="Gõ tên hoa cần tìm"
              type="text"
              className="search-bar"
              onChange={(e) => setText(e.target.value)}
            ></input>
            <br></br>
            <Link to={`/timkiem/${text}`} state={{ responseData: text }}>
              <button className="btn-search">Tìm kiếm</button>
            </Link>
          </Col>
        </>
      )}
    </Row>
  );
}

export default Header;
