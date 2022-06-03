import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Row className="menu-style">
      <Col md="3">
        <b>Danh mục hoa</b>
      </Col>
      <Col md="9">
        <Row className="title-style">
          <Col md="3">
            <Link to="/" state={null}>
              Trang chủ
            </Link>
          </Col>
          <Col md="3">
            <Link to="/timkiem" state={{ trangthai: false }}>
              Tìm kiếm bó hoa
            </Link>
          </Col>
          <Col md="3">
            <a href="google.com">Thêm bó hoa mới</a>
          </Col>
          <Col md="3">
            <a href="google.com">Đăng ký mới</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Nav;
