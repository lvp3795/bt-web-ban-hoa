import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function HoaList() {
  const [dataHoa, setDataHoa] = useState([]);
  const axios = require("axios").default;
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        setDataHoa(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { state } = useLocation();
  var flowerfilter;
  if (state === null) {
    flowerfilter = dataHoa;
  } else {
    flowerfilter = dataHoa.filter((flower) => state.maloai === flower.maloai);
  }

  return (
    <section className="flowerList">
      {flowerfilter.map((flower) => {
        return <Flower key={flower.mahoa} {...flower}></Flower>;
      })}
    </section>
  );
}

const Flower = ({ mahoa, hinh, tenhoa, dongia }) => {
  return (
    <article className="flower">
      <img height={200} width={200} src={require(`./img/${hinh}`)} alt="" />
      <div className="product-style">
        <Link to={`/flowerdetail/${tenhoa}`} state={{ mahoa: mahoa }}>
          {tenhoa}
        </Link>
        <AiOutlineShoppingCart size={40}></AiOutlineShoppingCart>
        <br></br>
        <i>Giá bán: {dongia} VND</i>
      </div>
    </article>
  );
};

export default HoaList;
