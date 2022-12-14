const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "expensesdb",
});

app.use(cors())
app.use(express.json());
app.listen(3001, () => console.log("Servidor Rodando"));

app.post("/register", (req, res) => {
  const { first_name } = req.body;
  const { scnd_name } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  let SQL =
    "INSERT INTO users (first_name, scnd_name, email, password) VALUES (?, ?, ?, ?)";
  db.query(SQL, [first_name, scnd_name, email, password], (err, result) => {
    console.log(err);
  });
});

