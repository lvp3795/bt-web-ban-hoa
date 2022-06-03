const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Hoa = require("./model/hoa.js");
const LoaiHoa = require("./model/loaihoa.js");
const User = require("./model/user");
const dbURL =
  "mongodb+srv://test123:test123@cluster0.ynhjs.mongodb.net/dbhoa?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then((result) => {
    console.log("connected to database");
    app.listen(3001, () => {
      console.log("server is listening a port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});

app.get("/", (req, res) => {
  Hoa.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/loaihoa", (req, res) => {
  LoaiHoa.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/:id", (req, res) => {
  const hoaID = parseInt(req.params.id);
  Hoa.find({ mahoa: hoaID })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/search/:ten", (req, res) => {
  const tenHoa = req.params.ten;
  Hoa.find({ tenhoa: { $regex: tenHoa, $options: "i" } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/register", async (req, res) => {
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "error", user: false });
  }
});

//const dshoa = require("./dshoa");
//const dsloaihoa = require("./dsloaihoa");

/*app.get("/", (req, res) => {
  res.send(dshoa);
});

app.get("/loaihoa", (req, res) => {
  res.send(dsloaihoa);
});

app.get("/:id", (req, res) => {
  const hoaID = req.params.id;
  const hoaFilter = dshoa.dshoa.filter((hoa) => hoa.mahoa === parseInt(hoaID));
  res.send(hoaFilter);
});

app.get("/search/:ten", (req, res) => {
  const tenHoa = req.params.ten;
  const hoaFilter = dshoa.dshoa.filter((hoa) =>
    hoa.tenhoa.toLowerCase().includes(tenHoa.toLowerCase())
  );
  res.send(hoaFilter);
});*/
