import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Type() {
  const [loaiHoa, setLoaiHoa] = useState([]);
  const axios = require("axios").default;
  useEffect(() => {
    axios
      .get("http://localhost:3001/loaihoa")
      .then((res) => {
        setLoaiHoa(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ul-style">
      {loaiHoa.map((loaihoa) => {
        return <LoaiHoa key={loaihoa.maloai} {...loaihoa}></LoaiHoa>;
      })}
      <img src={require("./img/hoa1.jpg")} alt=""></img>
    </div>
  );
}

const LoaiHoa = ({ maloai, tenloai }) => {
  return (
    <Link to={`/${maloai}`} state={{ maloai: maloai }}>
      <li>{tenloai}</li>
    </Link>
  );
};

export default Type;
