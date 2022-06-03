import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function SearchDisplay() {
  const [searchData, setSearchData] = useState([]);
  const { state } = useLocation();
  const axios = require("axios").default;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/search/${state.responseData}`)
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.responseData]);

  return (
    <>
      <Row>
        <h3 className="search-kq">Kết quả tìm kiếm</h3>
        {searchData.length <= 0 ? (
          <div className="error">
            Không tìm thấy hoa <b>"{state.responseData}"</b>
          </div>
        ) : (
          searchData.map((hoa) => {
            const { mahoa, tenhoa, dongia, hinh, mota } = hoa;
            return (
              <div key={mahoa} className="search-container">
                <div class="img-container">
                  <img
                    className="search-img"
                    src={require(`./img/${hinh}`)}
                    alt=""
                  />
                </div>
                <div class="chitiethoa">
                  <p>
                    Tên bó hoa: <b>{tenhoa}</b>
                  </p>
                  <p>Giá bán: {dongia} VNĐ</p>
                  <p>
                    <i>Thành phần chính:</i> {mota}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </Row>
    </>
  );
}

export default SearchDisplay;
