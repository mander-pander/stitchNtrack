const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to PlanetScale!");
});

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    connection.query('SELECT * FROM users', function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

app.get("/project", (req, res) => {
    connection.query(
        "SELECT * FROM project",
    function (err, rows) {
        if (err) throw err;
        res.send(rows);
        console.log(rows);
    });
});

app.post("/project", (req, res) => {
    // connection.query(
    //     "INSERT INTO project SET"
    // )
    console.log("cowman")
    res.send("success")
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
