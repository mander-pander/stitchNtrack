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
    let data = req.body.project;
    connection.query(
        "INSERT INTO project (name, needle_size, gauge, date_started, date_finished, user_id) VALUES (?, ?, ?, ?, ?, ?)", [data.name, data.needle_size, data.gauge, data.date_started, data.date_finished, data.user_id], (error) => {
            console.log("success")
            console.log("cowman", data)
            if (error) return res.json({error: error});
        }
    );
});

app.post("/yarn", (req, res) => {
    let data = req.body.yarn;
    connection.query(
        "INSERT INTO yarn (name, weight, yardage, color, project_id) VALUES (?, ?, ?, ?, ?)", [data.name, data.weight, data.yardage, data.color, data.project_id], (error) => {
            console.log("success")
            console.log("cowman", data)
            if (error) return res.json({error: error});
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
